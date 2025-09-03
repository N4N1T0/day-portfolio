# Dayana's Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0.1-yellow.svg)

A high-performance, SEO-enhanced portfolio website for a Marketing and Linguistic Engineering professional, built with modern web technologies.

## Table of Contents

- [About](#about)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Dayana's Portfolio is a modern, high-performance portfolio website designed for marketing and linguistic engineering professionals. Built with Astro and enhanced with multiple integrations, this project showcases best practices in web development, SEO optimization, and accessibility standards.

## Technology Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Interactivity**: [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework
- **Content Management**: [Keystatic](https://keystatic.com/) - Git-based CMS
- **Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Features

- **🚀 High Performance**: Built with Astro for lightning-fast loading times and optimal Core Web Vitals
- **🔍 SEO Optimized**: Comprehensive SEO implementation with structured data, meta tags, and sitemap generation
- **♿ Accessibility First**: WCAG compliant with proper semantic HTML and keyboard navigation
- **📱 Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **🌙 Dark/Light Theme**: Seamless theme switching with user preference persistence
- **📧 Newsletter Integration**: Alpine.js-powered subscription system with instant feedback
- **🌍 Internationalization**: Multi-language support (Spanish/English) with expansion capabilities
- **📝 Content Management**: Keystatic CMS for easy content updates without technical knowledge
- **🔧 Developer Experience**: TypeScript, ESLint, Prettier, and Husky for code quality
- **📊 Analytics Ready**: Built-in page insights and performance monitoring

## Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/n4n1t0/day-portfolio.git
   cd day-portfolio
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Environment setup:**

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   Add your database URL:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/day_portfolio"
   ```

4. **Database setup:**

   ```bash
   pnpm prisma db push
   ```

5. **Start development server:**

   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:4321`

### Build for Production

```bash
pnpm build
pnpm preview
```

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm astro` - Run Astro CLI commands
- `pnpm prisma` - Run Prisma CLI commands

### Content Management

This project uses Keystatic for content management. Access the admin interface at:

```
http://localhost:4321/keystatic
```

### Code Quality

The project includes:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **TypeScript** - Type safety

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to your branch:**

   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Project Maintainer**

Adrian Alvarez (@n4n1t0)

- Email: [adrian.alvarezalonso1991@gmail.com](mailto:adrian.alvarezalonso1991@gmail.com)
- GitHub: [@n4n1t0](https://github.com/n4n1t0)

**Portfolio Owner**

Dayana Abuin Rios - Marketing & Linguistic Engineering Professional

---

<div align="center">
  <p>Made with ❤️ by Adrian "Nano" Alvarez</p>
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>☕ <a href="https://buymeacoffee.com/n4n1t0">Buy me a coffee</a></p>
</div>
