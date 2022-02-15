# Angular(Angular2 / version 2.0)

- is a structural framework for dynamic web applications. It lets you use your previous knowledge of HTML to create a template for components. With options like data binding and dependency injection, Angular provides plenty of features out of the box that would otherwise need to be created and implemented with a vast amount of JavaScript.

## [Angular Command Line Interface Tool](https://angular.io/cli)

- to help with Angular development. This command line interface (CLI) tool can be used to; create a project, add files, and, perform a variety of tasks essential to the development of an Angular project.

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

- `Component` Signified by the decorator @Component, are the most basic building block in developing the User Interface of an Angular application. An Angular application is simply a collection of Angular components.
- `Model` A class that "models" what the data for a specific component should look like. This includes the property name and type.
- `Enum` A data type that allows you to define a set of named constraints.
- `Services` Used to provide common functionality to various components throughout your application. Signified by the decorator @Injectable, are the primary source of information and data for a component. They are used to control the flow of data to and from components.
- `ngOnInit` A life-cycle method that is part of Angular and is executed after the constructor is run.

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
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

- The first line of the file is the `import` statement, this statement is importing `Component` and `OnInit` which allows for the use of the `@Component` decorator and the `ngOnInit` life-cycle method, respectively.
- The next line of code is the `@Component` decorator which specifies the Angular [metadata](https://angular.io/api/core/Component) for the component, this includes things like _animations, encapsulation, selectors, the templateUrl, and styleUrls_. The CLI, by default, generated the following three metadata properties within this `@Component` decorator:
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
  <h3>Skills:</h3>
  <p>{{ skills }}</p>
</div>
```

- use `handlebars` ({{ }}) to render the skills onto the page,
- In `app.component.html`
  - add `<app-skills>`

```html
<div id="header">
  <h1>{{ title }}'s Portfolio Page!</h1>
  <img alt="Angular Logo" src="../assets/images/margaret.jpg" />
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
  <h3>Skills:</h3>
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

1. When using a `class` to define information, each `class` will live in a new folder named `models`. This folder is used to _model_ the data in your application. Using the built-in terminal, enter the following command to create a new folder named `models` with a single file inside named `skill.ts`. The `skill.ts` file will contain a single class that is exported named Skill:

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
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
}
```

4. import your `Level` types in to your model file now level can use enum types

- `skill.ts`

```typescript
import { Level } from "../types/level.enum";

