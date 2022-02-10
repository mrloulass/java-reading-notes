# TypeScript
- TypeScript will compile to plain JavaScript which is why it's called a superset. Typescript, as an alternative to JavaScript, adds new features, functionality, and rules to the language to make your code more predictable and prevent errors when programming. Some additions from TypeScript have been integrated into the latest version of JavaScript.
## Terms
- `TypeScript`	Typescript, as an alternative to JavaScript, adds new features, functionality, and rules to the language in order to make your code more predictable and prevent errors when programming.
- `Static Typing`	Types can be declared and then the compiler checks that the correct types of values are being used. If no type is specified, it will be inferred from your code.
- `Type Casting`	Allows for the conversion of a string to a number or a number to a string.
- `Type Assertion`	Allows you to officially define the types so when the compiler reads your TypeScript code, it cannot assume anything; it knows the type.
- `Interfaces`	Blueprints of types that are easily reused or updated throughout your application
## Project Setup
1. package.json file
```json

{
    "name": "typescript-sandbox",
    "version": "1.0.0",
    "description": "a sandbox for testing TypeScript code",
    "main": "index.js",
    "scripts": {
        "start": "tsc && node index.js"
    }
}
```
  - important part of the code above is the `start` script. It is going to run `tsc` in the terminal first,
  - then it is going to run `node index.js`. `tsc` stands for `TypeScript Compiler` which will take any file that ends with `.ts` or `.tsx` and compile it into JavaScript. 
  - The `tsc` is going to output a file with the same name and a `.js` extension in the same directory as the `.ts` version. Once tsc has finished, the script will then continue to run the code within the `index.js` file using node.
  - create a index.ts file
    - add a test console.log()
2. TypeScript config file named tsconfig.json
  -  typing the following command in the terminal
    - `tsc --init`
3. run the code by typing npm start in the terminal:
  - `npm start`
    - npm star
    - This will generate a file called `index.js` and then immediately run that file using `node`.
## Static Typing
- JavaScript does not require the developer to specify the type of value used. The type of data can be changed later in the source code or during execution of the program which may be unintended. TypeScript changes this by adding typings support and making the language strongly typed as you would see in Java or C#. With this feature, you declare types and then the compiler checks that the correct types of values are being used. If no type is specified, it will be inferred from your code. It is also important to know that because TypeScript is compiled into JavaScript
### Common [Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

| Type               	| Description                                                                                                                                                                                                                                                                                                                                                                                 	|
|--------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Boolean            	| True or False value                                                                                                                                                                                                                                                                                                                                                                         	|
| Number             	| All numeric values are represented by the number type, this includes integers, floats, decimals, etc.                                                                                                                                                                                                                                                                                       	|
| String             	| Textual data. Just like JavaScript, strings can be surrounded by single quotes (''), double quotes (""), or backticks (``).                                                                                                                                                                                                                                                                 	|
| Array              	| Grouping of values, this can be written two ways. number[] or Array<number> which both indicate an array of numbers. As the best practice, you should keep arrays of only one type, even in regular JavaScript.                                                                                                                                                                             	|
| Any                	| There may be a time when a type is needed, but currently unknown; this is what the any type is used for. The any type allows you to opt-out of type-checking during the compile-time checks. Using any is commonly frowned upon and should not be used if it can be avoided. If the type cannot be determined it is a sign that the problem may need to be broken down into smaller pieces. 	|
| Void               	| The polar opposite of any. Instead of returning any data type, void will return nothing. Void is used with functions that do not return any value.                                                                                                                                                                                                                                          	|
| Null and Undefined 	| In TypeScript, null and undefined have their own data types respectively. When not using the strictNullChecks flag in the tsconfig.json file, null and undefined are subtypes of the other types, meaning you can assign a null value to a number or a string. When using the strictNullChecks flag, null and undefined can only be assigned to void and their own respective data types.   	|

