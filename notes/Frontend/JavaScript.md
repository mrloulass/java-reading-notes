# JavaScript

## Terms

- `JavaScript` A programming language not to be confused with Java.
- `script` Used for inline JavaScript or it is used to link an external JS file by using the script src attribute.
- `Comments` Used to make code inaccessible to the browser and is designated in JS with two slashes //.
- `Data Types` Defines what type of data you are working with. Some include a string, number, and boolean.
- `Variables` Used to store the data you are working with.
- `If Statements` if statements allow you to only execute code when certain conditions are met. Can be paired with else and else if statements.
- `Comparison Operator` Used to compare data types. Includes =, ==, ===, !==, >, and more.

## Data Types

- There are three main types of data: String, Number, and Boolean.
  - A **String** is a group of words, like a sentence. When writing a String in JavaScript, you need to wrap the group of words you are using within quotes.
  - A **Number** is just that, a number. Unlike a String, a Number does not need to be wrapped in anything. If you write out a number, like 24, it will be read as a number automatically.
  - A **Boolean** is a logical entity and can only have two values: true and false. A Boolean is like a Number in that it does not need to be wrapped in quotes. If you set something to true without quotes, the value will be interpreted as Boolean.

### Variables

- as containers that hold values which are used throughout the rest of the JavaScript code. You define variables using the keyword `var` and give the variable a name that can be reused.
  - `var`
  - `let`
  - `const`
- name the variable whatever you would like as long as it starts with a letter. A variable name is case-sensitive and is made up of only letters, numbers, and underscores.

### Strings

- A string is the literal representation of a string of characters. Strings are defined by single or double quotes.("", '')
- To merge two strings together you use the (+) symbol. This will combine the two strings together

```javascript
var name = "Jennifer";
var age = "24";

var join = name + age; //the value of join will be "Jennifer24"
```

### Numbers

- A number variable will store a number and allows you to perform math functions. Many math operations including addition, subtraction, multiplication, and division can be done with number variables. You can use the same characters for mathematical operations in JavaScript as you would use for regular mathematical expressions.

```javascript
var a = 2;
var b = 3;

var c = a + b; //c = 5
var d = a - b; //d = -1
var e = a * b; //e = 6
var f = e / a; //f = 3
```

### Booleans

- Booleans are binary types. They have one of two values: true or false.

```javascript
var isTrue = false;
// the value of isTrue is false
```

- Booleans are used to give clear and concise answers to what you are trying to figure out.

## If Statements

- if statements allow you to execute code only when certain conditions are met.
- three main parts to an if statement:
  - The `if` keyword.
  - The conditions that need to be met in order for the statement to be true. Those conditions are located within parentheses.
  - The code to be executed if the conditions are met. This code block is usually located within curly brackets immediately after the condition.

```javascript
if (yellow) {
  alert("yay!");
}
```

- The JavaScript engine checks to see if the conditions within the parenthesis are met, and if they are, it then executes the code block.

```javascript
var isCute = true;
if (isCute) {
  alert("That puppy is cute");
}
```

### Comparing vs. Setting

- two versions of the "Equals" comparison operator.

1. the double equal sign (==). This operator will compare the values on either side of the operator to see if they are equal. If they are of two different data types then JavaScript will attempt to convert one of the values to the other data type and compare the values that way.


    - `5 == "5"; //This will return True.`

2. second form of the "Equals" comparison operator is referred to as the "Identical" operator. The "Identical" operator is three conjunctive equal signs (===). This version of the equals comparison operator will check for both value and data type.


    - `5 === "5"; //This will return False.`

- the less than (<), greater than (>), less than or equal to (<=), and the greater than or equal to (>=).

### If-Else Statements

- `if` statement you can add an else statement to provide code you wish to perform if the condition within the `if` statement is NOT true. The `else` statement is always tied to an `if` statement as it cannot stand alone.

```javascript
var puppy = "Nermal";

if (puppy === "Spot") {
  alert("Hi Spot! You are so cute!");
} else {
  alert("That's not Spot. Is that a cat??");
}
```

### Else-If Statements

- `else-if` condition will be checked when the first `if` statement is not true but before going to the else `code`. If the condition within the `else-if` statement is true, then the code block proceeding the condition will be executed instead. This allows multiple pathways your code could follow based on different conditions.

```javascript
var puppy = "Lassie";

if (puppy === "Spot") {
  alert("Hi Spot! You are so cute!");
} else if (puppy === "Lassie") {
  alert("That's not Spot, that's Lassie!!");
} else {
  alert("That's not Spot. Is that a cat??");
}
```

