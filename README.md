# Cytopia - Technical test - React Native Expo + Typescript

## 💡 Problem description

This repository contains an implementation of a minimalist visual editor with the following rules:

- \*\*Rule 1 - Create a dummy app with the following pages: Home, Information.
- \*\*Rule 2 - Set up a form on the Information page with the following fields: Last name, first name, date of birth.
- \*\*Rule 3 - The form defined in R2 does not include a save button, but data modifications must be sent to the api to be persisted on the server side without clicking on the validate button.
- \*\*Rule 4 - Display the information from the form on the home page, in the form of a sentence: "Hello first name, your birthday is in nbDays days. If this is incorrect, you can change the information on your information page".

## 🚀 Solution implemented

### Project description

- There is some bonus feature :
  1. Toast notification when the user correctly update him informations.
  2. Use of Redux Saga
  3. Bottom bar navigation with the profile picture of the user as the icon.

### Limits

- **BirhtDate**: One of the rules was to retrieve the date of birth from the https://reqres.in/ api, but this was nowhere to be found, so I had to do without it.

- **Environnement file**: I've deliberately pushed the environment file for the sake of ease of technical testing. This is not a good practice in a real setting.

  > **To go further**: We can simply add the .env to the .gitignore.

## 🤖 Code organization

### Dependencies

- First make sure you have [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) installed locally

- Then, to install the project dependencies, simply run `yarn install` from the top level folder of this repository

- Finally you can run the project with `yarn start`