- the types are defined after the variable name. To define a type, write the variable name, include a colon (:) after the variable name, and finally, include the type needed for that variable.
```typescript
const sandwich: string = 'BLT'; // string
const orderNumber: number = 1738; // number
const delicious: boolean = true; // boolean
```
```typescript
function orderFood(sandwich: string, orderNumber: number): void {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich');
}

orderFood('Ham & Cheese', 32);
```
- First, the function is defined by the `function` keyword and is named `orderFood`.
- Next, the `parameters` are defined within the parenthesis (). There are two parameters defined: `sandwich` and `orderNumber`.
  - Each `parameter` has a type defined: `sandwich` is of type `string`, and `orderNumber` is of type `number`.
- Third, after the `parameters`, the type of the `function` is defined as `void`.
  - The syntax `: void` is located after the parenthesis that holds the `parameters` and before the curly brackets {}.
  - In this case, the `function` does not return anything except for a `console.log`, so the type is `void`.
    - `console.log` itself does not have a type of anything, which is why the `function` is returning a type of `void`.
- Lastly, there is a `console.log` which sends a message to the console including both of the parameters.
### Wrong Type Values
- If you try to do something illegal, like put a number as the value of a variable defined as a string, when compiled, TypeScript will report an error.

### Typecasting
- At some point, you will need to convert a string to a number or a number to a string and this process is called typecasting. You may have seen this before, but it is essential to know the term for this conversion.
- converting of a number to a string by using the `toString()` function
```typescript
const age: number = 32;
const ageAsString: string = age.toString();

const greeting: string = "Hello, my age is " + ageAsString + ".";

console.log(greeting)
```
  - `32` is converted into a string
- convert a string of a number into an integer, you can use `parseInt()` to then do a mathematical equation,
```typescript
const age: string = "55";
const ageAsNumber: number = parseInt(age);

const numberCalculation: number = ageAsNumber * 10;

console.log(numberCalculation)
```
  - string "55", convert it to a number, and multiply it by 10.
### [Type Assertion](https://basarat.gitbook.io/typescript/type-system/type-assertion)
- `Type assertion` allows you to define the `type` of the data officially. When the compiler reads your TypeScript code, it cannot assume anything; it knows the type that is expected. `Type assertion` is essentially an explicit typecasting. So when the compiler doesn't know the type, you can use `type assertion` to define how it should be cast.
```typescript
var fred = {};
fred.age = 57; // Error: property 'age' does not exist on `{}`
fred.name = 'Fred Wilkenson'; // Error: property 'name' does not exist on `{}`
```
- The way to override this assumption is by defining an `interface` and giving `fred` a type assertion by using the `as` keyword,
```typescript
interface Person {
    age: number;
    name: string;
}
const fred = {} as Person;
fred.age = 57;
fred.name = 'Fred Wilkenson';
```
- You can also use type assertion by using the <> syntax
```typescript
const personName: any = 'Fred Wilkenson';
const fredName = <string>personName;
```
- the `personName` variable has a type of `any`. It is then overwritten to be a `string` set to the variable `name`
## Interfaces
- are essentially blueprints of `types` that are easily reused or updated throughout your application. 
- They are similar to JavaScript objects because they contain a `property` and a `value`, but the `value` in an interface is the `type definition` of the `property`. 
- Much like the other data types, interfaces are only a part of TypeScript and not JavaScript. So, when the TypeScript file compiles into JavaScript, they will not exist in the `.js` file.

### Creating an Interface
- interface is specified with the `interface` keyword followed by the name of the interface itself. Then, within the curly brackets {}, the `property` names and `types` are defined.
```typescript
interface ingredientsBasket {
    numberOfItems: number;
    ingredients: string[];
    calories: number;
}
```
- three properties, each with their own type:
  - the property `numberOfItems` has a type of `number`
  - the property `ingredients` has a type of an `array` of `strings`
  - the property `calories` has a type of `number`
- interface has been defined, it can now be used throughout the application like any other data type.

