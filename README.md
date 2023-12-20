
# Driivz_test - ISS Tracker

## Overview
##### Driivz_test is a single-page application built with React.js, TypeScript, and Vite. The application is designed to track the International Space Station (ISS) over a world map.

## Getting Started
#### Clone the repository:
```
git clone https://github.com/bohuslavskyi/Driivz_test.git
```

#### Navigate to the project directory:
```
cd Driivz_test
```

#### Install dependencies:

```
npm install
```

#### Start the development server:
```
npm run dev
```

## The application will be accessible at [http://localhost:5173/](http://localhost:5173/).



## How to:
* #### !!! Make sure you call the API every 2 seconds and no less. You might get blocked. !!!
* The ISS's current location is delivered via a remote API.
* Learn how to use it here: http://open-notify.org/Open-Notify-API/ISS-Location-Now/

## Additional Documentation

For more detailed information, please refer to the [User Manual (PDF)](https://github.com/bohuslavskyi/Driivz_test/blob/main/DriivzTest/ISS_Location.pdf).

## Requirements:
* A user can view the current location of the ISS over right part of the screen The ISS location must be updated every 2 seconds (do not exceed this, otherwise you will be banned).
* A user can save the current location of the ISS by clicking over a dedicated button
* A user can view a list of the saved ISS locations within a scrollable container on the left. (Card must include only the Lat/Lon and date)
* A user can select a saved location, and the selected point will be shown on the right part of the screen. Add some indication for selected card (like background). 
*  Second click on the selected location will deselect it. Show the current ISS position on the right side.

## Bonus part:
* The saved locations list can be filtered via a filter input box above it.

* A user can delete a last-saved-location item via a click.

* When the user refreshes the application - the current state of the application should be kept.

* The app should be responsive for the Web