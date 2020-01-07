# CloudApp

Photo cloud application

# Prerequisite

cocopods
`brew install cocoapods`

do `pod install` inside ios folder

And assigning the Command Line Tools in
Xcode > Preferences > Locations

If got duplicate files error when tried to run ios emulator. Do:

1. remove Pods directory and Podfile.lock
2. do pod install inside ios directory

When add new dependencies. Run following command on root folder
react-native link