### Multiple If Statements

- sometimes be a case where you need multiple if statements instead of else if statements.

```javascript
var puppy = "Spot";
var cat = "Mittens";

if (puppy === "Spot") {
  alert("Hi Spot! You are so cute!");
}
if (cat === "Mittens") {
  alert("Meow to you, Mittens!");
}
```

### [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

- (=) Used to set data
- (==) Converts the operands to the same type before making the comparison
- (===) Used to compare data and check to see if it is true, and is only true if the operands are of the same type and the contents match
- (!==) Used to compare data and check to see if it is NOT true
- (>) Used to check if the data is greater than
- (>=) Used to check if the data is greater than or equal to
- (<) Used to check if the data is less than
- (<=) Used to check if the data is less than or equal to

## Terms

- `Array` Used to store multiple values within one variable. Arrays may contain multiple values, they can also be empty or contain a single value.
  `.length` Will return how many values are within the array.
  `.sort()` Will sort the array and return another array. When working with strings within an array, it will sort the string values in alphabetical order.
  `.push()` Will add a new value to the array.
  `.pop()` It will remove the last element from the array.
  `Objects` May contain many values.
  `Loops` A series of operations used until a certain condition is met. You can run the same code over and over again, each time with a different value.

## Arrays

- used to store a collection of the same type of items.
- are used to store multiple values within one variable. When defining an array, the values are placed within square brackets ([]).
  - create arrays that contain different data types.
  - contains a number, string, boolean, and even another array!
  - `var myArray = [5, "Hello", true, [1, "Bye", false]];`
    - Arrays that exist within arrays are referred to as "nested arrays".
  - they can also be empty or contain just a single value:
    - `var emptyArray = [];`
    - `var oneItemArray = ["One"];`

### Array Properties

- Properties give us information about the data a variable contains. The syntax for accessing a property is to first give the name of the variable, then use a period to indicate you are accessing a property of that variable. Then finally give the name of the property you want the value of. As an example, one useful property on an array is the `.length` property.
- `.length` property will return how many values are within the array.

```javascript
var colors = ["yellow", "blue", "red"];
colors.length; //the length of colors is 3
```

- The syntax for accessing the `.length` property follows the pattern of `variableName`.property. You specify the name of the variable first, then use a period and the name of the property. In this case we access the `.length` property. So altogether the code `numbers.length` will return the value of 3.
- This use of the period between variable names and their properties is known as "dot notation". Dot notation uses a period to indicate you are trying to access information one layer down from the parent item, or information about that parent item. It is used in many programming languages such as C, PHP, Java, and Python. Dot notation actually has origins in mathematics as you've no doubt used it to access tenths, hundredths, or even thousandths of a whole number. It is useful to think of properties in this way. You are accessing lower level details about a larger parent thing, just as using `.1` indicates one level lower than a whole number.

### Array Methods

- designed to perform specific behavior on a variable.

#### .sort()

- The `.sort()` method will sort the array and return another array. When working with strings within an array, it will sort the string values in alphabetical order.

```javascript
var colors = ["yellow", "blue", "red"];
colors.sort(); //the new array will be ["blue", "red", "yellow"]
var numbers = ["7", "2", "9"];
numbers.sort(); //the new array will be ["2", "7", "9"]
```

- use of parenthesis helps us as developers recognize that we are telling the code to perform an action, but also JavaScript interprets parenthesis in this same way. If we did not use the parenthesis, we would be asking for the value of that method rather than telling it to execute the method.

#### .push()

- The .push() method will add a new value to the array and push the new value to the end of the array.

```javascript
var colors = ["yellow", "blue", "red"];
colors.push("purple"); //the new array will be ["yellow", "blue", "red", "purple"]
var numbers = ["7", "2", "9"];
numbers.push("5"); //the new array will be ["7", "2", "9", "5"]
```

#### .pop()

- The .pop() will remove the last element from the array.

```javascript
var colors = ["yellow", "blue", "red"];
colors.pop(); //the new array will be ["yellow", "blue"];
var numbers = ["7", "2", "9"];
numbers.pop(); //the new array will be ["7", "2"]
```

## Objects

- you define what the `properties` are and set their corresponding `values`. You can think of a JavaScript object as the same as a real-life object
- The vehicle has different properties such as the make, model, weight, color, number of doors and so on