### Using an Interface
- `interface` is used as the `type` for a function's parameter
```typescript
interface ingredientsBasket {
    numberOfItems: number;
    ingredients: string[];
    calories: number;
}
function makeASandwich(ingredients: ingredientsBasket): void {
    console.log(
        'Your sandwich includes ' +
        ingredients.numberOfItems +
        ' items of ' + ingredients.ingredients + ', which comes out to be a total of ' +
        ingredients.calories +
        ' calories.'
    );
}
const sandwichIngredients = {
    numberOfItems: 3,
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories: 320
};
makeASandwich(sandwichIngredients);
```
1. First, the `interface` is defined.
2. the function `makeASandwich` is defined. What is different here is that the `function` takes in one parameter, `ingredients`, and the `type` defined for that parameter is the interface you created above.
  - Rather than having three `parameters `and defining each of their `types` separately, you can set them within an `interface` and use the entire `interface` as the `type`.
  - The `function` also includes a `console.log` that uses the `properties` within the `parameter` to send back a message with the `values` defined.
    - Because the `function` only includes a `console.log`, it has a return type of `void`.
3. an object is created named `sandwichIngredients` that has the same `properties` as the `ingredientsBasket` `interface`. But because this is an actual `object`, the `values` are the actual values needed to create a sandwich, not the `type` definitions.
  - Notice that the `types` of the values are the same as the interface `types`.
4. Lastly, the `function` is invoked with the `sandwichIngredients` as its one parameter
- `interfaces` are defined in their own files and then imported into other files where they are needed, this allows for a very organized application.

#### Optional Properties
- decide that a property within an interface doesn't necessarily need to be defined,
- the question mark (?) is used to denote an optional property
```typescript
interface ingredientsBasket {
    numberOfItems: number;
    ingredients: string[];
    calories?: number;
}
```
- `interface`, adding a question mark before the colon makes the calories property optional.
- were to use this interface, you would not have to define the number of calories; it could be omitted because of the ?.

#### Readonly Properties
- once the property is assigned, it cannot be reassigned. Sometimes, it is necessary for a few properties only to be assigned a value when an object is first created.
-  you add the `readonly` keyword before the property name
```typescript
interface ingredientsBasket {
    readonly numberOfItems: number;
    ingredients: string[];
    calories?: number;
}
```
- `numberOfItems` property is `readonly` and once it has been defined, it cannot be reassigned

#### Using Interfaces with Classes
- using an `interface` with a `class`, you use the `implement`s keyword to implement the `interface` into the class
```typescript
interface Lifespan {
    currentTime: Date;
}

class AppointmentDateFormatter implements Lifespan {
    currentTime: Date;

    // notice this constructor does not have return type annotation
    constructor(day: number, month: number, year: number) {
        this.currentTime = new Date(year, month, day);
    }

}
```
- As you can see, you need to redefine the `property` and `type` within the class, this is because implementing an interface into a class is different from inheriting.
  - Just because you have the keywords `implements` `Lifespan` does not mean that the `property` and `types` within the interface will be inherited into the class. Remember, the interface is just a blueprint!
