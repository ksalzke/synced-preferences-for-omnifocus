/* global PlugIn Version Task folderNamed Folder Project */
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

    write (key, value) {
      const prefs = this.getPreferences()
      prefs[key] = value
      this.getPrefTask().note = JSON.stringify(prefs)
    }

    remove (key) {
      const prefs = this.getPreferences()
      delete prefs[key]
      this.getPrefTask().note = JSON.stringify(prefs)
    }
  }

  syncedPrefLibrary.getProj = function () {
    const folder = folderNamed('⚙️ Synced Preferences') || new Folder('⚙️ Synced Preferences')
    const project = folder.projectNamed('⚙️ Synced Preferences') || new Project('⚙️ Synced Preferences', folder)

    // drop folder if not already dropped
    folder.active = false

    return project
  }

  return syncedPrefLibrary
})()
