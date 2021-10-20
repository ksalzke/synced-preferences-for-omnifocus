/* global PlugIn Version Task folderNamed Folder Project Data */
/* eslint spaced-comment: ["error", "always", { "exceptions": ["{"] }] */
(() => {
  const syncedPrefLibrary = new PlugIn.Library(new Version('1.0'))

  syncedPrefLibrary.SyncedPref = class {
    constructor (identifier) {
      this.identifier = identifier
      return this
    }

    getPrefTask () {
      return syncedPrefLibrary.getProj().taskNamed(this.identifier) || new Task(this.identifier, syncedPrefLibrary.getProj())
    }

    getPreferences () {
      const note = this.getPrefTask().note
      if (note === '') return {}
      return JSON.parse(note)
    }

    read (key) {
      const prefs = this.getPreferences()
      return prefs[key] === undefined ? null : prefs[key]
    }

    readBoolean (key) {
      const value = this.read(key)
      try {
        return !!value
      } catch {
        return false
      }
    }

    readString (key) {
      const value = this.read(key)
      if (Object.prototype.toString.call(value) === '[object String]') return value
      else return null
    }

    readNumber (key) {
      const value = this.read(key)
      if (value === null || typeof (value) !== 'number') return null
      else return value
    }

    readDate (key) {
      const value = this.read(key)
      if (value === null) return null
      if (isNaN(Date.parse(value))) return null
      try {
        return new Date(value)
      } catch {
        return null
      }
    }

    readData (key) {
      const value = this.read(key)
      if (value === null) return null
      try {
        return Data.fromString(value)
      } catch {
        return null
      }
    }

    write (key, value) {
      const prefs = this.getPreferences()
      if (value === null) this.remove(key)
      else {
        prefs[key] = value instanceof Data ? value.toString() : value
        this.getPrefTask().note = JSON.stringify(prefs)
      }
    }

    remove (key) {
      const prefs = this.getPreferences()
      delete prefs[key]
      this.getPrefTask().note = JSON.stringify(prefs)
    }
  }

  syncedPrefLibrary.getProj = function () {
    const name = '⚙️ Synced Preferences'

    const createFolder = () => {
      const created = new Folder(name)
      created.active = false
      return created
    }
    const folder = folderNamed(name) || createFolder()

    const project = folder.projectNamed(name) || new Project(name, folder)

    // make SAL
    project.containsSingletonActions = true

    return project
  }

  return syncedPrefLibrary
})()
