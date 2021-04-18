# SpaceX WorkShop

A small React app built around the public [SpaceX API v4](https://github.com/r-spacex/SpaceX-API). Shows company info, rockets, past and upcoming launches.

## Features

- Company overview on the home page
- Rocket details (Falcon 1, Falcon 9, Falcon Heavy, Starship)
- Past launches calendar with search by name
- Upcoming launches list
- Launch details page with patch, date, flight number and YouTube video
- 404 page, scroll-to-top button, error banner

## Stack

- React 16
- React Router 5
- react-rellax-wrapper, react-youtube
- Plain CSS, no preprocessors
- Created with Create React App

## Run

```
npm install
npm start
```

Open http://localhost:3000

## Build

```
npm run build
```

## Project structure

```
src/
  components/
    Calendar/      past launches list with search
    Details/       single launch view
    Features/      rocket overview
    Footer/        site footer with social links
    Header/        site header with navigation
    Home/          company info on the landing page
    Loader/        spinner shown while data loads
    Main/          shared title block with background video
    NotFound/      404 page
    ScrollTop/     floating "back to top" button
    Upcoming/      future launches list
    useLaunches/   hook for past launches
  service/
    FetchData.js   SpaceX API client
  App.js
  index.js
  style.css
```
