/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
    const lib = this.syncedPrefLibrary

    const syncedPrefProject = lib.getProj()

    await document.newWindow()

    syncedPrefProject.parentFolder.active = true // so that information is visible when shown
    const urlStr = 'omnifocus:///task/' + syncedPrefProject.id.primaryKey
    URL.fromString(urlStr).call(() => {})
  })

  action.validate = function (selection, sender) {
    return true
  }

  return action
})()
