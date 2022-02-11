# Agora React Native Meeting Link

Configure universal links with expo to launch the agora uikit using meeting urls


## Prerequisites
- An Agora developer account (It’s free! [Sign up here](https://sso.agora.io/en/signup?utm_source=medium&utm_medium=blog&utm_campaign=use-meeting-urls-for-an-agora-video-call-with-the-react-native-uikit))
- Node.js LTS release
- Expo CLI (`npm i -g expo-cli`)

## How to Use

This project is built using [Expo](https://expo.dev/).

- Edit `app.json` to define your deeplink scheme and universal link host
- Edit line 34 in `./screens/TabTwoScreen.tsx` to use your Agora App ID
- Verify Domain for [iOS](https://developer.apple.com/documentation/bundleresources/applinks) & [Android](https://developer.android.com/training/app-links/verify-site-associations)
- Execute `expo prebuild` to update the native files with your `app.json` details
- Execute `expo run:android` or `expo run:ios`
