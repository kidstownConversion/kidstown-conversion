# KidsTown Conversion

Modernization of the legacy KidsTown website from a CGI/Perl-based application into a client-side Single Page Application (SPA).

## Live Website

The completed application is deployed using GitHub Pages:

https://kidstownconversion.github.io/kidstown-conversion/

## Project Status

Status: Complete

The KidsTown modernization project has been completed. The original CGI/Perl application was converted into a client-side SPA using HTML, CSS, and JavaScript.

The new application preserves the original KEY-based navigation structure while replacing server-side Perl page generation with client-side JavaScript routing and rendering.

## Project Overview

The original KidsTown website relied on CGI scripts, Perl programs, KEY-based routing, data files, and graphical assets to dynamically generate HTML pages on the server.

The goal of this project was to modernize the application while preserving its original content, activities, and navigation structure.

The conversion focused on:

- Replacing Perl functionality with JavaScript
- Converting the website into a Single Page Application
- Preserving legacy KEY-based navigation
- Organizing existing data and graphical assets
- Creating a maintainable project structure
- Deploying the finished application through GitHub Pages

## Architecture

### Original Architecture

The legacy KidsTown application used a server-side request flow:

```text
Browser
   |
   v
kt.cgi
   |
   v
KEY Lookup
   |
   v
Perl Script
   |
   v
Data / Assets
   |
   v
Generated HTML
```

Each KEY identified a KidsTown activity and directed the application to the appropriate Perl functionality.

### Modernized Architecture

The converted application performs routing and rendering directly in the browser:

```text
Browser
   |
   v
index.html
   |
   v
JavaScript Router
   |
   v
KEY / Route Registry
   |
   v
Converted JavaScript Module
   |
   v
Dynamic Content
   |
   v
#app
```

Instead of requesting a new server-generated page for each activity, JavaScript determines which activity should be displayed and dynamically renders it inside the SPA.

## Repository Structure

```text
kidstown-conversion/
|
|-- .github/workflows/   GitHub Actions deployment
|-- Documentation/       Project documentation
|-- css/                 Application styles
|-- data/                KidsTown data files
|-- graphics/            Images and graphical assets
|-- integration/         Routing and SPA integration
|-- script/              Converted JavaScript activities
|-- tests/               Testing and validation
|-- conversion-map.json  Perl-to-JavaScript conversion mapping
|-- index.html           SPA entry point
`-- README.md             Project documentation
```

## How the SPA Works

`index.html` acts as the main application shell.

The application contains two primary areas:

```html
<div id="nav"></div>
<main id="app"></main>
```

`#nav` contains the application navigation, while `#app` contains the currently selected KidsTown activity.

When a user selects an activity:

1. The router receives the requested KEY or route.
2. The route is matched to the appropriate JavaScript implementation.
3. The activity module executes.
4. The activity is dynamically rendered inside `#app`.
5. Navigation occurs without requiring a traditional full-page reload.

This preserves the logical structure of the original KidsTown application while removing its dependency on CGI and Perl.

## Conversion Map

`conversion-map.json` provides traceability between the original Perl scripts and their converted JavaScript implementations.

Conceptually:

```text
Legacy Perl Script
        |
        v
conversion-map.json
        |
        v
Converted JavaScript Module
```

This makes it easier to locate converted functionality and understand how components from the original application were migrated.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/kidstownConversion/kidstown-conversion.git
```

Enter the project directory:

```bash
cd kidstown-conversion
```

Start a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using a local HTTP server is recommended because browser security restrictions may prevent JavaScript modules or application resources from working correctly when `index.html` is opened directly.

## Deployment

The project is deployed automatically using GitHub Actions and GitHub Pages.

The deployment workflow is located in:

```text
.github/workflows/
```

Changes merged or pushed to the `main` branch trigger the deployment workflow.

```text
Push / Merge to main
        |
        v
GitHub Actions
        |
        v
GitHub Pages
        |
        v
Live KidsTown SPA
```

After making changes, developers should verify that the GitHub Actions workflow completes successfully and that the deployed application continues to function correctly.

## AI Collaboration

ChatGPT was used as an AI teammate throughout the modernization project.

AI-assisted tasks included:

- Legacy architecture analysis
- SPA architecture recommendations
- Code analysis and conversion recommendations
- Debugging assistance
- Git and GitHub workflow assistance
- Testing recommendations
- Documentation and code review

AI-generated recommendations were reviewed, tested, and validated by team members before being incorporated into the final project.

## Technologies Used

- HTML5
- CSS
- JavaScript
- ES Modules
- JSON
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Legacy Perl/CGI analysis

## Team

- Antonio Estrada
- Sergio Ramirez
- Aayush Lohani

## Repository

https://github.com/kidstownConversion/kidstown-conversion