- `Date` is a built-in JavaScript object that will take in a date a turn it into a specific format (ex. January 1, 1970, 00:00:00 UTC). These must be instantiated by defining the parts of the date.
#### Using Methods with Interfaces and Classes
- Using Methods with Interfaces and Classes
```typescript
interface Lifespan {
    currentTime: Date;
    printDate(): void;
}

class AppointmentDateFormatter implements Lifespan {
    currentTime: Date;

    constructor(day: number, month: number, year: number) {
        this.currentTime = new Date(year, month, day);
    }

    printDate(): void {
        console.log(this.currentTime.toDateString());
    }
}

const dateOfAppointment = new AppointmentDateFormatter(12, 4, 2018);

dateOfAppointment.printDate();
```
#### Classes Implementing Multiple Interfaces
- implementing multiple interfaces into a class, you must separate them by a comma (,)
```typescript
interface Animal {
    name: string;
    whoAmI(): void;
}

interface Mammal {
    brushHair(): void;
}

interface WingedAnimal {
    fly(): void;
}

class Bat implements Animal, Mammal, WingedAnimal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    whoAmI(): void {
        console.log("I'm " + this.name + "!");
    }

    brushHair(): void {
        console.log("I must brush my hair to look pretty!");
    }

    fly(): void {
        console.log("Look! I can fly!");
    }
}

let bat = new Bat("Bartok");
bat.whoAmI();
bat.brushHair();
bat.fly();
```
- the `class` is implementing each of the `interfaces`, it is using the `methods` located within the `interfaces`.
## Terms
- `TypeScript Classes`	With the creation of ES6, classes were added to JavaScript. Before that happened, TypeScript allowed for using an object-oriented, class-based approach to building applications.
- `Class Declaration`	Allows for the use of the word class to declare a class.
- `Class Expression`	Allows for the creation of a class that is either named or unnamed. When using Class Expression, you use the const or let keywords.
- `Constructor`	A special method that is used for creating and initializing an object within a class. When using a constructor within a class, you may only have one constructor per class, otherwise, you will get an error. When working with constructors, you are able to use the super keyword to access constructors from Parent classes.
- `Hoisting`	This means you can use a function before you declare it in your code.
- `Instantiate`	This means you are using and defining the properties within the class. To do this, you need to use the new keyword to create "new" class object.
- `Inheritance`	Allows developers to extend existing classes to create new ones by using the information from the existing class.
- `Generics`	A generic is a component that can work over a variety of types rather than a single one, which allows users to consume these components and use their own types.
- `Decorators`	Provides a way to add functionality to parts of an application or program and are used extensively in Angular. Decorators, denoted by the @ sign, are functions (including necessary parameters) that are evaluated by another function at runtime with information about the declaration. There are several types of Decorators: Class, Property, Method, Parameter.
## Classes
- JavaScript
  - before ES2015
    - Prototypes
    - Classes would be define has a function
```javascript
function Person(first,last,age,eyecolor){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
let myFather = new Person("John","Doe",50,"brown);
let myMother = new Person("Lana","Zoe",48,"brown);
```
  - functions in Javascript are objects
  - after ES2015
    - Classes was introduce in JavaScript
```javascript
class Person {
  constructor(first,last,age,eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
}
let myFather = new Person("John","Doe",50,"brown);
let myMother = new Person("Lana","Zoe",48,"brown);
```
### Class Declaration
- creating a `class`, you can declare it by using the `class` keyword
```javascript
class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}
```
- class declaration above includes three parts (within the curly {} braces)
  - Two properties — `height` and `weight` — are each declared as a number.
  - A constructor
  - A method named `perimeter` that multiplies the `height` and `width` properties by 2 and then adds them together.
### Class Expression
- Another way to create a `class` is by creating a `class expression`. Creating this expression can be done in one of two ways: named or unnamed. When creating a `class expression`, it looks very similar to creating a variable, as you need to use the `const` or `let` keywords.
#### Unnamed Class Example
```javascript
const Rectangle = class {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};
```
- instead of declaring the `class`, you are creating a `variable` and setting it to the `class` itself. The reason it is `unnamed`, is because the `class` doesn't have a name; only the `variable` does.
#### Named Class Example
```javascript
const Rectangle = class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};
```
- the only difference between an `unnamed` and a `named` class expression, is the `class` name located after the class keyword.
### Class [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- unique `method` that is used for creating and initializing an `object` of a `class`. When using a `constructor` within a `class`, you may only have one `constructor` per `class`. Otherwise, you will get an error. When working with a `constructor`, you can use the `super` keyword to access constructors from Parent classes (remember you can extend a `class` from another `clas`s`).
### Hoisting
-  you can use the function before it is declared in the code. When TypeScript compiles, the declarations move to the top, so the function is declared before being called. In the case of classes, the class needs to be defined before it is used.
### Instantiation
- use the `new` keyword to create a "new" class object. To use these `classes`, `instantiate` them with the `new` keyword followed by the name of the `class`.
- `Instantiation` is the process of instantiating an object of a class. The object is also referred to as an `instance` of the class.
```javascript
class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}

const myYard = new Rectangle(24, 32);
console.log(myYard.perimeter())
```
- Above, you are declaring a new class named Rectangle. It has height and width properties, a constructor, and a method, perimeter().

