Shippex App (Typescript)
This is a React Native application built using TypeScript. It contains bottom tab navigation and basic screens for Shipments, Scan, Wallet, and Profile.

Features
Bottom Tab Navigation using @react-navigation/bottom-tabs
Screens for Shipments, Scan, Wallet, and Profile
Written in TypeScript
Simple folder structure for easy understanding and scalability
Prerequisites
Before running this project, make sure you have the following installed:

Node.js (>= 12.x)
Yarn or npm
Watchman (for macOS users, install using brew install watchman)
Android Studio (for Android development)
Xcode (for iOS development, macOS only)
For React Native environment setup, follow the official React Native Getting Started Guide based on your development OS.

Installation
Clone the Repository
git clone https://github.com/mezieOX/shippex.git
cd shippex

Install Dependencies

Use yarn
bash
Copy code
yarn install

Set Up Android/iOS

To run the app on Android or iOS, make sure you have an emulator or a real device connected.

For Android, start an emulator via Android Studio or run on a connected Android device.

For iOS, open the ios folder in Xcode and set up a simulator or device.

Run the Metro Bundler

To start the Metro Bundler, run:

bash
Copy code
yarn start
Running the App
For Android
To run the app on an Android emulator or device, use:

bash
Copy code
yarn android
For iOS
To run the app on an iOS simulator or device, use:

bash
Copy code
yarn ios
