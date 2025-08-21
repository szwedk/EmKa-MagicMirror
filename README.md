# ![MagicMirror²: The open source modular smart mirror platform.](.github/header.png)

<p style="text-align: center">
  <a href="https://forum.magicmirror.builders/topic/728/magicmirror-is-voted-number-1-in-the-magpi-top-50"><img src="https://magicmirror.builders/img/magpi-best-watermark-custom.png" width="150" alt="MagPi Top 50"></a>
</p>

# 🪞 EmKa MagicMirror

**EmKa MagicMirror** is my personalized smart mirror dashboard project built on top of the open-source [MagicMirror²](https://magicmirror.builders) platform. This mirror is designed for both utility and aesthetics—displaying real-time weather, calendar events, reminders, fitness data, and more in a sleek interface.

---

## 🛠️ Features

- Modular system with customizable plugins
- Real-time weather and forecast display
- Google Calendar and personal scheduling
- Fitness tracking (Strava, Garmin integration coming soon)
- Voice command integration (in development)
- News headlines and inspirational quotes
- Minimal UI tailored for home/office setup

---

## 🚀 Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/szwedk/EmKa-MagicMirror.git
   ```
2. Navigate into the directory:
   ```bash
   cd EmKa-MagicMirror
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create your `.env` file and populate it with API keys (see `.env.example`).
5. Start the dashboard:
   ```bash
   npm start
   ```

---

## 📁 Directory Structure

```
MagicMirror/
├── modules/          # Custom and third-party modules
├── tools/            # API integrations and helper scripts (ignored from Git)
├── config/           # Main config file and env example
├── docs/             # Documentation and changelogs
└── .env              # API tokens (not tracked in Git)
```

---

## 🙋‍♂️ About Me

This project is maintained by **Kamil Szwed**, Head of Technology at Robostore and robotics/AI enthusiast. I built this smart mirror to streamline my daily routine, connect my ecosystem, and serve as a personal productivity and data visualization tool.

---

_This repo is a personal fork of the official MagicMirror² project._
