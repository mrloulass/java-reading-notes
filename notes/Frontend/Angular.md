# Angular(Angular2 / version 2.0)
- is a structural framework for dynamic web applications. It lets you use your previous knowledge of HTML to create a template for components. With options like data binding and dependency injection, Angular provides plenty of features out of the box that would otherwise need to be created and implemented with a vast amount of JavaScript.

## [Angular Command Line Interface Tool](https://angular.io/cli)
-  to help with Angular development. This command line interface (CLI) tool can be used to; create a project, add files, and, perform a variety of tasks essential to the development of an Angular project.

## Angular Setup
- download the Angular CLI, run the following command in your command prompt/terminal:
  - `npm install -g @angular/cli`
    - This will install the Angular CLI tool globally on your computer.
    - Once the Angular CLI is installed, you can now begin developing using Angular.
- command to create an Angular project:
  - `ng new AngularL03`
    - `ng` is the command that specifies you want to use the Angular CLI tool.
    - `new` is the option for creating a new project and is followed by the name of the project (AngularL03).
    - This may take a couple minutes to generate the project. The project generated is a complete and working project that you will be able to build upon. Most of this time is used to install dependencies.
- structure of the project
  - `e2e`: End-to-end testing, also known as UI testing, is used to explore the application as users experience it. In e2e testing, one process runs the application, and another process runs protractor tests that simulate a user going through the application.
  - `node_modules`: The folder that all node dependencies are stored in. If at any point you do not have this folder, simply run `npm install` and it will download the dependencies specified in the `package.json`.
  - `src`: This is the most important folder in the application to a developer, this is where the source code for the application resides. Because of this, it is where developers will spend most of their time.
    - `app`: Angular application files will go into the app folder. This is where you will spend most of your time when working with Angular.
      - Notice the way this folder's files are laid out. The app component has a .html, .css, .spec.ts, and .ts file, this is the basic structure of Angular components. As you create new components, they will follow this basic formula. The app.module.ts is the heart of the Angular application, this is where the components, services, directives, and anything else created for your application will be connected and served out of.
    - `assets`: Where all your media for the project should be stored and served from.
    - `index.html`: The main HTML page to be served when a user navigates to your URL, this is the HTML that will serve up the Angular application.
    - `main.ts`: The main source of TypeScript for your application, and this is the central hub for the Angular application that ties everything together.
    - `style.css`: The main CSS file to store your global styles should you have any.
  - `package.json`: Used to identify the npm packages being used in the project. It also contains command scripts for running the application, running tests, and more.
  - The rest of the files are the configuration for the project, testing, typescript, and linting.
- integrated terminal, run the following command to start the server and run the application:
  - `ng serve --open`
- to stop the server
  - `Ctrl + C`
