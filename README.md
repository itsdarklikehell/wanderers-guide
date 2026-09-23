![Wanderer's Guide](https://legacy.wanderersguide.app/images/logo.png "Wanderer's Guide logo")

[![CI](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/ci.yml/badge.svg)](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/ci.yml)
[![E2E](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/e2e.yml/badge.svg)](https://github.com/wanderers-guide/wanderers-guide/actions/workflows/e2e.yml)
[![Last commit](https://img.shields.io/github/last-commit/wanderers-guide/wanderers-guide)](https://github.com/wanderers-guide/wanderers-guide/commits)
[![Contributors](https://img.shields.io/github/contributors/wanderers-guide/wanderers-guide)](https://github.com/wanderers-guide/wanderers-guide/graphs/contributors)
[![License](https://img.shields.io/github/license/wanderers-guide/wanderers-guide)](LICENSE.txt)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white)](https://discord.gg/FxsFZVvedr)

> An open-source character builder and digital toolbox for Pathfinder 2e and Starfinder 2e.

## Quick links

- [Web App](./frontend)
- [Serverless API](./supabase)
- [Legacy App Repo](https://github.com/wanderers-guide/wanderers-guide-legacy)

## Documentation

- [Local development](https://docs.wanderersguide.app/development) — run the app locally.
- [Self-hosting with Docker](https://docs.wanderersguide.app/docker) — host your own instance.
- [API reference](https://docs.wanderersguide.app/api-reference/introduction) — build your own client or integration.

## Development timeline

Visualize repository activity with Gource:

![Wanderer's Guide — development timeline](gource.mp4)

Rendering: `gource -1280x720 -f -i 0.5 -t 60 -o gource.ppm && ffmpeg -y -f image2pipe -r 30 -vcodec ppm -i gource.ppm -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p -movflags +faststart gource.mp4`
