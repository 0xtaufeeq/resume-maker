<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>RESUME-MAKER</h1>
<h3>◦ Craft Your Success Story with Resume-Maker!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat-square&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Swiper-6332F6.svg?style=flat-square&logo=Swiper&logoColor=white" alt="Swiper" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/TaufeeqRiyaz/resume-maker?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/TaufeeqRiyaz/resume-maker?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/TaufeeqRiyaz/resume-maker?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/TaufeeqRiyaz/resume-maker?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running resume-maker](#-running-resume-maker)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The Resume-Maker is a web-based application that simplifies and enhances the resume creation process. Users can choose from a variety of pre-designed templates, customize content and style, and export the finished product as a PDF. The application is built with TypeScript and React, featuring diverse components, such as lazy loading for improved performance, themed styling, and sophisticated user interactions. It's an efficient tool for anyone in need of crafting professional and visually compelling resumes in a quick and stress-free manner.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | A monolithic structure built on React with TypeScript. Components, Context, Layouts are neatly structured. It leverages Vite for development and build speed. |
| 📄 | **Documentation**  | Documentation is lacking as there are no README.md nor comments in the code. This could hamper onboarding for new team members.|
| 🔗 | **Dependencies**   | Project leverages external libraries including GSAP for animations, react-icons for visuals, react-router-dom for routing, react-to-pdf for output conversion.|
| 🧩 | **Modularity**     | The app has a modular design. Components, Layouts, Pages and Contexts are separated into different directories. Functionalities are divided accordingly.|
| 🧪 | **Testing**        | There's no indication of testing in the repository. Adding unit tests and integration tests can improve the codebase's robustness. |
| ⚡️  | **Performance**    | Due to lazy loading components and optimal event handling with React, the application likely performs well for a small to medium user base. |
| 🔐 | **Security**       | No explicit security measures are visible. Personal data validation and sanitization should be ensured. XSS protection measures aren't apparent. |
| 🔀 | **Version Control**| Git is used for version control, however, proper usage and strategy cannot be confirmed as only a single commit is visible in the repository. |
| 🔌 | **Integrations**   | The app doesn't seem to integrate with any external services, keeping it fairly standalone with the exception of the PDF exporting functionality. |
| 📶 | **Scalability**    | The app appears capable of handling increased load due to its modular structure. Yet, optimizing states and data flow management could improve this. |


---


## 📂 Repository Structure

