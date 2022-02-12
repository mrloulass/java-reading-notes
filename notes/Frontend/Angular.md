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
## Angular CLI, 
- the focus will be on just a few of them, specifically; `new`, `serve`, `generate`, and `test`
## Terms
- `Component`	Signified by the decorator @Component, are the most basic building block in developing the User Interface of an Angular application. An Angular application is simply a collection of Angular components.
- `Model`	A class that "models" what the data for a specific component should look like. This includes the property name and type.
- `Enum`	A data type that allows you to define a set of named constraints.
- `Services`	Used to provide common functionality to various components throughout your application. Signified by the decorator @Injectable, are the primary source of information and data for a component. They are used to control the flow of data to and from components.
- `ngOnInit`	A life-cycle method that is part of Angular and is executed after the constructor is run.
## Creating Components
- `base component` is what holds all new components that are generated. Within your project,
- All the files in src/app are part of `base component`
- The `app.module.ts` file is where every component used in this application will be imported and eventually rendered onto the webpage. 
- to create a new component
  - `ng generate component (component name)`
  - new components should have a lowercase name.
- `generate` command, it created a folder named `skills`, within the `app` folder.
  - This folder includes the following files:
    - skills.component.html
    - skills.component.css
    - skills.component.ts
    - skills.component.spec.ts
  - The `skills.component.ts` file is where you will typically start updating since this is the file that holds the logic of the component.
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```
  - The first line of the file is the `import` statement, this statement is importing `Component` and `OnInit` which allows for the use of the `@Component` decorator and the `ngOnInit` life-cycle method, respectively.
  - The next line of code is the `@Component` decorator which specifies the Angular [metadata](https://angular.io/api/core/Component) for the component, this includes things like *animations, encapsulation, selectors, the templateUrl, and styleUrls*. The CLI, by default, generated the following three metadata properties within this `@Component` decorator:
    - `selector`: The component's CSS element selector, this is how Angular identifies the component in the template.
    - `templateUrl`: The location of the component's template file, this is the location of the HTML to be used for the structure of the component.
    - `styleUrls`: The location of the stylesheets used specifically for the private styling of the component.
  - Next is the class `SkillsComponent` which has a few essential parts:
    - `Export`: Components are exported so the component can then be imported into different files.
    - `implements OnInit`: This is implementing the imported `OnInit` into the class.
    - ngOnInit: This is an Angular life-cycle method. ngOnInit is the place where the logic for the component will live.
  - When use `generate` it will import your component to `app.module.ts`
## Rendering Components
- One of the most significant benefits of components is the ability to write them once and use them over and over again. The skills component can be accessed by any area of the application to display the skills listed within the `skills` array
- In skills.component.html
```html
<div>
  <h3>Skills: </h3>
  <p>{{ skills }}</p>
</div>
```
- use `handlebars` ({{ }}) to render the skills onto the page, 
- In `app.component.html`
  - add `<app-skills>`
```html
<div id="header">
    <h1>
        {{ title }}'s Portfolio Page!
    </h1>
    <img alt="Angular Logo" src="../assets/images/margaret.jpg">
    <h3>I was born in {{ city }} in 1936.</h3>
    <h5>Tagline: {{ tagline }}</h5>
    <p>{{ aboutMe }}</p>
    <app-skills></app-skills>
</div>
```
- within the `skills @Component` (skills.component.ts file) is a field named `selector`, and this is where the `app-skills` name is defined. This field defines the `selector` name for when you are rendering the component. In this case, it is `app-skills`.
- an Angular `ngFor` directive which will loop over each item in the array and produce a new `<li>` element for each item in the array. Add the following code to the `skills.component.html` file.
```html
<div>
    <h3>
    Skills:
    </h3>
    <ul>
    <li *ngFor="let skill of skills">{{skill}}</li>
    </ul>
</div>
```
- `*ngFor` can pull in each skill from the array:
  - The `let skill of skills` is grabbing each skill within the `skills` array and setting it to the variable of skill. Then, within the `handlebars`, you render each `skill` rather than all of the skills at once.
- `Angular Directives` are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even to transform the DOM element and its children.
- `Angular Directive` `*ngFor` to loop through an array.
## Modeling Objects with Classes
- describe a `class` that will be used to define, or `model`, what it means to be a `skill`. This way, you will be able to define an `id` and any other information needed for each skill.
1. When using a `class` to define information, each `class` will live in a new folder named `models`. This folder is used to *model* the data in your application. Using the built-in terminal, enter the following command to create a new folder named `models` with a single file inside named `skill.ts`. The `skill.ts` file will contain a single class that is exported named Skill:
  - `ng generate class models/skill`
2. the `src/app/models/skill.ts` file
  - exported class named `Skill`
  - can add the properties that will make up a skill. 
```typescript
export class Skill {
  id: number;
  name: string;
  level: string;
}
```
3. An `enum` is a data type that allows you to define a set of named constraints; it can also be referred to as an enumerated type or enumeration. 
  - use the CLI to generate an [enum](https://www.typescriptlang.org/docs/handbook/enums.html) named level inside a new folder called `types`:
  - `ng generate enum types/level`
  - `enum` as a datatype does not exist in JavaScript; this is a TypeScript specific feature. The values you will want for the `Level` enum, 
```typescript
export enum Level {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert'
}
```
4. import your `Level` types in to your model file now level can use enum types
  - `skill.ts`
```typescript
import { Level } from '../types/level.enum';

export class Skill {
  id: number;
  name: string;
  level: Level;
}
```
5. in `skills.component.ts`
  - import models and types `Skill` and `Level`
```typescript
import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Abstract Mathematics',
      level: Level.Expert
    },
    {
      id: 1,
      name: 'Philosophy',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Developing Software',
      level: Level.Expert
    }
  ];

  constructor() {}

  ngOnInit() {}
}
```
6. `skills.component.html` file
  - now loop over your objects
```html
<h3>
Skills:
</h3>
<ul>
<li *ngFor="let skill of skills">
    <p>{{skill.id + 1}}. {{skill.name}}: {{skill.level}}</p>
</li>
</ul>
```
## Services
- `Services` are used to provide common functionality to various components throughout your application. Signified by the decorator `@Injectable`, Services are the primary source of information and data for a component. They are used to control the flow of data to and from components.
- The main advantage of creating a service is that the component code will no longer need to be updated because of the way the data will be sent and received is separate from the component itself.
### Create and Use a Service
1. Services can be created by using the Angular CLI. Run the following command in the built-in terminal of VS Code, and this will create a new service named `skills.service.ts` inside a new folder called `services`
  - `ng generate service services/skills`
  - a folder named `services` was created and it includes two files: `skills.service.ts` and `skills.service.spec.ts`.
2. use the `skills.service` within the skills.component, you will need to use something called `dependency injection`, and this allows you to inject the service into the component by way of the component's constructor
  - into the `app.module.ts`
    - import SkillsService
    - add SkillsService to providers:[] array
3. `skills.service.ts` file to include the array of skills objects as well as the necessary import statements
  - import your model and types 
  - add your array of `skills` (model with a type) Skill[]
4. add that service to the constructor of the SkillsComponent class, this is where you will be using dependency injection.
  - in skills.component.ts file
    - import SkillsService
    - add a property of skills
    - Within the constructor
```typescript
skills: Skill[];
constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }
  ```
## Using ngOnInit
- `ngOnIni`t`, on the other hand, is a `life-cycle method` that is part of `Angular` and is executed after the `constructor` is run
- it is considered a best practice to not do any work within the constructor and only pass parameters to be used for `Dependency Injection`

## Components, Services, Observables
