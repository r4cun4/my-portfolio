# Portfolio Project

This website serves as a portfolio highlighting my experience, skills, and projects. Originally developed by [Midudev](https://www.youtube.com/watch?v=HEMvsJTBweY&list=PL-vC3_q-KrjSkwDZqO0a73Hct4Q85aqx5&index=2&t=1081s). I've made a redesign css styles and I've added localization feature in english.

## i18n Astro docs
[i18n.locales](https://docs.astro.build/en/reference/configuration-reference/#i18n)
[Translate UI strings](https://docs.astro.build/en/recipes/i18n/)

## Project Structure

- `src/components`: This directory contains all the Astro components used in the project.
- `src/i18n`: This directory contains TypeScript files that export helpers functions.
- `src/pages`: This directory contains the Astro pages of the portfolio.
- `public`: This directory contains static files served by the portfolio.

## Getting Started

First, install the dependencies:

```sh
npm install
```

Then, start the development server:

```sh
npm run dev
```

## Building

To build the project for production, run:

```sh
npm run build
```

This will create a dist directory with the built assets.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.