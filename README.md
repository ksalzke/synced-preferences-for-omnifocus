# About

This is an Omni Automation plug-in bundle for OmniFocus that is intended to allow preferences for other plug-ins to be synced between devices.

There is an existing [`Preferences`](https://omni-automation.com/shared/preferences.html) class in the OmniFocus API, however these preferences are local to the device.

_Credit:_

* The idea for this script came from Tristan Pratt (@prat0088) on the OmniFocus Slack channel.

* The use of a dropped folder to store the preferences comes courtesy of the same implementation in Curt Clifton's [Populate Template Placeholders](http://curtclifton.net/poptemp) AppleScript.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from an amateur on the internet!)_

## Known issues

Refer to ['issues'](https://github.com/ksalzke/synced-preferences-for-omnifocus/issues) for known issues and planned changes/enhancements.

# Installation & Set-Up

1. Download the [latest release](https://github.com/ksalzke/synced-preferences-for-omnifocus/releases/latest).
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file to your OmniFocus plug-in library folder (or open it to install).

## '⚙️ Synced Preferences' Storage

The library uses a project inside a dropped folder named `⚙️ Synced Preferences` to store any preferences, which is then synced using the regular OmniFocus sync method (like any other projects and tasks in the database would be). This is created automatically by the plug-in when it is needed.

Each `SyncedPref` instance is stored as JSON in the note of a task whose name is the preference ID, specified on creation.

The implementation is intended to mirror the existing `Preferences` class in the OmniFocus API as much as possible.

## Example Usage

```
// load the library
const syncedPrefsLib = PlugIn.find('com.KaitlinSalzke.SyncedPrefLibrary').library('syncedPrefLibrary')

// load the SyncedPref class
const SyncedPref = syncedPrefsLib.SyncedPref

// create a synced preferences instance for reading/writing preferences
const syncedPrefs = new SyncedPref('com.CompanyName.PluginName')

// write a preference
syncedPrefs.write('myFirstPreferenceSet', true)

// read a preference
const prefResult = syncedPrefs.read('myFirstPreferenceSet')
```

# Actions

## Show Synced Preferences

This action navigates to the project used to store Synced Prefernces data, and makes its containing folder active so that the information is visible. This action is only available when no projects or tasks are selected (so that it is not shown on the share sheet on iOS)

## Hide Synced Preferences

This action sets the status of the synced preferences containing folder to dropped, so that it is not visible. This action is only available when the folder has an active status (i.e. its status is not set to dropped.)

# Classes

This plug-in contains the following class within the `syncedPrefLibrary` library:

## SyncedPref

### Constructors

#### `new SyncedPref (identifier)`

Creates a new SyncedPref instance, with the specified string as an identifier. _Note that unlike the `Preferences` class the identifier specified may not be null._

### Instance Functions

#### `.read (key)`

Returns the previously stored value for the given key, or null if no value is stored.

#### `.readBoolean (key)`

Returns the previously stored value as a Boolean, or false if there is no stored value or it can't be converted to a Boolean.

#### `.readString (key)`

Returns the previously stared value as a String, or null if there is no stored value or it is not a String.

#### `.readNumber (key)`

Returns the previously stored value as a Number, or null if there is no stored value or it is not a Number.

#### `.readDate (key)`

Returns the previously stored vaule as a Date, or null if there is no stored value or it cannot be converted to a Date.

#### `.readData (key)`

Returns the previously stored value as a Data object, or null if there is no stored value or it cannot be read as a Data object.

#### `.write (key, value)`

Stores the specified key/value pair, or removes the pair if the value is null.

#### `.remove (key)`

Removes the previously stored value for the given key.

#### `.getPrefTask ()`

Returns the `Task` object that is being used to store the SyncedPref instance.

#### `.getPreferences ()`

Returns a `JSON` object containing the preferences from the SyncedPref instance.

# Functions

This plug-in contains the following function within the `syncedPrefLibrary` library:

## `getProj ()`

This function returns (and creates if necessary) the `Project` that is used to store the synced preferences.
