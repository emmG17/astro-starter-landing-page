# Astro Business Landing Page Template

A robust, SEO-ready starter template for business landing pages, built with Astro and Tailwind CSS. Designed for high performance and easy customization.

## Features

-   **Dynamic Product Pages**: Built with Astro Content Collections for easy content management using Markdown.
-   **SEO Optimized**: Integrated `astro-seo` for meta tags, Open Graph, and Twitter Cards.
-   **Automatic Sitemap**: Generates a sitemap on build for search engine indexing.
-   **Component Library**:
    -   Responsive Navigation Bar.
    -   **Embla Carousel**: Touch-enabled, performant product slider with progress indication.
    -   Footer with social links.
-   **Design System**:
    -   Built with **Tailwind CSS 4**.
    -   Dark/Light mode support.
    -   Custom font integration (Inter).
    -   **Icons**: Material Symbols via `astro-icon` (optimized SVGs).
-   **Code Quality**:
    -   **ESLint**: Pre-configured with Astro and TypeScript support.
    -   **Husky & Lint-Staged**: Enforces code quality with pre-commit hooks.
    -   **TypeScript**: Fully typed for better developer experience.

## Tech Stack

-   [Astro](https://astro.build/) - The web framework for content-driven websites.
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
-   [Embla Carousel](https://www.embla-carousel.com/) - Lightweight carousel library.
-   [astro-icon](https://www.astroicon.dev/) - Type-safe, optimized icon system.
-   [Astro SEO](https://github.com/jonasmerlin/astro-seo) - Easy SEO configuration.
-   [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.

## Getting Started

### Prerequisites

-   Node.js v18.17.1 or higher.
-   pnpm (recommended) or npm/yarn.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/astro-business-template.git
    cd astro-business-template
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    # This will also initialize Husky pre-commit hooks
    ```

3.  Environment Setup:
    -   Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    -   Edit `.env` to set your site URL (required for sitemap generation):
        ```env
        SITE_URL=http://localhost:4321 # For local dev
        ```

### Development

Start the development server:

```bash
pnpm run dev
```

Visit `http://localhost:4321` to see your site.

### Building for Production

Build the static site:

```bash
pnpm run build
```

The output will be in the `dist/` directory, ready to be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).

### Quality Assurance

-   **Linting**: Run `pnpm run lint` to check for code issues.
-   **Pre-commit**: Husky is configured to automatically lint and fix staged files before committing.

### Icons

We use `astro-icon` with the `material-symbols` set. To add a new icon:
1.  Search for the icon code on [Iconify](https://icon-sets.iconify.design/material-symbols/).
2.  Use the `Icon` component: `<Icon name="material-symbols:icon-name" />`.
    *   *Note: Replace underscores `_` in the icon name with hyphens `-`.*

## Project Structure

```text
/
├── public/             # Static assets (images, fonts, favicon)
├── src/
│   ├── components/     # Reusable UI components (Header, Footer, Carousel)
│   ├── content/        # Content Collections (Markdown product data)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Application routes and pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── eslint.config.mjs   # Linting configuration
```
