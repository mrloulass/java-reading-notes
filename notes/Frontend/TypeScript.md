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
