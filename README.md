# Chen Tat Siang — Portfolio Website

[Live site](https://cts0424.github.io/) · [繁體中文首頁](https://cts0424.github.io/index-zh.html)

A bilingual personal portfolio showcasing my background, projects, and research work. Built with plain HTML, CSS, and JavaScript and designed to be hosted on GitHub Pages.

## Features

- English homepage by default, with a Traditional Chinese version.
- Language switcher on the homepage and project pages.
- Two project pages, each available in English and Traditional Chinese.
- Static files with no build step or application dependencies.

## Project structure

```text
.
├── index.html          # English homepage
├── index-zh.html       # Traditional Chinese homepage
├── assets/             # Styles, scripts, and site assets
├── projects/           # Bilingual project pages
├── .nojekyll           # Publish static files without Jekyll processing
├── LICENSE             # MIT license
└── README.md
```

## Run locally

Clone the repository, then serve its root directory with a local static server:

```bash
git clone https://github.com/cts0424/cts0424.github.io.git
cd cts0424.github.io
python -m http.server 8000
```

Open <http://localhost:8000/> for the English homepage or <http://localhost:8000/index-zh.html> for the Chinese homepage. Python 3 is needed only for the example local server; the website itself has no build step.

## Deploy to GitHub Pages

1. Place `index.html`, `index-zh.html`, `assets/`, `projects/`, `.nojekyll`, `README.md`, and `LICENSE` in the root of the [`cts0424.github.io`](https://github.com/cts0424/cts0424.github.io) repository on the `main` branch. Keep the directory structure; upload the extracted files, not a ZIP archive.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select `main` and `/(root)`, then save.
3. After deployment, visit <https://cts0424.github.io/> and check the language switcher, project links, styles, and images.

Changes committed to the publishing branch will trigger a new deployment. See the [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for current settings.

## Contributing

Suggestions and bug reports are welcome through [GitHub Issues](https://github.com/cts0424/cts0424.github.io/issues). For a proposed code or content change, open an issue to discuss it, then submit a pull request describing the change. Please keep the English and Traditional Chinese pages consistent when editing shared content.

## License

This project is licensed under the [MIT License](LICENSE). The license covers material in this repository that I own; any third-party assets retain their respective licenses.

---

這是陳達翔的雙語個人作品集。英文首頁為預設頁面，並提供繁體中文首頁與專案頁；網站使用純 HTML、CSS、JavaScript 製作。歡迎透過 Issues 提供建議，使用與改作條件請參閱 [MIT 授權條款](LICENSE)。
