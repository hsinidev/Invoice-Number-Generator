<div align="center">
# 🚀 Invoice Number Generator
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

</div>

---
## 🌟 Executive Overview

**Invoice Number Generator** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

# Invoice Number Generator

**Instantly generate unique, sequential, and professional invoice numbers. A free, client-side tool built with React and Tailwind CSS for modern businesses.**


---

A modern web application for generating invoice numbers with various formatting options. This tool prioritizes user privacy and speed by performing all operations directly in the browser using JavaScript. No data ever leaves your computer.

<br />

<div align="center">
  <a href="https://doodax.com/tools/invoice-number-generator/index.html" target="_blank" rel="noopener noreferrer">
  </a>
</div>

<br />

## Key Features

-   **Multiple Generation Modes**: Choose between **Sequential**, **Date-Based**, and **Random** numbering systems.
-   **Custom Prefix**: Add any prefix (e.g., `INV-`, `2024-`) to your numbers.
-   **Persistent Sequence**: Your current number is saved in the browser's Local Storage, so you can close the tab and continue your sequence later.
-   **Easy Reset**: A dedicated button to reset the sequential counter back to 1.
-   **One-Click Copy**: Instantly copy the generated number to your clipboard.
-   **Modern & Responsive UI**: Clean, professional interface built with React and Tailwind CSS, featuring a beautiful animated cosmic theme.
-   **Fully Private**: All logic is client-side. No databases, no tracking, no sign-up required.
-   **SEO Optimized**: Includes a comprehensive article on invoice numbering best practices, complete with JSON-LD schema.

## Project Structure

```bash
invoice-generator/
├── public/
│   ├── favicon.svg      # Site Favicon
│   ├── index.html       # Entry HTML with SEO Meta
│   ├── robots.txt       # Crawler directives
│   └── sitemap.xml      # SEO Sitemap
├── components/
│   ├── InvoiceGeneratorTool.tsx  # Core logic UI
│   └── ThemeLayout.tsx           # Layout, Modal & Backgrounds
├── utils/
│   ├── numberGenerator.ts        # Pure TS logic for numbers
│   └── SeoArticle.tsx            # Content & JSON-LD
├── App.tsx              # Main Application Component
├── index.tsx            # Entry point
├── metadata.json        # Project metadata
└── README.md            # Documentation
```

## How It Works

The core logic is handled by pure TypeScript functions in `utils/numberGenerator.ts`, decoupled from the React UI.

-   **`generateSequential()`**: Increments a counter stored in Local Storage.
-   **`generateDateBased()`**: Creates a number using the format `YYMMDD-XXX`, where `XXX` is a counter that resets daily.
-   **`generateRandom()`**: Produces a cryptographically-stronger random alphanumeric string for non-sequential needs.

This separation ensures the business logic is portable, testable, and independent of the user interface.

## Technology Stack

-   **Framework**: React 19+ (Functional Components & Hooks)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
-   **Persistence**: Browser Local Storage API

## Installation & Usage

To run this project locally, you'll need Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/invoice-generator.git
    cd invoice-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/Invoice-Number-Generator.git
cd Invoice-Number-Generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
