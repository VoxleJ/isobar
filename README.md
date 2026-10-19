# Isobar

A weather dashboard for comparing forecasts from ECMWF, GFS, DWD ICON, and the US National Weather Service.

Temperature, cloud cover, and precipitation share one timeline. Switch the primary source to see its forecast in detail, or select several sources to compare where they agree and where they diverge.

## Features

- City search with forecasts shown in the location's timezone
- 3-, 7-, and 14-day views, subject to each source's available forecast
- Hourly inspection by mouse, touch, or keyboard
- Celsius and Fahrenheit temperature units
- Daily high/low temperatures and precipitation totals
- Location and unit preferences saved in your browser

## Reading the chart

The colored curve follows the primary source's temperature forecast. Dashed lines show other selected sources. The shaded band spans their minimum and maximum temperatures wherever at least two selected sources have data. It measures disagreement between forecasts, not a statistical confidence interval.

Cloud cover, precipitation, and daily summaries follow the primary source. Shorter forecasts stop when their data ends. The NWS adapter doesn't provide rainfall amounts or cloud cover.

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

## Source

The app uses plain HTML, CSS, JavaScript, and Canvas. Edit `index.html` for page structure, `style.css` for appearance, and `app.js` for forecast loading and chart behavior.

## Data sources

ECMWF, GFS, and ICON forecasts and city search are provided by [Open-Meteo](https://open-meteo.com/). Weather data is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). US official forecasts come directly from the [National Weather Service](https://www.weather.gov/documentation/services-web-api).

Forecasts load when the page opens or you select Refresh. Requests go directly from your browser to the providers. Live data requires internet access and is subject to provider availability and usage limits.
