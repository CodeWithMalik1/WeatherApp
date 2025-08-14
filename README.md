# ​ Weather Info Cards App

A sleek, responsive React/Vite application that turns live weather data into beautiful info cards—powered by **Material UI** for a clean and modern look.

**Live Demo:**  
[Explore the app here](https://rad-marzipan-4dcaea.netlify.app/)

---

##  Features

- **City Weather Cards** – View real-time weather details for your chosen locations.
- **Elegant UI** – Built with Material UI components for a polished appearance.
- **Responsive Design** – Looks great on phones, tablets, and desktops.
- **Fast & Lightweight** – Powered by Vite for lightning-fast build and dev performance.

---

##  Tech Stack

| Stack                           | Purpose                                |
|----------------------------------|------------------------------------------|
| **React** + **Vite**             | Fast, modern frontend tooling            |
| **Material UI**                  | Stylish and responsive UI components     |

---

##  Project Structure

src/
┣ components/
┃ ┗ WeatherCard.jsx
┣ App.js
┗ index.js

public/
README.md

- **`src/components/WeatherCard.jsx`** — Central component handling weather data fetching, card layout, and rendering logic.
- **`App.js`** — Main container orchestrating which cities to display.
- **`index.js`** — React entry point bolstered by Vite’s fast refresh capabilities.

---

##  Getting Started

### Clone the Project
```bash
git clone https://github.com/CodeWithMalik1/WeatherApp
cd weather-info-cards
```
Install Dependencies
```
npm install
```
Run Locally
```
npm run dev
```
Then navigate to http://localhost:5173 (default Vite port) to explore the app in action.

Customization

Want to tweak or enhance the experience?

Add or remove cities — Modify the list in App.js.

Switch data source — Update fetch logic in WeatherCard.jsx to point to your preferred API.

Improve display — Tweak Material UI styling, add themes, animations, or more weather stats.

Contributing

Contributions are always welcome! Here’s how to get involved:

Fork the repo

Create a new branch (git checkout -b feature/my-enhancement)

Implement your changes

Open a pull request — we’ll review and merge!

Feel free to file bugs or suggest features via the Issues tab.
