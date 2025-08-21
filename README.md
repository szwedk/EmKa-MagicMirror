# ![MagicMirror²: The open source modular smart mirror platform.](.github/header.png)

<p style="text-align: center">
  <a href="https://choosealicense.com/licenses/mit">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
 </a>
 <img src="https://img.shields.io/github/actions/workflow/status/magicmirrororg/magicmirror/automated-tests.yaml" alt="GitHub Actions">
 <img src="https://img.shields.io/github/check-runs/magicmirrororg/magicmirror/master" alt="Build Status">
 <a href="https://github.com/MagicMirrorOrg/MagicMirror">
  <img src="https://img.shields.io/github/stars/magicmirrororg/magicmirror?style=social" alt="GitHub Stars">
 </a>
</p>

**MagicMirror²** is an open source modular smart mirror platform. With a growing list of installable modules, the **MagicMirror²** allows you to convert your hallway or bathroom mirror into your personal assistant. **MagicMirror²** is built by the creator of [the original MagicMirror](https://michaelteeuw.nl/tagged/magicmirror) with the incredible help of a [growing community of contributors](https://github.com/MagicMirrorOrg/MagicMirror/graphs/contributors).

MagicMirror² focuses on a modular plugin system and uses [Electron](https://www.electronjs.org/) as an application wrapper. So no more web server or browser installs necessary!

## Documentation

For the full documentation including **[installation instructions](https://docs.magicmirror.builders/getting-started/installation.html)**, please visit our dedicated documentation website: [https://docs.magicmirror.builders](https://docs.magicmirror.builders).

## Links

- Website: [https://magicmirror.builders](https://magicmirror.builders)
- Documentation: [https://docs.magicmirror.builders](https://docs.magicmirror.builders)
- Forum: [https://forum.magicmirror.builders](https://forum.magicmirror.builders)
  - Technical discussions: <https://forum.magicmirror.builders/category/11/core-system>
- Discord: [https://discord.gg/J5BAtvx](https://discord.gg/J5BAtvx)
- Blog: [https://michaelteeuw.nl/tagged/magicmirror](https://michaelteeuw.nl/tagged/magicmirror)
- Donations: [https://magicmirror.builders/#donate](https://magicmirror.builders/#donate)

## Contributing Guidelines

Contributions of all kinds are welcome, not only in the form of code but also with regards to

- bug reports
- documentation
- translations

For the full contribution guidelines, check out: [https://docs.magicmirror.builders/about/contributing.html](https://docs.magicmirror.builders/about/contributing.html)

## Enjoying MagicMirror? Consider a donation!

MagicMirror² is Open Source and free. That doesn't mean we don't need any money.

Please consider a donation to help us cover the ongoing costs like webservers and email services.
If we receive enough donations we might even be able to free up some working hours and spend some extra time improving the MagicMirror² core.

To donate, please follow [this](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G5D8E9MR5DTD2&source=url) link.

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
