# Web GIS — Public Facility Mapping & Regional Clustering

An interactive Web GIS application for visualizing the distribution of public facilities (schools, hospitals, and sports facilities) alongside spatial clustering results.

> **Live Demo:** https://ibnugifari.github.io/facility-cluster-map

---

## About the Project

This project demonstrates how geospatial data can be used to analyze and understand the distribution of public facilities across a region. By combining interactive mapping with clustering analysis, the application provides intuitive visual insights to support spatial decision-making.

The map is built from geospatial data processed in QGIS and rendered in the browser using Leaflet.js, with no backend required.

---

## Features

- **Interactive Map** — Zoom and pan to explore the region freely
- **Public Facility Layers** — Toggle visibility for schools, hospitals, and sports facilities independently
- **Regional Clustering** — Areas grouped and color-coded based on clustering analysis results
- **Popups** — Click any point or layer to view its details
- **Map Legend** — Explains all symbols and colors used on the map

---

## Tech Stack

| Tool         | Purpose                                  |
| ------------ | ---------------------------------------- |
| QGIS         | Geospatial data processing and analysis  |
| qgis2web     | Export QGIS project to Web GIS format    |
| Leaflet.js   | Interactive map rendering in the browser |
| GitHub Pages | Static site hosting and deployment       |

---

## Project Structure

```
├── index.html
├── css/
├── js/
├── data/
└── layers/
```

---

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/IbnuGifari/facility-cluster-map.git
   ```

2. Navigate into the project folder:

   ```bash
   cd repository-name
   ```

3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code for best results.

---

## Deployment

This project is deployed via GitHub Pages:

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set the source branch to `main`
4. Your site will be available at the provided URL

---

## Notes

- GeoJSON data has been simplified to optimize web performance
- Coverage is limited to selected regions, not all of Indonesia

---

## Future Improvements

- Filter by facility category or cluster group
- Backend integration for dynamic data updates
- Analytics dashboard with summary statistics
- Performance optimization for larger datasets

---

## Credits

- Administrative boundary data: [GADM](https://gadm.org)
- Map tiles: [OpenStreetMap](https://www.openstreetmap.org) contributors
- QGIS & Leaflet.js communities

---

## Author

**Ibnu Khairy Algifari**  
Information Systems & Technology Student