```javascript
var vehicle = {
  make: "Toyota",
  model: "Tacoma",
  weightInPounds: 3980,
  color: "Red",
  numberOfDoors: 4,
  fourWheelDrive: true,
};
```

- The syntax will be `property:value` with a (,)comma separating each `property` and `value pair`.
- When using objects, you can access individual properties by using the following syntax: `objectName.propertyName`. So, if you wanted to see just the weight of the vehicle, then you would do so with `vehicle.weightInPounds`.

## Arrays vs. Objects

- Arrays: are typically used to store a collection of the same type of items.
  - Arrays are ordered lists, and each item of an array has a numerical position (referred to as an index): The first item has an index of 0, the second item in the array has an index of 1, and so on
- Objects: are typically used to store multiple values for a single item.
  - If you needed to store multiple vehicle objects, each with their own set of properties, you would use an array.
- Objects as Arrays with each value having a named index instead of an numerical index.

## Loops

- perform a certain task multiple times until some condition is met.

### while Loop

- start with a variable that will contain the number of times the loop has been ran.
- use the while statement to check if a condition is true.
- provide code within the curly braces that causes the condition to eventually become false.

```javascript
var i = 0;
while (i < 4) {
  //commands to be repeated go inside the body marked by opening and closing curly braces
  console.log("The value of i is: " + i);
  i++;
}
```

### for Loop

- consists of the keyword `for`, followed by three clauses within parentheses
- `(var i = 0; i < 4; i++)`,
- then opening and closing curly braces to make up the body {}.

```javascript
for (var i = 0; i < 4; i++) {
  //commands to be repeated go inside the body marked by opening and closing curly braces
}
```

1. The first clause is where variables are initialized. These variables exist only within the loop, and are not available outside of the loop.
2. The next section, i < 4, is the condition being checked to determine if the loop will perform another iteration, or in other words, loop again. If the value of i is less than 4, then the expression is correct and the loop will perform another iteration.
3. The next section, i < 4, is the condition being checked to determine if the loop will perform another iteration, or in other words, loop again. If the value of i is less than 4, then the expression is correct and the loop will perform another iteration.

### [Looping Through An Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- You will first need to define what array you are looping through.
- `i < myArray.length` as the condition to determine if the code should loop again. Since the .length returns the number of items in the array, this limits the number of times we iterate through the array to just the number of items the array contains.

```javascript
var myArray = [3, 5, 9, 11, 18];
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] >= 10) {
    console.log("The value " + myArray[i] + " is double digits!");
  } else {
    console.log("The value " + myArray[i] + " is single digits!");
  }
}
```

## Terms

- `Functions` Functions are a block of code that serve the purpose of performing a specific task.
- `Scope` Scope is how and where you can access different variables within the code. The two types of scope are Global and Local.
- `DOM` The DOM (Document Object Model) is a programming interface for an HTML or XML document. It provides a visual representation of the HTML elements you placed in your document, as well as a way to access those elements through various functionalities you can provide.
- `HTML Events` HTML Events are things that can happen to your HTML elements you have already created. Examples could be the page loading, a button being clicked, or a user inputting some data. When the events happen, you may want to do something with those events. To handle an event, you can create an event listener. This will listen for the specified action and then perform function that you make.

## Functions

- are a block of code that serves the purpose of performing a specific task. When using functions, you have to invoke them (also referred to as "calling" them). However, before you can invoke them, you need to define them.
  - To define a function you first need to use the `function` keyword followed by the name you wish to give the function.
  - Next comes a set of parenthesis (()) that have `parameters` (if any) defined.
    - Parameters are temporary variables for use within the function code
    - a parameter holds information relevant to the code within the function. Once the code inside the function is done executing, the parameters and their values are discarded.
  - Finally, in order to complete the definition of our function, we use curly brackets {} to state what code should be ran when the function is called.
- Functions are like the formula in this case. You are defining the task you want to perform without knowing the specifics.
- No two functions can have the same name and number of parameters if they are in the same scope

```javascript
function name(parameter, parameter) {
  //functionality will go here
}
```

- a function name, it can include letters, digits, underscores, and dollar signs. It is recommended to have the name of the function relate to what the function is doing. It is also the best practice to use a verb to indicate action. Names like calculateValue(), sendEmail(), or showImage() indicate some sort of behavior the function is performing.
- Code written inside a function is not executed until the function is called.

### Invoking Functions

