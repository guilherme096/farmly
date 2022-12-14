# Farmly
# Content
- [Farmly](#farmly)
- [Content](#content)
- [Links](#links)
- [Stack](#stack)
- [Getting Started](#getting-started)
  - [To run the project locally](#to-run-the-project-locally)
- [How this shit works](#how-this-shit-works)
  - [TypeScript](#typescript)
  - [Directories and Files](#directories-and-files)
  - [Astro](#astro)
    - [Astro components](#astro-components)
    - [Astro layouts](#astro-layouts)
      - [Example](#example)
    - [Astro pages](#astro-pages)
  - [NPM](#npm)
  - [Tailwindcss/DaisyUI](#tailwindcssdaisyui)
    - [Tailwindcss](#tailwindcss)
      - [CSS vs tailwind example:](#css-vs-tailwind-example)
    - [DaisyUI](#daisyui)



# Links

- [Website](https://farmly-two.vercel.app/)
- [Jira](https://farm-link.atlassian.net/jira/software/projects/FL/boards/1/backlog)
- [Design Figma](https://www.figma.com/file/ihMIFTPRuK0htLsZvlTsc2/farmly?node-id=0%3A1&t=Aj43Y8PbqW05MMhS-1)

# Stack

- [Astro Docs](https://docs.astro.build/en/getting-started/) - Link to the documentation
- [Tailwind Docs](https://tailwindcss.com/docs) - Link to the documentation
- [DaisyUI Docs](https://daisyui.com/docs) - Link to the documentation

# Getting Started
## To run the project locally

To install the packages
`````
npm install
`````
To run the app in the local environment
`````
npm run dev
`````
<br>
To stop the app press ctrl + c
<br>


# How this shit works
## TypeScript
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is like javascript but you can define types that prevent type errors. ***In this project it will be on relaxed mode, so it will be like javascript files, but if you see typescript you know what is is***.
## Directories and Files

  -  src/* - Your project source code (components, pages, styles, etc.)
  -  public/* - Your non-code, unprocessed assets (fonts, icons, etc.)

This is the project structure
````
├── src/
│   ├── components/ - Here is where you will find all the components
│   │   └- navbars/ - Navbar components
│   ├── layouts/    - Here is where you will find all the layouts
│   │   
│   └── pages/      - Here is where you will find all the pages
│   │   │  
│   │   └── index.astro - Home page
│   └── styles/
│       └-─ global.css  - Global styles
├── public/ - Here are all the static files, for example: images, icons, etc.
│   ├── robots.txt
│   ├── favicon.svg
│   └-─ social-image.png
|    --- Bellowv this line are the config files
├── astro.config.mjs 
├── package.json
├── tailwind.config.js
└── tsconfig.json
````
## Astro
### Astro components

Astro components are the basic building blocks of any Astro project.

**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was designed to feel familiar to anyone with experience writing HTML.
- [Read about astro components](https://docs.astro.build/en/core-concepts/astro-components/#overview) (do it)

### Astro layouts
Layouts are Astro components used to provide a reusable UI structure, such as a page template.

We conventionally use the term “layout” for Astro components that provide common UI elements shared across pages such as headers, navigation bars, and footers.

#### Example
src/layouts/MySiteLayout.astro
`````
---
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
const { title } = Astro.props
---
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <BaseHead title={title}/>
  </head>
  <body>
    <nav>
      <a href="#">Home</a>
      <a href="#">Posts</a>
      <a href="#">Contact</a>
    </nav>
    <h1>{title}</h1>
    <article>
      <slot /> <!-- your content is injected here -->
    </article>
    <Footer />
  </body>
</html>
`````
src/pages/index.astro
`````
---
import MySiteLayout from '../layouts/MySiteLayout.astro';
---
<MySiteLayout title="Home Page">
  <p>My page content, wrapped in a layout!</p>
</MySiteLayout>
`````
So basically, you can create a layout and then use it in any page you want, so you don't have to repeat the same code over and over again, you just have to import the layout and use it. You can put the content inside the layout, and it will be injected in the slot.

### Astro pages
Pages are files that live in the src/pages/ subdirectory of your Astro project. Each page is a standalone Astro component that is rendered to a static HTML file.

## NPM
npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. 
Node is used by astro to run the project, and the packages are installed with npm. It works like libman in .net, but it's a lot better. Instead of putting links for things like bootstrap, you just have to install it with npm, and then you can import it in your project. It's a lot easier and faster.

## Tailwindcss/DaisyUI
### Tailwindcss
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
Basically for every css property in css, you have a class in tailwind. So instead of writing a lot of css, you just add classes to the element.
- [Here are the docs](https://tailwindcss.com/docs)
#### CSS vs tailwind example:
With css styling:
`````
<style>
  .button {
    background-color: blue;
    color: white;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .button:hover {
    background-color: darkblue;
  }
</style>

<button class="button">Button</button>
`````
With tailwind styling:
`````
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
`````
### DaisyUI
DaisyUI is a Tailwind CSS plugin that provides a set of ready-to-use, fully customizable, accessible, and responsive UI components and utilities. It's like bootsrap, but better because it's built with tailwind, so you can customize it with tailwind calsses.
You have lots of components, like buttons, inputs, cards, etc.
- [Here are the docs](https://daisyui.com/components/hero/)
