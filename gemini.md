# Project: SIE-EA Home Frontend

## Overview
This project is the frontend application for the SIE-EA Home system, built with Vue.js. It provides a user interface for interacting with various business, product, and customer support functionalities.

## Setup

### Prerequisites
- Node.js (LTS version recommended)
- npm or Yarn

### Installation
1.  Clone the repository.
2.  Navigate to the `frontend` directory:
    ```bash
    cd /Users/bbok/projects/cursorProjects/sie-ea-home/frontend
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```

### Running the Development Server
```bash
npm run dev
# or yarn dev
```
This will start the development server, usually accessible at `http://localhost:5173`.

### Building for Production
```bash
npm run build
# or yarn build
```
This command compiles and minifies the application for production deployment.

## Project Structure
- `public/`: Static assets, including `assets/css`, `assets/js`, and `assets/img`.
- `src/`: Main application source code.
    - `api/`: API service definitions.
    - `assets/`: Vue-specific assets (e.g., images, icons).
    - `components/`: Reusable Vue components.
    - `router/`: Vue Router configuration.
    - `store/`: Vuex store configuration.
    - `styles/`: Application-specific SCSS styles.
    - `utils/`: Utility functions.
    - `views/`: Vue components representing different pages/views.

## Styling
This project utilizes pre-existing CSS and JavaScript assets located in the `/public/assets` directory. These include:
-   **CSS:** `public/assets/css/bootstrap.css`, `public/assets/css/paper-kit.css`, `public/assets/css/sieea.css`, etc.
-   **JavaScript:** `public/assets/js/paper-kit.js`, etc.
-   **Fonts & Images:** `public/assets/fonts` and `public/assets/img`.

New styles should generally align with the existing `paper-kit` and `bootstrap` frameworks already integrated. Avoid creating new, separate style files unless absolutely necessary and in alignment with project conventions. Custom styles can be added or overridden in `src/styles/main.scss` if needed, but prioritize using the existing utility classes and components.
