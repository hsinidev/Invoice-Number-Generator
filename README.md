# Invoice Number Generator

**Instantly generate unique, sequential, and professional invoice numbers. A free, client-side tool built with React and Tailwind CSS for modern businesses.**

[![React Version](https://img.shields.io/badge/React-19.2.0-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

A modern web application for generating invoice numbers with various formatting options. This tool prioritizes user privacy and speed by performing all operations directly in the browser using JavaScript. No data ever leaves your computer.

<br />

<div align="center">
  <a href="https://doodax.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-doodax.com-ff006e?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" height="50" />
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

## License

This project is open-source and available under the MIT License.
