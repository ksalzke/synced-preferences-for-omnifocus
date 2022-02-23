## [4.7.2](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.7.1...v4.7.2) (2022-02-23)


### Bug Fixes

* :bug: make parent folder active rather than project so that information is visible when shown ([33524ff](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/33524fff77ffa37da1cd868c1f8370b61516ef20))



## [4.7.1](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.7.0...v4.7.1) (2022-02-09)


### Reverts

* Revert "feat: :sparkles: allow '⚙️ Synced Preferences' folder to be moved within OF database" ([5266359](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/52663598f1c7c6bece588175d59ce59ccd0ecf1b))



# [4.7.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.6.0...v4.7.0) (2022-02-09)


### Features

* :lipstick: improve display of synced prefs project from 'go to' action ([362817d](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/362817debb67530c0bd59fe18742bf8f1aa2ced2))
* :lipstick: make 'show synced preferences' always available ([1975962](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/1975962cd5e25be7ca3f44f3f5ef0eac2b05827b))
* :sparkles: allow '⚙️ Synced Preferences' folder to be moved within OF database ([8a5fd0b](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/8a5fd0b570c954706cf5ce6bd1c4d41f4afb5480))



# [4.6.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.5.0...v4.6.0) (2021-11-18)


### Features

* restructure for easier installation ([edbf901](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/edbf90113824497e10879a439dd9957d43bfc7dd))



# [4.5.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.4.0...v4.5.0) (2021-10-17)


### Features

* add 'Hide Synced Preferences' action ([ebd5350](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/ebd5350ca17737d4d8244e026d7cee0823e844c6))
* add action to go to synced prefs ([30637ff](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/30637ffa4b37658c40475a6b3a25a111acece68b))
* add SF Symbols for actions ([084820a](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/084820a5c58ade109bbece6ba3e9a7044df1028e))



# [4.4.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.3.0...v4.4.0) (2021-10-17)


### Features

* use SAL instead of seq project ([d4a92f8](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/d4a92f87be9af89ccc1a668cce4ca2ec618ab0cd))



# [4.3.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.2.0...v4.3.0) (2021-10-16)


### Features

* implement readBoolean ([ffc0da1](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/ffc0da1943ab1d95c678e883490175a46e09e351))
* implement readData ([32224e5](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/32224e5ab921dfd2a0afb8347e3a2ce355a6c8be))
* implement readDate ([99ad433](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/99ad43388cb0759bcf74d407d3deba4054132e53))
* implement readNumber ([6cdd97c](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/6cdd97c340bddb1e54f481c35a0f407336aa47f3))
* implement readString ([e097bf2](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/e097bf2b55b8a3f6104fac954a58cd1d3a2c594e))
* remove pair if value passed to write is null ([4dc1406](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/4dc14061f0a210e6ba4a21fabb93b19919edc762))



# [4.2.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.1.0...v4.2.0) (2021-10-16)


### Features

* return null from read if key doesn't exist ([9312c32](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/9312c32676e952a042c3a3ca30d2e671788c6085))



# [4.1.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/v4.0.0...v4.1.0) (2021-10-11)


### Features

* add delete method to SyncedPref class ([accc93b](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/accc93bfaa57c29f26254eb13e75e85280fa85dc))



# [4.0.0](https://github.com/ksalzke/synced-preferences-for-omnifocus/compare/a34037b08b66259eedfa6c84b1a014bac574bec4...v4.0.0) (2021-10-11)


* refactor!: rename readPref/writePref to read/write ([d885ff1](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/d885ff1aa82ef7b924346de242f904bf0dab9c5d))


### Features

* first working demo - init ([a34037b](https://github.com/ksalzke/synced-preferences-for-omnifocus/commit/a34037b08b66259eedfa6c84b1a014bac574bec4))


### BREAKING CHANGES

* Method names changed
for consistency with existing OmniFocus Preferences class



