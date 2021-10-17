/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
    const lib = this.syncedPrefLibrary

    const syncedPrefProject = lib.getProj()

    syncedPrefProject.parentFolder.active = false
  })

  action.validate = function (selection, sender) {
    // only show when folder is active
    const lib = this.syncedPrefLibrary
    return lib.getProj().parentFolder.active
  }

  return action
})()
