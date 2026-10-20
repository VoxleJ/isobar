# Isobar

A weather dashboard for comparing forecasts from ECMWF, GFS, DWD ICON, and the US National Weather Service.

Temperature, cloud cover, and precipitation share one timeline. Switch the primary source to see its forecast in detail, or select several sources to compare where they agree and where they diverge.

## Features

- Current temperature, feels-like temperature, humidity, wind, gusts, pressure, sunrise, and sunset
- Recent radar playback with a timeline, opacity control, and coverage mask
- City search with forecasts shown in the location's timezone
- 3-, 7-, and 14-day views, subject to each source's available forecast
- Hourly inspection by mouse, touch, or keyboard
- Celsius and Fahrenheit temperature units
- Daily high/low temperatures and precipitation totals
- Location and unit preferences saved in your browser

## Reading the chart

The colored curve follows the primary source's temperature forecast. Dashed lines show other selected sources. The shaded band spans their minimum and maximum temperatures wherever at least two selected sources have data. It measures disagreement between forecasts, not a statistical confidence interval.

Cloud cover, precipitation, and daily summaries follow the primary source. Shorter forecasts stop when their data ends. NWS cards use its condition descriptions and peak hourly precipitation probability; the adapter does not provide rainfall amounts or cloud cover. The displayed probability is the highest hourly value, not a full-day probability.

Current conditions are an Open-Meteo model estimate, independent of the selected forecast source.

Radar shows recent historical imagery from RainViewer, not predicted precipitation. The displayed timestamp is the composite frame time; individual radar scans may be older. Clear map areas do not guarantee dry weather, especially outside radar coverage.

The sample-data option uses generated values to demonstrate the interface. Refresh returns to live forecasts.

## Run locally

Serve this folder with any static web server. With Python installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

On Windows, use `py` instead of `python3`. Open http://localhost:8000.

With Docker:

```sh
docker compose up -d --build
```

Open http://localhost:8080. Stop it with `docker compose down`.

## GitHub Pages

Publish the repository's `main` branch from `/(root)` in **Settings → Pages**. Keep `index.html`, `app.js`, `style.css`, and `favicon.svg` in that root folder. No build step is required.

## Source

The app uses plain HTML, CSS, JavaScript, and Canvas. Edit `index.html` for page structure, `style.css` for appearance, and `app.js` for forecasts and charts. `weather.js` handles current conditions and radar, with its layout in `weather.css`. The `vendor` folder contains Leaflet and its license.

## Data sources

ECMWF, GFS, and ICON forecasts and city search are provided by [Open-Meteo](https://open-meteo.com/). Weather data is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). US official forecasts come directly from the [National Weather Service](https://www.weather.gov/documentation/services-web-api).

Forecasts load when the page opens or you select Refresh. Requests go directly from your browser to the providers. Live data requires internet access and is subject to provider availability and usage limits.

Radar imagery is provided by [RainViewer](https://www.rainviewer.com/) for personal and educational use. The basemap uses [OpenStreetMap](https://www.openstreetmap.org/copyright) tiles. Keep the map attribution visible and follow the providers' usage policies. No CARTO key is needed.

[Leaflet](https://leafletjs.com/) is distributed under the BSD 2-Clause license; its license is included in `vendor/LEAFLET-LICENSE.txt`.