export class Skill {
  id: number;
  name: string;
  level: Level;
}
```

5. in `skills.component.ts`

- import models and types `Skill` and `Level`

```typescript
import { Component, OnInit } from "@angular/core";
import { Skill } from "../models/skill";
import { Level } from "../types/level.enum";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      id: 0,
      name: "Abstract Mathematics",
      level: Level.Expert,
    },
    {
      id: 1,
      name: "Philosophy",
      level: Level.Advanced,
    },
    {
      id: 2,
      name: "Developing Software",
      level: Level.Expert,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
```

6. `skills.component.html` file

- now loop over your objects

```html
<h3>Skills:</h3>
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

- `ngOnInit`, on the other hand, is a `life-cycle method` that is part of `Angular` and is executed after the `constructor` is run
- it is considered a best practice to not do any work within the constructor and only pass parameters to be used for `Dependency Injection`

```typescript
import { Component, OnInit } from "@angular/core";
import { Skill } from "../models/skill";

import { SkillsService } from "../services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = skillsService;
  }

  ngOnInit() {
    this.skills = this.dataService.skills;
  }
}
```

## Components, Services, Observables

- a service will pull data from another source, like a database, which requires time to complete. If that time is lengthy, but the requestor expects the results immediately, it could end up causing the application to lock up while it awaits the results
- the service should provide the data via a method that performs an asynchronous operation to acquire the data and return it immediately. However, the caller would still need to be informed of when the data acquisition operation completes, so that it can do what it needs to with the data. This can be accomplished by passing a `callback` to the service's method or returning a `promise` or `observable` from the service's method.
- an `observable` to handle the process of providing a collection of information over a period of time rather than all at once. To implement an `observable`, you will be using the `RxJS` library
- need to install [`RxJS`](https://rxjs-dev.firebaseapp.com/)
  - a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
  - `npm install RxJs`
- import observable from RxJS into your service file
  - Since the `service` provides the information or data to the component, this is why you must import the `observable` into this file

```typescript
import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

// add the below import statement:
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {
```

- The new import statement is importing `Observable` and `of` which are parts of RxJS
- need to create a new method that will live within the Service class, and this will use the RxJS observable and of() method.

```typescript
import { Injectable } from "@angular/core";

import { Skill } from "../models/skill";
import { Level } from "../types/level.enum";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: "Abstract Mathematics",
      level: Level.Expert,
    },
    {
      id: 1,
      name: "Philosophy",
      level: Level.Advanced,
    },
    {
      id: 2,
      name: "Developing Software",
      level: Level.Expert,
    },
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  };
}
```

- new method named `getSkills()` was created below the skills array. This method includes the following:
  - The method returns an observable with type Skill, this is shown by Observable<Skill[]>.
    - The method still returns the type Skill, but it now will be an observable.
  - The getSkills() method then returns another method named of().
    - The `of()` method, "creates an Observable that emits some values you specify as arguments, immediately one after the other, and then emits a complete notification." - RxJS.
    - This method is the observable itself, which will produce the values given one after the other rather than all at once. Once it has completed producing the values, it will give a complete notification.
  - The `observable` is returning the skills array that exists within the SkillsService class.
- the SkillsComponent needs to be updated to include the `getSkills()` method. Since the `ngOnInit` method is what receives the data from the service, this is where you will need to add the `getSkills()` method. You will also need to use the `subscribe()` method

```typescript
import { Component, OnInit } from "@angular/core";
import { Skill } from "../models/skill";

import { SkillsService } from "../services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = this.skillsService;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe((skills) => (this.skills = skills));
  }
}
```

- `component` is still returning the `dataService` property, but the `getSkills()` method is now being used.
- The `.subscribe()` method is how the `component` subscribes to the skills array.
  - When this `component` subscribes, it passes in a `callback` that updates its local `skills` property with the results.
    - This `callback` can be called anytime the data changes, this will allow the `component` to update itself with the new data continually.

## Two-Way Data Binding

- in Angular is the automatic synchronization between what value is displayed in the browser and the value stored in the corresponding property
- Changes that are made in the view are immediately reflected in the underlying model and vice versa.
- handle the data that is being sent from the user rather than to the user.
- Angular provides developers with the `ngModel` directive
- `ngModel` directive to the `input` element

```html
<h4>Welcome {{visitor}}!</h4>
<div>
  <input [(ngModel)]="visitor" placeholder="name" />
</div>
```

- The `[()]` syntax wrapping `ngModel` is the syntax used to indicate `two-way binding` and is known as "Banana-box"
- in `app.module.ts` file
  - need to include the `FormsModule` package. import the FormsModule. Then, add the `FormsModule` to the imports array within the`@NgModule`.

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import the FormsModule:
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SkillsComponent } from "./skills/skills.component";

import { SkillsService } from "./services/skills.service";
import { GreetingComponent } from "./greeting/greeting.component";

@NgModule({
  declarations: [AppComponent, SkillsComponent, GreetingComponent],
  //include the FormsModule within the imports array:
  imports: [BrowserModule, FormsModule],
  providers: [SkillsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- in the `input` field and the view will update as you enter text, this is `two-way data binding`. With the use of the `FormsModule` and the `ngModel` directive, you can bind a view to an input and create a way to update the page instantly.

## Forms

- Angular comes with tools for making forms quickly and efficiently.
- in the form.component.html

```html
<form (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Name: </label>
    <input
      type="text"
      placeholder="name"
      name="name"
      required
      [(ngModel)]="model.name"
    />
  </div>
  <div>
    <label for="email">Email: </label>
    <input
      type="email"
      placeholder="email"
      name="email"
      email
      required
      [(ngModel)]="model.email"
    />
  </div>
  <div>
    <label for="subject">Subject: </label>
    <input
      type="text"
      placeholder="subject"
      name="subject"
      required
      [(ngModel)]="model.subject"
    />
  </div>
  <div>
    <label for="message">Message: </label>
    <textarea
      type="text"
      placeholder="message"
      name="message"
      required
      [(ngModel)]="model.message"
    ></textarea>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

- using the `(ngSubmit)` and `[(ngModel)]` directives within this form
- The `(ngSubmit)="onSubmit()` is an Angular directive stating that on submit of the form, it will call the `onSubmit()` function
- The `[(ngModel)]` is allowing each `input` field to use that directive to update the data to whatever the user writes within the input.
- Render the `message-form` component within `app.component.html` to display the form

```html
<div id="header">
  <h1>{{ title }}'s Portfolio Page!</h1>
  <img alt="Angular Logo" src="../assets/images/margaret.jpg" />
  <h3>I was born in {{ city }} in 1936.</h3>
  <h5>Tagline: {{ tagline }}</h5>
  <p>{{ aboutMe }}</p>
  <app-greeting></app-greeting>
  <app-skills></app-skills>
</div>
<app-message-form></app-message-form>
```

- Create a class that will serve as a model for the data and will add the necessary properties
  - `ng g class models/message`
- import the model to the component
- create the function within the Component which will handle the form

```typescript
import { Component, OnInit } from "@angular/core";
import { Message } from "../models/message";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"],
})
export class MessageFormComponent implements OnInit {
  model: Message = new Message();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log("Submit Successful: ", this.model);
  }
}
```

- The `model` property is of type `Message` and is set to a `new`, empty message, this is where the form data will be stored. You set an empty value at first, so the form will load with empty values.
- The `onSubmit` method is the method that will be called when the form is submitted. It will log the value of the model property to the console.

### Interacting with Forms

- to provide the user with feedback when they interact with the form. Not only does it provide them with a better experience and coax them into using the application more, but it also helps ensure that the correct information is collected.
- this can be done through messages, regular expressions, haptic feedback, or other forms of visual feedback.
- apply CSS to built-in Angular `classes` to alert users when the form validation doesn't match.
- Angular applies new CSS classes which are in response to the HTML attributes on each input field

```css
form input {
  outline-width: 0;
  border-style: none;
}

form textarea {
  outline-width: 0;
  border-style: none;
}

form div {
  margin-bottom: 5px;
  text-align: center;
}
h3 {
  text-align: center;
}

input.ng-invalid.ng-touched,
textarea.ng-invalid.ng-touched {
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom: 2px solid red;
}

input.ng-valid.ng-touched,
textarea.ng-valid.ng-touched {
  border-bottom: 2px solid green;
}
```

- when entering information, the page will update with green or red underlines for correct or incorrect text entry.

## Modules

- `Modules`, known as `NgModules` in Angular, help organize an application into cohesive blocks. Modules describe how the application fits together as a whole, and every Angular application has at least one. When creating a new application using the CLI tool, an AppModule is created for you.
- Angular modules are denoted by prefixing a class with `@NgModule()`

### Terms

- `Modules` Known as NgModules, in Angular. Modules help organize an application into cohesive blocks of functionality. Modules describe how the application fits together as a whole, and every Angular application has at least one.
- `Core Package` This is where you get the functionality to build the core concepts in Angular.
- `Common Package` Provides functionality that is seen as commonly-used in the development of applications using Angular. All the directives provided by Angular are provided through the common package
- `HTTP Common Package` The underlying protocol used on the web to define how messages are formatted and transmitted. HTTP is key in sending and receiving information and data to and from another source or site.
- `Router Package` Conditional rendering based on the state of your application, this means, in its simplest form, routing in Angular is changing what is being rendered based on where you currently are in the application.

### App Module

- app.module.ts file looks like in a newly created Angular project

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- the `@NgModule decorator` are several properties set to arrays. This is where you will add anything that needs to be used in a module. The descriptions of each property within the `@NgModule` decorator:
  - `Declarations`: Let the compiler know what components in the application are being used. While you can have additional components in the source code, if they are not included in the declarations, they will not be functional.
  - `Imports`: Imports are all the modules that need to be included in the application for it to function properly. They come by default with the BrowserModule, because it is essential to all Angular applications.
  - `Providers`: An array for supplying concrete versions of a service to the Angular application globally. Rather than injecting it into each service and component individually, the providers' array will make it available to all.
  - `Bootstrap`: Tells the application what to insert into the browser DOM. For each component in the bootstrap array, there will be a separate DOM element. Each bootstrapped element should be the base of its own tree of components. Although it is possible to bootstrap multiple components, typically an application will only bootstrap one component at a time.

### Common Angular Modules

- Angular includes some pre-built modules that are packaged and provided by its makers. In the documentation, these modules are referred to as packages and contain some valuable logic needed to build an application. Things like `animation`, `forms`, `routing`, `testing`, and `HTTP` capabilities come prepackaged in Angular for use by developers.

When you create a new Angular application using the Angular CLI, some of these packages are automatically included in the project.

#### Core Package

- the heart of the Angular application, This package is where you get the functionality to build the core concepts in Angular:
  - Components
  - Injectables
  - ngModule
  - OnInit Interface
  - Testing

#### Common Package

- brings functionality to your application commonly-used in the development of applications using Angular.
- All the directives provided by Angular are provided through the common package:
  - NgIf
  - NgForOf
  - NgSwitch
  - Format functions (currency,date,percent)
  - Useful Pipes (DataPipe, CurrencyPipe,etc): formatting data in a particular way

#### HTTP Common Package

- package for managing connections to outside http/https resources.

#### Router Package

- Determine component rendering based on application state and user navigation. this change is done in one of three ways:
  1. Enter a URL in the address bar and the browser navigates to a corresponding page.
  2. Click links on a page and the browser navigates to a corresponding page.
  3. Click the browser's back and forward buttons, and the browser navigates back and forth through the history of pages you've previously visited.

### Creating a Module

- reorganize the pieces of the application to add new modules
- create a module
  - `ng generate module modules/skills`
  - `ng g m modules/skills`
- Move Files
  - make sure you have the right imports

## Routing and Navigation

- Routing is conditional rendering based on the state of the application. Meaning that in it's simplest form, `routing` in Angular changes what template renders based on where the user is in the application. So, depending on what page you are on within the website, a different template will be rendered.
- using the Angular `Router package` for routing and navigation
- in `src/index.html`
  - Notice that the <base> element is located within the <head> element, this allows the router to compose the correct navigation routes by giving it a starting point which all other routes will be created.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>PortfolioStarter</title>
    <base href="/" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

- create an `AppRoutingModule` by using the Angular CLI. The best practice is to create this `router` in its own top-level module that is dedicated to routing. The `AppModule` will then import it into the application.
  - `ng g m app-routing --flat --module=app`
    - `ng` is the necessary Angular command.
    - `g` is an alias for generate.
    - `m` is an alias for module.
    - `--flat` puts the file within the src/app folder instead of inside a self-titled folder
    - `--module=app` tells the CLI to register the new module within the imports array of the `AppModule`
      - navigate to `src/app/app.module.ts` to see that `AppRoutingModule` is now in the imports array.

### Routing Between Components

- in `src/app/app-routing.module.ts`
  - import `Routes` and `RouterModule` from the `@angular/router` library.
  - Next, you need to add the `RouterModule` to the `exports` array of the new module.
    - This will provide access to the `RouterModule` and router directives from other parts of the application.
  - You can also do some cleanup. For instance, the declarations array of the `@NgModule` is not needed.

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- the router has been established, you need to start adding `Routes`, which tells the router which template to display at any given point. A typical Angular `Route` has two properties:
  - The `path` that will be used in the URL within the address bar.
  - The `component` that the router will display.
- The goal is to render each of the components individually based on the URL.
- To accomplish rendering the `MessageFormComponent` based on the URL, first import `MessageFormComponent` into the `AppRouterModule`. Then, add it as the component to be rendered within an array named `routes`,

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MessageFormComponent } from "./shared/components/message-form/message-form.component";

const routes: Routes = [
  {
    path: "message",
    component: MessageFormComponent,
  },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- The `routes` array is applying the type `Routes` which was imported in the step above. The array is a collection of objects, and each object represents an individual `route`.
- Next, you now need to add the RouterModule into the imports array in the AppRouterModule,

```typescript
const routes: Routes = [
  {
    path: "message",
    component: MessageFormComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- Within the `imports` array, you are importing the `RouterModule` using the `.forRoot()` method which uses the routes variable.
  - The `RouterModule`, which has been imported, allows you to create navigation between the different components while maintaining information about which routes the user is navigating to. This way you can track where a user has been, and the data they submitted in case they want to go back.
  - The `forRoot` static method, of the `RouterModule`, creates a module with all of the router providers and directives. The first parameter, `routes`, is the Routes constant that you created previously.
    - The `forRoot` method also takes a second, optional, parameter for configuring the module. For instance, you can optionally enable tracing or set up an application listener to perform initial navigation.
- in `app.component.html` add <router-outlet></router-outlet>
- add a default route. When an Angular application starts, the browser's address bar automatically points to the web site's root path.

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { MessageFormComponent } from "./shared/components/message-form/message-form.component";
import { SkillsComponent } from "./modules/skills/components/skills/skills.component";
import { GreetingComponent } from "./shared/components/greeting/greeting.component";

const routes: Routes = [
  {
    path: "message",
    component: MessageFormComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "greeting",
    component: GreetingComponent,
  },
  {
    path: "",
    redirectTo: "/greeting",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- this will allow your app path to start with `/greeting`

```typescript
{
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  }
```

### Links

- create a navigation bar, this will allow the users to navigate through your application quickly.

#### Adding Navigation

- Angular navigation, the HTML `nav` element has two available `attributes` to handle this:
  - `routerLink`
  - `routerLinkActive`
- in `app.component.html` file

```typescript
<div id="header">
    <nav>
        <a class="btn" routerLink="greeting" routerLinkActive="active">Home</a>
        <a class="btn" routerLink="skills" routerLinkActive="active">Skills</a>
        <a class="btn" routerLink="message" routerLinkActive="active">Message</a>
    </nav>
    <h1>
        {{ title }}'s Portfolio Page!
    </h1>
    <img alt="Angular Logo" src="../assets/images/margaret.jpg">
    <h3>I was born in {{ city }} in 1936.</h3>
    <h5>Tagline: {{ tagline }}</h5>
    <p>{{ aboutMe }}</p>
</div>
<router-outlet></router-outlet>
```

- The <a> anchor tag has the following two `attributes`:
  - The `routerLink` attribute allows the `Router` to manage the navigation rather than the browser.
  - The `routerLinkActive` attribute distinguishes which link is active at the time. The router adds the active CSS class to the element when the associated `routerLink` becomes active. This directive can be added to the anchor or to its parent element.

##### Child Routes

- have an array of items, but only want to display the details of one of those items, you will need to create a detail view to display those details
- the component that displays the list (referred to as the `parent`) must pass to the detail component (referred to as the `child`) information about the item that the user selected. This is usually in the form of a unique `id` for the item that was selected.
- When the detail component receives this `id` it can single out the one item from within the array to display and bind that data to the view.
- [Angular.io Documentation - Route Definitions with Parameters](https://angular.io/guide/router#route-definition-with-a-parameter)

###### Getting route information

- you want to pass information from one component to another.
- Each item in the list has a unique `id`
- Use a `route` to pass this type of information to your application components. To do so, you use the `ActivatedRoute` interface.
- To get information from a route:
  1. Import `ActivatedRoute` and `ParamMap` to your component.
  - `import { Router, ActivatedRoute, ParamMap } from '@angular/router';`
    - Router:(class) A service that provides navigation among views and URL manipulation capabilities.
    - ActivatedRoute:(class) Provides access to information about a route associated with a component that is loaded in an outlet.
    - ParamMap:(structures) A map that provides access to the required and optional parameters specific to a route. The map supports retrieving a single value with `get()` or multiple values with `getAll()`.
  2. Inject an instance of `ActivatedRoute` by adding it to your application's constructor: in the component class

```typescript
  constructor(
    private route: ActivatedRoute,
) {}
```

3. Update the `ngOnInit()` method to access the `ActivatedRoute` and track the `name` parameter: in the component class

```typescript
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
```

- uses a variable, `name`, and assigns it the value based on the `name` parameter.

##### Router State

- While navigating in an Angular application, the router builds a "tree" of the routes the user activates. This tree is built of `ActivatedRoute` objects and makes up what is known as the route state. You can access this from anywhere in the application using the `Router` service and the `routerState` property. Each `ActivatedRoute` in the `RouterState` provides methods to traverse up and down the route tree to get information from the surrounding nodes. The `ActivatedRout`e in the route path has a great deal of useful information that is available by injecting they `ActivatedRoute` service. This service includes the following properties:
  - `url` An Observable of the various paths that were used to arrive at the current location.
  - `paramMap` An Observable that contains a map of all the parameters specific to the route, both required and optional.
  - `queryParamMap` An Observable that contains a map of all the query parameters specific to the route, single and multiple values.
  - `fragment` An Observable of the URL fragment available to all routes.
  - `outlet` An Observable of the URL fragment available to all routes. If the outlet is unnamed, the default name is 'primary'.
  - `routeConfig` The configuration used for the route that contains the origin path.

##### Router Events

- During navigation inside an Angular application, the Router releases events through the `Router.events` property. These events allow you to perform actions based on the point in time during the navigation, ranging from the point navigation starts to the point it ends, and everything in between. Actions are accessed through the following events:
  - `NavigationStart` An event triggered when navigation starts.
  - `NavigationEnd` An event triggered when navigation ends successfully.
  - `NavigationError` An event triggered when navigation fails due to an unexpected error.
  - `NavigationCancel` An event triggered when navigation is canceled

##### Logging Events

- All of these events can be logged to the console when the `enableTracing` option is enabled. Since the events are provided as an `Observable`, you can `filter()` for events of interest and `subscribe()` to them to make decisions based on the events and the order which they are fired throughout the entire navigation process.

## HTTP

- Hypertext Transfer Protocol (HTTP) is the main protocol that forms the basis of the World Wide Web. `HTTPS` is the secure version of this same protocol. Web clients use `HTTP` and `HTTPS` to send request messages to servers, and servers respond by returning response messages back to the client. `HTTP` and` HTTPS`, are essential protocols for anyone who needs to work aspects of web development, both on the client and on the server.

### Web Clients and Servers

- web clients send a HTTP request to the web server
  - url + verb(action)
- web server sends a HTTP response to the client
  - status code + message body

### [URLs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

- Uniform Resource Locator (URL) represents the unique internet address of a specific resource on the internet. A web resource may be a physical file, but more often, it is a dynamically computed result that is programmatically generated by server-side code, based on the content of the incoming request message.
- A URL specifies a unique server location on the internet in the form of an IP address or a domain name. The URL specifies the protocol (a.k.a. scheme), followed by the domain name (a.k.a. hostname). The domain name then maps to the physical IP address of the specific host server that provides the requested resource, followed by the path to the actual resource residing on that server. The following shows a simple but typical example of a URL that references a resource named `mypage.html` on a server with the domain name `www.mydomain.com.`
  - `http://www.mydomain.com/mypath/mypage.html`
    - `http` - protocol
    - `www.mydomain.com` - domain name
    - `mypath/mypage.html` - resource path
  - `protocol:[//[user:password@]host[:port]][/]path[?query][#fragment]`

### HTTP and HTTPS Protocols

- URLs can specify protocols other than HTTP and HTTPS, such as FTP, mailto but, you will not study any non-HTTP related protocols during this lesson. The 'S' on the end of HTTPS stands for Secure. So, HTTPS is just the secure version of HTTP, and it uses various cryptographic technologies to protect the confidentiality and the integrity of data as well as to authenticate the identity of communicating parties. In other words, HTTPS protects the data you send and receive with a communicating party from eavesdropping. The data cannot be tampered with in transit, and you know with whom you are communicating with. Security is an vital topic to anyone who works with data.

### Domain Names, IP Addresses, and DNS

- Most URLs specify the target server using a human-readable domain name that is meaningful and easy to recognize and remember. When you register your domain name for a new website that name goes into a world-wide distributed lookup service. The actual address of a web server is identified numerically using an IP address. The Domain Name Service (DNS) runs as a parallel internet protocol that provides a distributed service that translates human-friendly domain names into physical IP addresses.
- The domain name (or hostname) actually gets translated into an IP address by another related Internet protocol known as DNS, which stands for Domain Name System.
  - `microsoft.com` IP address is `23.96.52.53`

### Port Number

- URLs can also specify the port number, which identifies the specific HTTP server process running on the target server. There could be more than one process running on a particular server machine. As long as they each have a unique port number, the running process can be identified by adding the port number to the URL. Every internet protocol has its own default port number defined for its exclusive use. The default port for HTTP is 80, and for HTTPS it is 443. If you omit the HTTP port number, then it will assume the default port. Here is an example where the port number is set explicitly to 8080:
  - `http://www.mydomain.com:8080/mypath/mypage.html`

### Resource Path

- The resource path indicates the specific resource to access on the target web server. In some cases, it represents a physical file that is specified as a relative file system path under the web server's root folder. In other cases, the resource path portion of the URL represents a more abstract representation that must be parsed and interpreted by the web app to determine what to obtain or generate to send back to the client in the response message.

### Query Strings and Fragment Identifiers

- Note that the URL also allows for an optional trailing `question mark` and/or `hash symbol`.
  - The `question mark` allows the URL to pass additional information in the form of so-called "query parameters", which are just a list of one or more name-value pairs.
  - The `hash symbol` allows the URL to specify a fragment identifier that provides direction to a nested resource offset, such as a section heading within a web page.
    Here is an example that provides a query string that contains three variables named firstname, lastname, and age, with the values Jane, Smith, and 30, respectively:
    - `http://www.mydomain.com/mypath/mypage?firstname=Jane&lastname=Smith&age=30`

### Request and Response Format

- Other parts of an HTTP request are the `Body`, `HTTP Verbs`, and `Headers`. When the server responds it will respond using similar Headers, Body, and an additional item called the Status Code.

#### HTTP Message Body

- The HTTP `message body` contains the payload data within a request or response message. When a form on a web page is submitted, the body of the request message will contain whatever data you entered into the form and this is all available in server-side code.

#### HTTP Verbs

- Every request message is sent with an associated HTTP verb (a.k.a. method) that is used to indicate what the server is supposed to do when it is received. Each HTTP verb indicates the desired action that will be performed on the identified resource. The most common examples of HTTP verbs are; `GET`, `POST`, `PUT`, and `DELETE`
  - `GET`: Requests the specified resource and only retrieves data and without any other side effects on the server. An example would be querying a database to read one or more records.
  - `POST`: Requests that the server accepts the entity in the request and creates it on the server. An example would be adding one or more new records to a database.
  - `PUT`: Requests that the server accepts the entity inside the request and updates or replaces the data on the server. An example would be updating records in a database.
  - `DELETE`: Requests that the specified resource on the server is deleted. An example would be deleting one or more records from a database. This process is destructive and should never be an open route to a user who has not been authorized. In many cases, information is never truly "deleted" as the cost of storage goes down many companies prefer to keep the valuable data. Instead, records are marked as 'deleted' but still exist within the database.

#### Headers

- Headers are additional fields of information passed along with both HTTP requests and HTTP responses. They are most commonly used to transmit information about the request such as the length of the content, the format of the body, who is making the request, and who is the client application making the request. Headers can be any key/value pair so long as both the Client and Server agree on them. Some of the most common headers are:
  - `Access-Control-Allow-Origin`: Specifies which web sites can make requests to the server
  - `Content-Length`: The number of characters in the body of the response
  - `Content-Type`: What is the type of media contained in the request (video, audio, images, etc) -`Authorization`: Basic credentials for authentication (usually a Base64 encoded string)

#### [Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- Status codes are returned from the server to the client to indicate either success or failure information. HTTP status codes are divided into five categories:
  - Informational: 1XX
  - Successful: 2XX
  - Redirection: 3XX
  - Client Error: 4XX
  - Server Error: 5XX.
- For example, 200 means success, 301 means redirect, 404 means not found, 403 means forbidden and 500 means internal server error.

### Creating A Mock Server

- The process to create a set of data that can be used for your front-end development is called `mocking`. You will learn how to mock a server that will be able to `Create`, `Read`, `Update`, and `Delete` data so when you are working on the front-end application, you can safely test the code that is being written without the chance of breaking a real-world back-end.

#### Configure the Mock Server

- The server will be run locally on your computer using an Npm package called [`json-server`](https://github.com/typicode/json-server). To mock data in any application that can send and receive JSON through HTTP.
  - `npm install -g json-server`
  - create a new file in the root directory 
    - `mockdb.json`
      - your json data in this file
  - run your Angular sever 
    - `ng serve`
  - run json server on split terminal
    - `json-server --watch mockdb.json`
    - The command above is asking `json-server` to start the server and watch for changes to the `mockdb.json` file, and this is why it is important to have the file at the root level. If you place it inside other folders, you would have to qualify the route.
  - Open your browser and navigate to `http://localhost:3000/(property name)`  see the json objects within the browser window, this is exactly how your data will be delivered to your Angular application, 
#### Consuming HTTP Routes
- create a new module for your application that will display movies. To do this, the module will need to be imported to your main app and have a component to fetch, process, and display the data from the server you created previously.
##### Create Movies Module
- Create a Movies module
  - `ng g m modules/movies`
- Create a display movies component
  - `ng g c modules/movies/display-movies`
- in `movies.module.ts` file
  - export `DisplayMoviesComponent` component
- in `app-routing.module.ts` file:
  - import the `DisplayMoviesComponent` as well as a `new route` to `app-routing.module.ts` to allow for routing 
- in `app.component.html file:`
  - add a new anchor tag in the nav
- in `app.module.ts` file:
  - Import the `MoviesModule` and add it to the imports array.
- run your Angular server
  - `ng serve`
##### Using HttpClient
- need to create a movie model
  - create a new file called movie.ts
  - add your class model
- in movies.module.ts file:
  - import the `HttpClientModule` in the `MoviesModule`, and include it within the imports array. 
    - this will enable the `HttpClient`
- in display-movies.component.ts file:
  - import the Angular `HttpClient`
    - This will be used to access to `HTTP` request methods. The request methods on the `HttpClient` will be returning Observables of the data from the server. You then need to import the newly created Movie model as well so that we can pass the Movie type to the methods of the `HttpClient`. 
  - add a `moviesRoute` and a `movies` property
    - The private `moviesRoute` property is set to the route which holds the JSON array of movie objects. With this property, you will be able to access those movies.
    - The public `movies` property is set to the model Movie with the type array.
  - within the `constructor`, set a property `http` to the imported `HttpClient`.
    - This will allow you to access the `CRUD` methods within `HttpClient`. These methods will then be accessible to the `observable` using dot notation,
  - add a method named `getMovies()` that includes an `observable`
    - Within the `getMovies()` method, you are accessing the `HTTP` method `GET` by using dot notation to "get" the `moviesRoute` property.
    - The `observable` is then allowed to come in and pass the `movies` into the callback function, `.subscribe()`  
      - Within `.subscribe()` is where `this.movies` can be assigned the values that come back from the server.
```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../../../shared/models/movie';

@Component({
    selector: 'app-display-movies',
    templateUrl: './display-movies.component.html',
    styleUrls: ['./display-movies.component.css']
})

export class DisplayMoviesComponent implements OnInit {
    private moviesRoute = 'http://localhost:3000/movies';
    public movies: Movie[];

    constructor(private http: HttpClient) {}

    getMovies() {
        this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
            this.movies = movies;
            console.log('Movies', this.movies);
        });
    }
    ngOnInit() {
        this.getMovies();
    }
}
```
##### Bind Data to HTML
- `bind` the `movies` data to the `display-movies.component.html`
  - using `*ngFor` to loop through the movies array and render the data to the page. 
```html
<div class="movies">
  <h2>
    Movies:
  </h2>
  <ul>
    <li *ngFor="let movie of movies">
      <p>{{movie.id + 1}}. {{movie.title}}: {{movie.director}}</p>
      <img [src]='movie.image_url' />
    </li>
  </ul>
</div>
```

