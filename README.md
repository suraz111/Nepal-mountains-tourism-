<div align="center">

# 🏔️ The Nepal Himalayas
### Mountain Intelligence & Native Sherpa Direct Connect

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fmountains-of-nepal.netlify.app&up_message=online&up_color=success&style=for-the-badge&logo=netlify)](https://mountains-of-nepal.netlify.app)
[![Live Demo](https://img.shields.io/badge/Live_Site-mountains--of--nepal.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://mountains-of-nepal.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Built With Vanilla Web](https://img.shields.io/badge/Stack-HTML5%20•%20CSS3%20•%20Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)

<br/>

<p align="center">
  <strong>An authoritative, high-performance alpine intelligence platform delivering detailed 8,000m route dossiers, interactive elevation telemetries, and 100% direct connection with certified native Sherpa guides and licensed Nepalese agencies with zero middleman fees.</strong>
</p>

<p align="center">
  <a href="https://mountains-of-nepal.netlify.app"><strong>Explore Live Platform »</strong></a>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-peak-telemetry--mountain-catalog">Mountain Catalog</a> •
  <a href="#-project-architecture">Architecture</a> •
  <a href="#-local-development">Local Setup</a> •
  <a href="#-deployment-guide">Deployment</a> •
  <a href="#-license">License</a>
</p>

---

<br/>

<a href="https://mountains-of-nepal.netlify.app">
  <img src="assets/images/07_hero_everest_panorama.jpg" alt="The Nepal Himalayas Platform Banner" width="100%" style="border-radius: 8px;"/>
</a>

</div>

<br/>

## 🌐 Live Production URL

The application is deployed and live at:
> **🔗 [https://mountains-of-nepal.netlify.app](https://mountains-of-nepal.netlify.app)**

---

## 🌟 Key Features

### 🎬 4K Dynamic Ambient Video Engine
- **Seamless Video Switcher**: Live ambient background video engine featuring Mount Everest, K2, Manaslu, and Ama Dablam.
- **Alpine Dark Luxury Design**: Editorial aesthetics with frosted glassmorphic navigation, micro-interactions, and refined typography (*Cinzel*, *Playfair Display*, *Space Mono*, and *Inter*).

### 🗺️ Interactive South Col Route & Elevation Stepper
- **Stage-by-Stage Telemetry**: 8-stage interactive elevation profile tracking the journey from Lukla (`2,860m`) through Namche Bazaar, Everest Base Camp (`5,364m`), Khumbu Icefall (`6,065m`), Camp 2 (`6,400m`), Camp 3 (`7,300m`), South Col (`7,920m`), to the Hillary Step and Summit (`8,848.86m`).
- **High-Altitude Waypoints**: Visual checklists, elevation telemetry, and stage-specific acclimatization logistics.

### 📊 Real-Time Expedition & Oxygen Calculator
- Dynamic calculation engine outputting **estimated duration**, **supplemental oxygen cylinders (4L/min)**, **gear weight**, and **historical summit success probability** customized to climber experience.

### 📋 Summit Intel Technical Dossiers
- Dynamic in-page briefing modal delivering instant crux hazard analysis, high-altitude prerequisites, oxygen strategy, and camp profiles with zero page reloads.

### 🧗 Direct Sherpa & Licensed Agency Directory
- Verified directory of **IFMGA/UIAGM** and **NNMGA** certified Nepali mountain leaders with verified summit records and direct daily rates.
- Ministry-licensed Kathmandu & Namche Bazaar expedition agencies with 1-click WhatsApp direct consultation.

---

## 🏔️ Peak Telemetry & Mountain Catalog

| Mountain / Route | Official Elevation | Range / Region | Climbing Window | Key Technical Crux |
| :--- | :--- | :--- | :--- | :--- |
| **Mount Everest** | `8,848.86 m` | Mahalangur / Khumbu | Spring (Apr–May) | Khumbu Icefall, Lhotse Face, Hillary Step |
| **Everest & Lhotse Combo** | `8,848m / 8,516m` | Mahalangur / Khumbu | Spring (May) | South Col Traverse, Lhotse Couloir |
| **K2 Savage Mountain** | `8,611 m` | Karakoram / Baltistan | Summer (Jun–Aug) | House's Chimney, Black Pyramid, Bottleneck |
| **Manaslu True Summit** | `8,163 m` | Mansiri / Gorkha | Autumn (Sep–Oct) | Icefall Crevasses, Exposed Knife-edge Ridge |
| **Ama Dablam** | `6,812 m` | Khumbu Himal | Autumn (Oct–Nov) | Yellow Tower (5.8 rock), Grey Tower, Ice Couloirs |
| **Lobuche East** | `6,119 m` | Khumbu Himal | Spring & Autumn | 45° Fixed Rope Jumar, Acclimatization Ridge |
| **Everest Base Camp Trek** | `5,364 m` | Sagarmatha National Park | All Seasons | High-Altitude Acclimatization, Kala Patthar |

---

## 📁 Project Architecture

The platform is structured as an **ultra-lightweight Single-Page Application (SPA)** with zero runtime dependencies for lightning-fast First Contentful Paint (FCP) and smooth 60fps animations.

```text
mountains-of-nepal/
├── index.html                  # Master Consolidated Single-Page Application (SPA)
├── css/
│   └── style.css               # Editorial Alpine Luxury Design System & Responsive Tokens
├── js/
│   └── main.js                 # Interactive Engine (Route Stepper, Calculator, Search, Modals)
├── assets/
│   ├── images/                 # High-Resolution Mountain & Guide Photography
│   └── videos/                 # 4K Ambient Video Loops
├── netlify.toml                # Netlify Production Routing, Security Headers & Asset Caching
├── .gitignore                  # Git Clean Tracking Rules
├── LICENSE                     # MIT Open Source License
└── README.md                   # Project Documentation
```

---

## 💻 Local Development

No package installation or compilation steps are required.

### 1. Clone Repository
```bash
git clone https://github.com/<your-username>/nepal-himalayas.git
cd nepal-himalayas
```

### 2. Run Local Web Server
You can start a local server using any of the following:

#### Using Python:
```bash
python -m http.server 8000
```
*Visit `http://localhost:8000` in your browser.*

#### Using Node / npx:
```bash
npx serve .
```

#### Using VS Code:
Right-click [`index.html`](file:///d:/mini_project/index.html) and select **"Open with Live Server"**.

---

## 🚀 Deployment Guide

### Deploying to Netlify
The project includes a production-ready [`netlify.toml`](file:///d:/mini_project/netlify.toml) configured with immutable asset caching and security headers.

```bash
# Deploy via Netlify CLI
npx netlify deploy --prod --dir=.
```

**Live Production Target:** [https://mountains-of-nepal.netlify.app](https://mountains-of-nepal.netlify.app)

---

## 📜 License

This project is licensed under the **MIT License** — see the [`LICENSE`](file:///d:/mini_project/LICENSE) file for details.

<br/>

<div align="center">
  <sub>Dedicated to promoting ethical mountaineering, fair wages for native Sherpa guides, and sustainable tourism in Nepal.</sub>
</div>
