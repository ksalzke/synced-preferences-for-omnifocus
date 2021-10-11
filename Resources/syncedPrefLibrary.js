/* global PlugIn Version projectsMatching Task*/
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
      return prefs[key]
    }

    write (key, value) {
      const prefs = this.getPreferences()
      prefs[key] = value
      this.getPrefTask().note = JSON.stringify(prefs)
    }
  }

  syncedPrefLibrary.getProj = function () {
    return projectsMatching('⚙️ Synced Preferences')[0]
  }

  return syncedPrefLibrary
})()