- Next, you have a constant named myYard that is an instantiation of the class Rectangle by way of the new keyword. This is the point where you provide the values for the parameters of the class constructor.

- Lastly, there is a console.log with the myYard variable calling the perimeter() method.

  - Since myYard is a new instance of the Rectangle class, it can access the perimeter() method defined within.
### Interfaces Extending Interfaces
- `Interfaces` can be used to `extend` one another and this allows you to copy the members of one `interface` into another and add additional properties into the new `interface`. When extending multiple `interfaces`, they are separated by a comma (,).
### Type Interface
- `classes`, `implementing`, and, `interfaces` by using the `implements` keyword
```javascript
interface Shape {
    sides: number;
}

interface Triangle extends Shape {
    angles: number[];
}

class Equilateral implements Triangle {
    sides: number;
    angles: number[];

    constructor(numberOfSides: number, anglesNumbers: number[]){
        this.sides = numberOfSides;
        this.angles = anglesNumbers;
    }
}

const triangle = new Equilateral(3, [60, 60, 60])
console.log(triangle)
```
- don't want to create a new `class` and you want to create a new `object`? You can actually declare the object type in the interface. So, since the interface `Triangle` extends `Shape`, you can create an `object` of type `Triangle` using the `<>` syntax, 
```javascript
interface Shape {
    sides: number;
}

interface Triangle extends Shape {
    angles: number[];
}

let equilateral = <Triangle>{};
equilateral.sides = 3;
equilateral.angles = [60, 60, 60];

console.log(equilateral);
```
- only an `object` was created, not a `class`.
### Inheritance
- allows for using a class's properties, methods and information within another `class` without having to redefine what is in the existing `class`.
#### Extend
- `Inheritance` allows developers to `extend` existing `classes` and to create new ones by using the information from the existing `class`.
### Public, Private, Protected Keywords
- working with classes, you have an option to use one of three keywords for the properties and methods within the class. 
#### Public
- TypeScript properties and methods are public by default and can be accessed freely throughout the program. With this in mind, you could explicitly define each property as public if needed by using the `public` keyword.
- any one can use all of the properties and methods in a class
#### Private
- when a member of a class is marked `private`, it cannot be accessed from outside of the containing class

#### Protected
- declared `protected` it can also be accessed by deriving (extends) a class

### Generics
- is a component that can work over a variety of types rather than a single one, which allows users to consume these components and use their types. Since TypeScript is compiled, generics are used.
```typescript
function identity(argument: any): any {
    return argument;
}
```
- `any` type is technically `generic`, you will lose the information about the type when the value is returned from the function. 
```typescript
function identity<T>(argument: T): T {
    return argument;
}
```
- the same `identity` function from above, but now it is returning type `T`
- The function above is now a `generic function` because it works over a range of types.
  - This function works almost the same way as using type `any`, except now it won't lose the information of the `argument` that was passed in.
    - If a `number` or a `string` is passed in, it will know what type the argument is.
#### Generic Extending Interface
- create a generic that extends from an interface so that the type of the generic matches the interface.
```typescript
interface lengthProperty {
    length: number;
}

function identityCheck<T extends lengthProperty>(argument: T): T {
    console.log(argument.length);
    return argument;
}
```
- Because the `generic` function is now constrained by the `interface`, it will only work over types that have the `length` property.
### Decorators
- provide a way to add functionality to parts of an application or program and are used extensively in Angular. `Decorators`, denoted by the `@` sign, are functions that are evaluated by another function at runtime with information about the declaration. To better understand decorators, some points first need to be understood:
  - `Decorators` are called when the class is declared, not when an object is instantiated.
  - Multiple decorators can be defined in the same class; on `properties`, `methods`, or `parameters`.
- A valid decorator should be:
  - Assignable to one of the following `decorator` types: (Class | Property | Method | Parameter)
  - Return a `value` that is assignable to the `decorated` value. 
