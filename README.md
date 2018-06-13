# Build instructions

Folow the instruction how to setup ReactNative [ReactNative Installation](https://facebook.github.io/react-native/docs/getting-started.html)

Clone repository and run
```bash
npm install
```

For Ios
Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

```bash
gem install cocoapods
```

Go to ios directory and run
```bash
cd ios && pod install
```

Running application

IOS
```bash
react-native run-ios
```


Android
```bash
react-native run-android
```
# Requirements

Ios
 - Xcode version : 9.4
 - IOS deployment target : 8.0

Android
 - Android studio version : 3.1.2
 - compile Sdk Version : 23
 - android version : 6.0

 # Assumptions

 1. To add a new location just long-press on a map and press "Save Location".
 1. To view the location info tap on a marker and press "Details".
 1. Default locations are fetched from a predefined URL only once. After that they are stored on a device so user can update them as he wants in a future.