```sh
└── resume-maker/
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── _redirects
    │   └── images/
    │       ├── avatar/
    ├── src/
    │   ├── App.tsx
    │   ├── Components/
    │   │   ├── Preloader/
    │   │   └── Resume/
    │   ├── Context/
    │   │   └── theme.ts
    │   ├── Layouts/
    │   │   └── Panel/
    │   ├── Pages/
    │   │   ├── Create/
    │   │   ├── Home/
    │   │   ├── PageNotFound.tsx
    │   │   └── Templates/
    │   ├── Styles/
    │   │   ├── partials/
    │   │   └── style.scss
    │   ├── Utils/
    │   │   └── random.ts
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── yarn.lock

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [tsconfig.node.json](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/tsconfig.node.json) | The given code represents a project structure for a resume-maker web application built with TypeScript. It includes an index.html entry point, package files, public assets, and various source files. The source files are organized into Components, Context, Layouts, Pages, Styles, and Utils. The tsconfig.node.json file contains TypeScript compiler settings for the application, specifying the module system, resolution strategy, and the inclusion of vite.config.ts for transpilation.                                                                |
| [index.html](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/index.html)                 | The code represents a directory tree for a React-based web application built with TypeScript, which allows users to create resumes using different templates and export them to PDF. It contains an entry point file (`main.tsx`) that renders the whole application in root div inside the `index.html`. It encompasses several components, including Preloader, Resume and pages like Home and Create. The app utilizes styles from style.scss and uses a random utility function for certain operations. It also includes a theme context for state management. |
| [yarn.lock](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/yarn.lock)                   | The given directory tree encapsulates a Resume Maker project using TypeScript, comprised of front end components (such as Preloader and Resume under Components, different pages including Create and Home), together with utility functions, style files and theme context. The configuration and dependency management files such as `package.json`, `vite.config.ts`, and `yarn.lock` are also present, supporting project setup and execution environment.                                                                                                     |
| [package-lock.json](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/package-lock.json)   | The given code represents a resume-maker application's directory structure and package-lock file. The app is built using React and various libraries such as GSAP (for animations), swiper (for carousel effects), and react-to-pdf (for converting resumes to PDF). The src folder contains TypeScript and React components for the application structure, while the package-lock.json controls the versions of each dependency ensuring a consistent environment. The public folder houses static files including avatar images.                                 |
| [vite.config.ts](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/vite.config.ts)         | The code provided reflects the directory structure of a React resume-maker application built with TypeScript. It encompasses functionalities for creating and styling resumes, predefined templates, and related components. Moreover, it uses a custom server configuration through Vite's defineConfig function to configure React plugins and set the server port to 2007.                                                                                                                                                                                      |
| [tsconfig.json](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/tsconfig.json)           | The provided code indicates a directory structure of a Resume Maker application using TypeScript. The `tsconfig.json` file includes compiler options for the TypeScript compiler, setting ES6 as the target, defining libraries, and ensuring other rules like module resolution, synthetic default imports and JSX transformation. The application contains Pages, Components, and Utilities, along with a theme context and style definitions. The src folder is included and it references `tsconfig.node.json`.                                                |
| [package.json](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/package.json)             | The code illustrates a Resume Maker application directory structure. Built with React and TypeScript, the app allows users to create resumes using different templates and export them to PDF. The package.json file shows dependencies used such as GSAP for animations, react-icons for visuals, react-router-dom for routing, and react-to-pdf for convertion to PDF. Development scripts and both runtime dependencies and development dependencies also are specified here.                                                                                   |

</details>

<details closed><summary>Public</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [_redirects](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/public/_redirects) | The code belongs to a web-based Resume Maker single-page application. It provides the ability to create resumes, has a file structure divided into components, context, layouts, pages, styles, and utilities. The code also includes TypeScript configurations and Vite setup. The redirects file suggests all server-side requests should be redirected to the index.html page, adhering to the characteristics of a single-page application. |

</details>

<details closed><summary>Src</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [vite-env.d.ts](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/vite-env.d.ts) | The code is part of a project structure for a Resume Maker application. It consists of index.html, package.json for package management, source files in TypeScript (src/) that includes application components, contexts, layouts, pages, styles, utilities, and vite-env.d.ts for Vite environment typing. The project also utilizes Vite for faster development and better build performance. The public/ directory stores public files like redirects and images.                        |
| [App.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/App.tsx)             | The provided code outlines the structure for a Resume-Maker app built in React. It uses React Router for navigation between various pages such as Home, Templates, Create, and a fallback PageNotFound. It uses lazy loading to optimize performance by splitting the code at different routes, and displays a preloaded screen while waiting for a component to load. Paths include root (/), templates (/templates), and a dynamic route for resume creation (/create/:name).             |
| [main.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/main.tsx)           | This code represents a React application structure, specifically for a resume-maker project. The main.tsx file serves as an entry point, rendering the main App component in strict mode. The project includes various components, page templates, and utility functions. It uses TypeScript for typing and Vite for build configuration. Theme related context and styling, including SCSS, are also included for the application UI. Public directory contains public assets like images. |

</details>

<details closed><summary>Pages</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [PageNotFound.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/PageNotFound.tsx) | The given code presents a directory tree for a project named resume-maker. It's a web application built using TypeScript, likely using a library like React. Notable functionalities include creating resumes, customization with different themes and templates, and error handling like presenting a 404 Page not Found screen for invalid URLs. Package files, public files (including images), styles, and utility functions are also present. |

</details>

<details closed><summary>Home</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [home.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Home/home.scss) | The code provided is for a home page style sheet of a Resume Maker application. It structures and styles elements such as the page header, hero section, spinner, wheel card, and footer. It also includes styles for headings, subheadings, call-to-action buttons, and a unique wheel section where each card is clickable. The footer includes an encoded SVG arrow image. Styling promotes a user-friendly design with a mobile-responsive approach. |
| [Home.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Home/Home.tsx)   | The given code represents the Home page of a web app named BlinkCv, a Resume Maker built with React and TypeScript. This page contains introductory text, a link to source code on GitHub, a button leading to the templates page, and a rotating wheel displaying various avatar images using GSAP animations. The page also dynamically changes the body background color based on the location path. The animation readjusts on window resize.        |

</details>

<details closed><summary>Create</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [create.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Create/create.scss) | The provided code establishes the layout and styling for a Create page within a Resume Maker app. It separates the page into two main areas using CSS Grid: the options panel and the resume panel. In the options panel, styling rules are defined for the logo, a list of options, buttons, and an export feature. The resume panel style rules provide user-interaction feedback on elements with the data-editable attribute, including border color change, background color modification, and a hover effect. |
| [Create.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Create/Create.tsx)   | The code is part of a Resume Maker application. It presents a `Create` component that takes the `name` of a resume template from the URL parameters and tries to load the corresponding template. It also leverages react-router for parameter extraction, and local state for template preview toggling. If the template is not found, the PageNotFound component gets displayed. This component also uses Panel UI component for user interactions.                                                               |

</details>

<details closed><summary>Templates</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Templates.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Templates/Templates.tsx)   | The Templates.tsx file within the resume-maker directory is a React component used to display different resume templates. It uses React Router's Link component to create routes, directing users to the corresponding pages for each template. It includes a section with multiple links harboring images, each representing a different resume template. Upon selection, the user is redirected to the create page of the respective template.                                          |
| [templates.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Pages/Templates/templates.scss) | The code defines the style for a resume-maker application that allows users to create resumes. It has templates, a home page, and a page for creating resumes, with redirects, avatar images, layout panels, and preloader components. Styling is defined in SCSS format for different parts. A random utility function, Vite and TypeScript environments, and a theme context are also provided. The specific CSS targets the layout of resume templates and the style of a more button. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                            |
| [random.ts](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Utils/random.ts) | The given code is part of a larger project structure known as resume-maker, used to create resumes. The specific random.ts file within the Utils directory exports a function that generates a random integer number between 0 and a given upper limit, making use of the Math.random() method and Math.floor() for rounding down to the nearest whole number. |

</details>

<details closed><summary>Context</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [theme.ts](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Context/theme.ts) | This directory structure represents a Resume Maker web application built using React and TypeScript. It includes context for theme management which allows switching between light and dark modes. Dedicated components, layouts, and pages are outlined, including home, creation, and template. Utility functions and stylesheets are also integrated. Moreover, package management files, configuration files for TypeScript and Vite, as well as public resources like images are present. |

</details>

<details closed><summary>Styles</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [style.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Styles/style.scss) | This codebase is for a resume-maker web application built with TypeScript and React. It features components like a Preloader, Resume and app-wide theme settings. Users access the application through views like Home or Create new resumes, utilizing predefined templates. The style.scss file forwards styling rules specified in root.scss, reset.scss, and base.scss, ensuring uniform design throughout the app. Hosting and redirect settings are found in the public directory. |

</details>

<details closed><summary>Partials</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [reset.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Styles/partials/reset.scss) | The code provides a structural overview of a Resume Maker project and a CSS reset stylesheet. The project uses TypeScript, includes components for preloading and resume creation, theme context, panel layout, pages for Homepage, Create, Templates, and error handling. Styles provided reset all HTML elements' margins, paddings, and apply standardized styling for body and link elements, ensuring consistent appearance across different browsers.                                                  |
| [root.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Styles/partials/root.scss)   | The provided code shows the architecture of a resume-maker project created with TypeScript. It includes various directories and files for different purposes: Components for reusable parts like preloader and resume, Pages for different views such as home, create, templates, Context for setting theme, Styles for styling the app, and Utils for utility functions. The SCSS file defines root CSS variables for colors, fonts, font sizes, and icon size that can be used throughout the application. |
| [base.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Styles/partials/base.scss)   | The provided code is a part of a broader resume-maker web application project. It highlights a directory structure, which includes various sections like Components, Context, Layouts, Pages and Styles. The code itself is a SCSS stylesheet defining multiple CSS classes. These classes mainly determine color and layout styles for key website elements, with a focus on primary colors, block elements, font sizes and a specific page-not-found page.                                                 |

</details>

<details closed><summary>Resume</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [index.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/index.tsx)     | The code snippet provided generates multiple templates for a resume-making application. The descriptive directory structure includes the necessary components, layouts, static elements, styles, utility resources, and pages for the application. The exported components from the Resume folder represent different designs for resumes including Blank, Minimal, Niko, NikoDark, Orea, Scape, and Scoop.                                                                                                                                                                 |
| [Resume.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Resume.tsx)   | The code includes a resume builder application. Main files are organized into components, contexts, layouts, pages, styles, and utilities. A Resume component is provided, rendering child components within a resume-buillder-template section. An Avatar function selects an image based on input type and index. A Clone function duplicates UI sections, controlling their editability and enabling addition or removal through clickable icons. It uses React Hooks to manage state and side-effects.                                                                  |
| [resume.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/resume.scss) | The resume-maker project uses a React-based structure. It provides features to create resumes, with files organised into Components, Context, Layouts, Pages, Styles, and Utilities. The SCSS code drives the styling for the Resume component, setting size, padding, and background color for the resume-builder-template section. Cloned class addresses imported items, disabling interactions, and user selection. The cloned-parent class gives style properties for child components, including a hover effect, making this useful for creating interactive resumes. |

</details>

<details closed><summary>Blank</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [blank.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Blank/blank.tsx) | The provided code and directory tree form a resume maker application. Its main capabilities include a homepage, resume templates, and a creation page. The specific code displays a blank resume component, a subcomponent of the main Resume component, where editable content can be inserted by the user if edit is set to true. This application also includes a theme context, styling, utilities, and components like a preloader and panel layout. |

</details>

<details closed><summary>Niko-dark</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [niko-dark.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Niko-Dark/niko-dark.tsx) | The code is for a Resume builder application, developed in React and TypeScript. It allows users to create a custom resume by inputting personal information, work skills, experience, education and interests, which can be changed via editable content on the client side. It also includes functionality to export the resume to a PDF format. The particular component provided in the code is the Niko2 resume template. |

</details>

<details closed><summary>Minimal</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [minimal.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Minimal/minimal.scss) | The code shared is a styling (SCSS) script for the Minimal resume component in a resume-making application. Key features styled include the header, which classifies basic info, name, role, and address. There's also the Education, Experience, and About sections. The main styles include font-sizes, spacings, and arrangements of items (using Flexbox and CSS Grid). Different selectors apply diverse styles to variably nested components, aiding design consistency and visual structure.                       |
| [minimal.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Minimal/minimal.tsx)   | The given code exports a Minimal resume template in React. It renders personal information along with sections for an about description, technical and other skills, education details, interests, and work experience. The content of these fields can be made editable in the frontend based on the edit boolean prop. Each important section has a data-editable attribute that pertains to the edit prop. The Clone component allows replication of grouped data like multiple education entries or work experiences. |

</details>

<details closed><summary>Scoop</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [scoop.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Scoop/scoop.tsx)   | The code describes a React component named Scoop under the Resume component. This component represents a specific format of an editable resume. The edit prop determines whether the resume fields are editable or not. It includes sections for basic information, work experience, education, skills, and projects. It also utilizes a Clone sub-component to duplicate fields efficiently. The resume details, like name, role, contact information, experiences, etc., are inputted here. The styling is defined in scoop.scss. |
| [scoop.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Scoop/scoop.scss) | The code represents the architecture of a resume-maker application. It includes HTML files, package manager files, source code in TypeScript and SCSS, and configuration files. Notably, the source code is divided into modules for app components, layouts, pages, utilities, styles, and context. The provided SCSS regulates styling for the Scoop resume component, including formatting for elements such as text alignment, font properties, layout configurations, and component-specific styles.                           |

</details>

<details closed><summary>Scape</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [scape.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Scape/scape.tsx)   | The given code creates an interactive online resume/cv using React. It allows changing of resume content and modifying the avatar between male or female by clicking on corresponding icon. Some components are cloneable for adding multiple entries. The resume includes sections like skills, expertise, education, work experience, and contact info with ability to switch between editable and non-editable states. The core function is an interface to present and modify a professional's background and contact information. |
| [scape.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Scape/scape.scss) | The provided code includes a directory structure for a Resume Maker application and a SCSS style file. The directory structure highlights the various components, pages, and utilities used, written in TypeScript and React. The SCSS file, located within the Resume component, is used to style different parts of the resume page including the lines, avatar, title, skills, contact info, education, and experience sections, as well as user introductions and various clickable icons.                                         |

</details>

<details closed><summary>Orea</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [orea.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Orea/orea.tsx)   | The code is for a component named Orea in a resume builder application. The Orea component is a resume template that allows users to edit various sections like introduction, contact information, education, experience, and skills. It uses the edit prop to make fields editable and useRef and useEffect to interact with these fields. It also includes the React-icons library for icons and a Clone component to duplicate sections.                                        |
| [orea.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Orea/orea.scss) | The SCSS code under src/Components/Resume/Orea/orea.scss defines styles for various sections of a resume. It styles components such as the header, section-rule, introduction-section, education-section, and skills. The styling includes font sizes, margining, display properties, text transformation, grid configurations, padding, and border attributes. Artistic properties (like flexbox and grid layout) are used to ensure an organized layout for the resume sections. |

</details>

<details closed><summary>Niko</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [niko.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Niko/niko.scss) | The code consists of a structure for a resume creation application with a directory tree containing HTML files, TypeScript files, stylesheets, and configuration files. The specific.scss stylesheet provided stipulates style rules for a specific resume template (Niko) focusing on typography, layout grids, and flex displays to present various sections of the resume like contacts, about, work skills, and body. The look for each segment is distinctly defined.          |
| [niko.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Resume/Niko/niko.tsx)   | The code defines the structure and content for Niko Resume Component in a Resume Maker application. The component includes editable fields for user's contact info, about section, work skills, experiences, education, interests, and additional projects. It also sets a background style for the mentioned resume template. The mentioned content fields become editable as per the edit state, allowing users to modify their info simply by typing into the appropriate place. |

</details>

<details closed><summary>Preloader</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Preloader.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Preloader/Preloader.tsx)   | This code is part of a larger Resume Maker application built using JavaScript and TypeScript. It contains a Preloader component that displays a loading screen. The Preloader uses a custom SASS style sheet and returns a div with a loading indicator when rendered.                                                                                                                                                                                                                                           |
| [preloader.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Components/Preloader/preloader.scss) | This directory tree describes the structure of a resume-maker project. Core functionalities include creating, editing, and displaying resumes. These tasks are facilitated by several components, pages, styles, and utilities, all mentioned in the source directory. The provided snippet of code describes a style sheet for a preloader component, essential for displaying a loading interface with specified dimensions, positioning, and font-weight while data or content is being fetched or processed. |

</details>

<details closed><summary>Panel</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [panel.scss](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Layouts/Panel/panel.scss) | The resume-maker code structure contains files for a web application built in React with TypeScript. It contains several components, pages for specific features, and utility and styling files. The panel.scss is a stylesheet, defining styles such as logo font, layout of option panels, button aesthetics, and the export feature. Specific styles include opacity changes on hover, changing button backgrounds, and manipulating element positioning, size, and color. |
| [index.tsx](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/src/Layouts/Panel/index.tsx)   | The code represents a control panel for a Resume Builder application. It provides features like undo, redo, text formatting, and document alignment. It also includes a tool to change the default color of elements and allows the user to switch between Edit and Preview modes. Moreover, it offers options to save the output in both PDF and image formats. The panel also contains navigation links to home and templates pages.                                        |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the resume-maker repository:
```sh
git clone https://github.com/TaufeeqRiyaz/resume-maker
```

2. Change to the project directory:
```sh
cd resume-maker
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running resume-maker

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/TaufeeqRiyaz/resume-maker/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/TaufeeqRiyaz/resume-maker/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/TaufeeqRiyaz/resume-maker/issues)**: Submit bugs found or log feature requests for TAUFEEQRIYAZ.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