- also referred to as calling a function
- Once a function is defined, you can call that function from other places in your application.
- You can also call the same function from within an HTML page. Configuring this ability is done by using unique attributes on HTML elements that link an event to a JavaScript function.
- `onclick` is commonly used when you need a `button` to perform a function when you click it.

`<button onclick="addNumbers()">Add!</button>;`
```javascript
function addNumbers() {
  alert(2 + 3);
}
```

- the user clicks the button, an alert will show up that says "5".

## Scope

- The Scope is how and where you can access different variables or functions within the code.
- In JavaScript, there are several scopes. the two primary scopes are:
  - Global: Not declaring a variable within a function makes it accessible anywhere on that page
  - Local: When declaring a variable within a function, it will only be accessible within that particular function.

## Document Object Model (DOM)
- is a programming interface for an HTML or XML document. It provides a visual representation of the HTML elements you placed in your document, as well as a way to access those elements through various functionalities provided.
- When a page loads in the browser, the HTML is parsed, and the DOM is built based off of the tags and elements specified in the HTML.
- This process is how you get the tree structure
- The DOM represents a hierarchy of the elements on the page. You can manipulate the DOM to modify the layout and ordering of the page without reloading the entire page.
- **The DOM is used to access, change, add and delete HTML elements**
### Retrieving DOM Elements
- There are three main ways to access HTML elements using the DOM:
  - document.getElementById();
  - document.getElementsByTagName();
  - document.getElementsByClassName();
### document.getElementById();
- This method is the most commonly used DOM method. It will pull in the information of an HTML element with a certain `id`
  - In HTML a "button" element with an "id" attribute
    - `<button id="submitButton">Submit!</button>`
  - In the JavaScript the variable "myButton" is accessing the button element above by its "id"
    - `var myButton = document.getElementById("submitButton");`
### document.getElementsByTagName();
- pull in the information from an HTML elements by tag name
### document.getElementsByClassName();
- pull in the information from an HTML elements by class name
### Retrieving Input Values
- working with forms, the user will be inputting information within the various input elements. To capture this value, you would simply append `.value`
```html
<input id="firstName" type="text"/>
<input id="lastName" type="text"/>
<input id="email" type="text"/>
<button onclick="getValues()">Get Values</button>
```
```javascript
function getValues() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
}
```
#### parseInt()
- The value property on an input will always be a string data type.
- will need to convert that string to a number
- set of pre-defined functions in JavaScript that convert strings to numbers
```html
<form>
    <input id="age"/>
</form>
```
```javascript
var age = parseInt(document.getElementById('age').value);
```
- If you don't use `parseInt()`, JavaScript will read the age as a string. So if the user inputs 30, it will be read by JavaScript as "30". By using `parseInt()`, you are converting the string of the age to a number. So it won't be "30" but it will be 30
### DOM innerHTML Property
- `.innerHTML` is a DOM property that can be used in two different ways
  1. to retrieve HTML text that currently exists on the page.
  2.  to change the text inside of the element using JavaScript.
```html
<p id="paragraph">I am a paragraph</p>
```
```javascript
var text = document.getElementById("paragraph").innerHTML;

document.getElementById("paragraph").innerHTML = text + " and I am awesome!";
```
- output: 
  - `I am a paragraph and I am awesome!`
1. pull the info of the `paragraph` element with an id of paragraph and set it to a variable of `text`
2. the second time you use the DOM, you are setting the element of `paragraph` to the variable text plus the string and `I am awesome!`
3. It will then replace the `paragraph` tag with the new string `"I am a paragraph and I am awesome!"`.
### HTML Events
- are things that can happen to the HTML elements you have already created. Examples could be the page loading, a button being clicked, or a user inputting some data. When the events happen, you may want to do something with those events.
- That is when (event handlers) come into play.
#### [Event Object](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- An object that contains information about an event is created when an event is triggered.
- `event handler` listen for events 
  - The event handler specifies which event the JavaScript is listening for and defines what function to perform when the event is triggered.
  - This function will receive the `Event Object` as a parameter.
- When HTML Elements trigger an event, the Event Object will have default behavior.
- Using the Event Object you can change what these default behaviors are
#### Handling Events
- To handle an event, you can create an event listener. This will listen for the specified action and then perform the function that you provide as the second parameter.
```javascript
myButton.addEventListener("click", function(event) {
  console.log(event.target.innerHTML);
});
```
- With this event listener, anytime this button is clicked, it will send the innerHTML of the button to the console window.
