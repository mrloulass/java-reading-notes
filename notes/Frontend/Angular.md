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
- `ngOnInit`, on the other hand, is a `life-cycle method` that is part of `Angular` and is executed after the `constructor` is run
- it is considered a best practice to not do any work within the constructor and only pass parameters to be used for `Dependency Injection`
```typescript
import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';

import { SkillsService } from '../services/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
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
``` typescript
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
import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
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
import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';

import { SkillsService } from '../services/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    skills: Skill[];
    dataService: SkillsService;

    constructor(private skillsService: SkillsService) {
        this.dataService = this.skillsService;
    }

    ngOnInit(): void {
        this.dataService.getSkills().subscribe(skills => this.skills = skills);
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
-  Angular provides developers with the `ngModel` directive
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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import the FormsModule:
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
    declarations: [AppComponent, SkillsComponent, GreetingComponent],
    //include the FormsModule within the imports array:
    imports: [BrowserModule, FormsModule],
    providers: [SkillsService],
    bootstrap: [AppComponent]
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
        <input type="text" placeholder="name" name="name" required [(ngModel)]="model.name">
    </div>
    <div>
        <label for="email">Email: </label>
        <input type="email" placeholder="email" name="email" email required [(ngModel)]="model.email">
    </div>
    <div>
        <label for="subject">Subject: </label>
        <input type="text" placeholder="subject" name="subject" required [(ngModel)]="model.subject">
    </div>
    <div>
        <label for="message">Message: </label>
        <textarea type="text" placeholder="message" name="message" required [(ngModel)]="model.message"></textarea>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
```
  -  using the `(ngSubmit)` and `[(ngModel)]` directives within this form
    - The `(ngSubmit)="onSubmit()` is an Angular directive stating that on submit of the form, it will call the `onSubmit()` function
    - The `[(ngModel)]` is allowing each `input` field to use that directive to update the data to whatever the user writes within the input.
- Render the `message-form` component within `app.component.html` to display the form
```html
<div id="header">
    <h1>
        {{ title }}'s Portfolio Page!
    </h1>
    <img alt="Angular Logo" src="../assets/images/margaret.jpg">
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
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
    model: Message = new Message();
    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        console.log('Submit Successful: ', this.model);
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
- `Modules`	Known as NgModules, in Angular. Modules help organize an application into cohesive blocks of functionality. Modules describe how the application fits together as a whole, and every Angular application has at least one.
- `Core Package`	This is where you get the functionality to build the core concepts in Angular.
- `Common Package`	Provides functionality that is seen as commonly-used in the development of applications using Angular. All the directives provided by Angular are provided through the common package
- `HTTP Common Package`	The underlying protocol used on the web to define how messages are formatted and transmitted. HTTP is key in sending and receiving information and data to and from another source or site.
- `Router Package`	Conditional rendering based on the state of your application, this means, in its simplest form, routing in Angular is changing what is being rendered based on where you currently are in the application.
### App Module
- app.module.ts file looks like in a newly created Angular project
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
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
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>PortfolioStarter</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
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
      -  navigate to `src/app/app.module.ts` to see that `AppRoutingModule` is now in the imports array.
### Routing Between Components
- in `src/app/app-routing.module.ts`
  - import `Routes` and `RouterModule` from the `@angular/router` library.
  - Next, you need to add the `RouterModule` to the `exports` array of the new module.
    - This will provide access to the `RouterModule` and router directives from other parts of the application.
  - You can also do some cleanup. For instance, the declarations array of the  `@NgModule` is not needed.
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```
- the router has been established, you need to start adding `Routes`, which tells the router which template to display at any given point. A typical Angular `Route` has two properties:
  - The `path` that will be used in the URL within the address bar.
  - The `component` that the router will display.
- The goal is to render each of the components individually based on the URL.
- To accomplish rendering the `MessageFormComponent` based on the URL, first import `MessageFormComponent` into the `AppRouterModule`. Then, add it as the component to be rendered within an array named `routes`,
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MessageFormComponent } from './shared/components/message-form/message-form.component';

const routes: Routes = [
    {
        path: 'message',
        component: MessageFormComponent
    }
];

@NgModule({
    imports: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```
  - The `routes` array is applying the type `Routes` which was imported in the step above. The array is a collection of objects, and each object represents an individual `route`.
- Next, you now need to add the RouterModule into the imports array in the AppRouterModule, 
```typescript
const routes: Routes = [
{
    path: 'message',
    component: MessageFormComponent
}
];

@NgModule({
    imports: [
            CommonModule,
            RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```
  - Within the `imports` array, you are importing the `RouterModule` using the `.forRoot()` method which uses the routes variable.
    - The `RouterModule`, which has been imported, allows you to create navigation between the different components while maintaining information about which routes the user is navigating to. This way you can track where a user has been, and the data they submitted in case they want to go back.
    - The `forRoot` static method, of the `RouterModule`, creates a module with all of the router providers and directives. The first parameter, `routes`, is the Routes constant that you created previously.
      - The `forRoot` method also takes a second, optional, parameter for configuring the module. For instance, you can optionally enable tracing or set up an application listener to perform initial navigation.
- in `app.component.html` add <router-outlet></router-outlet>
