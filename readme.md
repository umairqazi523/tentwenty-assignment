# Project Development Environment

This readme file provides information about the development environment for the project. The project is set up using Node.js version 16 and utilizes Webpack for development and production builds.

## Prerequisites

To work with this project, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/en/) version 16 or above
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup

Follow the steps below to set up the project on your local machine:

1. Clone the repository: 

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd <project-directory>
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

## Folder Structure

The project follows a specific folder structure, as outlined below:

```
├── src
│   ├── assets
│   │   ├── js
│   │   │   ├── ...    # JavaScript files
│   │   │   └── ...
│   │   └── styles
│   │       ├── ...    # Stylesheets
│   │       └── ...
│   ├── ...            # Other project files
│   └── ...
└── ...
```

The main source files are located in the `src` directory. Within the `src` directory, you will find an `assets` folder which contains two sub-folders: `js` and `styles`.

- The `js` folder is intended for JavaScript files. You can place your JavaScript source files in this directory.
- The `styles` folder is intended for stylesheets. You can place your CSS or SCSS files in this directory.

Feel free to organize your files within these folders as per your project requirements.

## Development

During development, the project uses Webpack to bundle the source files and provide live reloading for an efficient development workflow.

To start the development environment, run the following command:

```shell
npm run watch
```

This command will initiate the Webpack build and watch for any changes in the source files. When a change is detected, Webpack will automatically rebuild the project and reload the changes in the browser.

## Production

To build the project for production, run the following command:

```shell
npm run build
```

This command will create a production-ready build of the project, optimizing the code for performance and creating the necessary assets for deployment.

The production build will be available in the `dist` directory.

## Conclusion

You are now set up with the project's development environment. With Node.js version 16, Webpack for development and production builds, and the defined folder structure, you can efficiently develop and build the project according to your requirements. Happy coding!