- When implementing decorators, there are different parameters needed based on the `type` of decorator. The prominent three: `Class`, `Property`, and `Method` decorators.
#### Method Decorators
- requires the three following parameters:
  - target: The prototype `(Object)` of the class.
  - propertyKey: The name `(string)` of the method being decorated.
  - descriptor: A descriptor `(PropertyDescriptor)` of the given property if it exists on the object, otherwise undefined.
```typescript
function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor): any {
    let oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${propertyKey} with `, target);
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);

        console.log(`Function is executed`);
        return value + '; Decorators are crazy!';
    };

    return descriptor;
}
```
##### Using a Method Decorator
- a class along with a new instance of that class named run
```typescript
class MyClass {
    exampleFunction(arg1: string, arg2: string) {
        console.log(`Arguments Received: ${arg1} and ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}
const run = new MyClass();

console.log(run.exampleFunction('Hello', 'World'));
```
  - Both console.log statements are run: the one within the class, and the one outside of the class.

- add `@methodDecorator` to the `class`, as shown below, this will add the decorator created earlier changing the output slightly. Make sure your file looks like the following. 
```typescript
function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor): any {
    // store the original class method in `oldValue`
    let oldValue = descriptor.value;

    // re-define the class method
    descriptor.value = function() {
        // when the class method is called, log the fact to the console
        console.log(`Calling ${propertyKey} with `, target);

        // call the original class method passing in the caller's two arguments
        // -- this point is where the console logging in the class
        // method will occur
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);

        // log that the function was executed and return the result with some added text
        console.log(`Function is executed`);
        return value + '; Decorators are crazy!';
    };

    return descriptor;
}

class MyClass {
    //add the below decorator expression
    @methodDecorator
    exampleFunction(arg1: string, arg2: string) {
        // log the arguments and return their concatenation
        console.log(`Arguments Received: ${arg1} and ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}
const run = new MyClass();
console.log(run.exampleFunction('Hello', 'World'));
```
- Notice that the output now reflects the console logging inside of the class as well as inside of the decorator.
- annotated a function with a method decorator, and now the console.log output has added text
#### Property and Class Decorators
- `Property Decorators`: Property decorators are similar to method decorators, but they only require two parameters:
  - `target`: The prototype of the class.
  - `propertyKey`: The name (string) of the method being decorated
- `Class Decorators`: Class decorators allow you to modify the constructor of a class by either changing or adding new properties and methods to the class in question. Class decorators only require one parameter:
  - `target`: The prototype of the `class`.
- Declaration of Decorators
```typescript
// 1. Class decorator
function InspectClass(target: any) {
    console.log(`Class in use: ${target.name}`);
}

// 2a. Property decorator
function InspectProperty(target: any, propertyKey: string): void {
    let val = target[propertyKey];

    // 2b. this runs when a property is read
    let getter = function() {
        console.log(`Get: ${propertyKey} => ${val}`);
        return val;
    };

    // this runs when a property's value is set
    let setter = function(newValue: any) {
        console.log(`Set: ${propertyKey} => ${newValue}`);
        val = newValue;
    };

    // 2c. below, the `delete` removes the property from the class
    // then with your Object.defineProperty() function, you are
    // re-adding the property with a new getter and setter.
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
```
- Implementation of Decorators:
```typescript
// 3a. `Automobile` class uses `InspectClass` class decorator
@InspectClass
class Automobile {
    // 3b. the `make` property uses the `InspectProperty` property decorator
    @InspectProperty
    public make: string;
    // the other two properties are not using a decorator
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        // 3c. when an instance of `Automobile` is created, its properties
        // will get set, so the decorator for the `make` property
        // will result in information getting logged to the console
        this.make = make;
        // the next two properties do not have decorators
        this.model = model;
        this.year = year;
    }

    // 3d. this method accesses the properties, of which `make` is decorated
    // so when `getInfo()` is called, it will result in information
    // getting logged to the console about `make`
    getInfo(): string {
        return `Make: ${this.make}  Model: ${this.model}  Year: ${this.year}`
    }
}
```
