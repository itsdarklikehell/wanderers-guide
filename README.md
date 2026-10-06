# Wanderer's Guide

[![CI](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/ci.yml/badge.svg)](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/ci.yml)
[![E2E](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/e2e.yml/badge.svg)](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/e2e.yml)
[![Last commit](https://img.shields.io/github/last-commit/wanderers-guide/wanderers-guide)](https://github.com/wanderers-guide/wanderers-guide/commits)
[![Contributors](https://img.shields.io/github/contributors/wanderers-guide/wanderers-guide)](https://github.com/wanderers-guide/wanderers-guide/graphs/contributors)
[![License](https://img.shields.io/github/license/wanderers-guide/wanderers-guide)](LICENSE.txt)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white)](https://discord.gg/FxsFZVvedr)

> An open-source character builder and digital toolbox for Pathfinder 2e and Starfinder 2e.

## Features

- **Character Builder**: Create and manage characters for Pathfinder 2e and Starfinder 2e
- **Campaign Management**: Organize campaigns, encounters, and NPCs
- **Homebrew Support**: Create and share custom content
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **PWA Support**: Install as a Progressive Web App for offline access
- **Export/Import**: Backup and restore characters, campaigns, and homebrew as JSON files
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Quick links

- [Web App](./frontend)
- [Serverless API](./supabase)
- [Legacy App Repo](https://github.com/wanderers-guide/wanderers-guide-legacy)

## Documentation

- [Local development](https://docs.wanderersguide.app/development) — run the app locally.
- [Self-hosting with Docker](https://docs.wanderersguide.app/docker) — host your own instance.
- [API reference](https://docs.wanderersguide.app/api-reference/introduction) — build your own client or integration.

## Screenshots

![Wanderer's Guide Home](docs/images/hero-light.png)
![Wanderer's Guide Dark](docs/images/hero-dark.png)

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for self-hosting)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/wanderers-guide/wanderers-guide.git
   cd wanderers-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run docker:start
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Production Build

```bash
cd frontend
npm run build
npm run preview
```

### Docker Deployment

```bash
docker compose up -d
```

## Usage

### Creating a Character

1. Navigate to the Characters page
2. Click "New Character"
3. Follow the character creation wizard
4. Customize your character's abilities, skills, and equipment

### Managing Campaigns

1. Navigate to the Campaigns page
2. Create a new campaign or select an existing one
3. Add encounters, NPCs, and notes
4. Share your campaign with players

### Exporting/Importing Data

1. Go to the character or campaign you want to export
2. Click the Export button to download as JSON
3. To import, click Import and select a backup file
4. Data includes all character/campaign details

### Dark Mode

- Click the theme toggle in the navbar to switch between light and dark modes
- The app respects your system preference by default
- Your preference is saved in localStorage

## PWA Installation

1. Open Wanderer's Guide in Chrome or Edge
2. Click the install icon in the address bar
3. Follow the prompts to install
4. Launch from your home screen or app drawer

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

See [LICENSE.txt](LICENSE.txt) for more information.
