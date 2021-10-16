# About

This is an Omni Automation plug-in bundle for OmniFocus that is intended to allow preferences for other plugins to be synced between devices.

There is an existing [`Preferences`](https://omni-automation.com/shared/preferences.html) class in the OmniFocus API, however these preferences are local to the device.

_Credit:_
* The idea for this script came from Tristan Pratt (@prat0088) on the OmniFocus Slack channel.
* The use of a dropped folder to store the preferences comes courtesy of the same implementation in Curt Clifton's [Populate Template Placeholders](http://curtclifton.net/poptemp) AppleScript.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from an amateur on the internet!)_

## Known issues

Refer to the 'issues' in this repo for any known issues and planned changes/enhancements.

# Installation & Set-Up

1. Click on the green `Clone or download` button above to download a `.zip` file of all the files in this GitHub repository.
2. Unzip the downloaded file.
3. Rename the entire folder to anything you like, with the extension `.omnifocusjs`
4. Move the resulting file to your OmniFocus plug-in library folder.

## '⚙️ Synced Preferences' Storage

The library uses a project inside a dropped folder named `⚙️ Synced Preferences` to store any preferences, which is then synced using the regular OmniFocus sync method (like any other projects and tasks in the database would be). This is created automatically by the plugin when it is needed.

Each `SyncedPref` instance is stored as JSON in the note of a task whose name is the preference ID, specified on creation.

The implementation is intended to mirror the existing `Preferences` class in the OmniFocus API as much as possible.

# Actions

This plug-in does not currently contain any actions.

# Classes

This plugin contains the following class within the `syncedPrefLibrary` library:

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

This plugin contains the following function within the `syncedPrefLibrary` library:

## `getProj ()`

This function returns (and creates if necessary) the `Project` that is used to store the synced preferences.