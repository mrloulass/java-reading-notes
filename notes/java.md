# Core Java

## Introduction

### Definitions
- **Virtual Machine:** a software program that mimics hardware
- **JVM:** Java Virtual Machine lets you run the code you write on any platform.
- **JRE:** Java Runtime Environment provides the components needed to run any Java application. It includes the Java Virtual Machine.
- **JDK:** Java Development Kit, a library used in all Java software development. Every JDK includes a corresponding JRE with its virtual machine.
- **SDK:** Software Development Kit, a library for writing software. The JDK and the Android Development Kit are examples of an SDK.
- **IDE:** Integrated Development Environment, a tool like Eclipse or Netbeans to aid in software development. It lets you write code and test it using the JVM.

## Getting Started with Java

### Definitions
- **Source code:** the code that you write in the Java Language.
- **Compiler:** a software program that turns the source code you write into Java bytecode.
- **bytecode:** the code that the compiler creates for the JVM to read on the target computer.
- **variable:** a container that you specify for holding a particular type of data.
- **keyword:** a reserved word in Java that means something specific to the compiler.
- **literal:** a source code representation of a value, for example a number or text.
- **method signature:** the declaration part of a method that specifies its name, any input and output variables and other important information about the method the compiler needs to know.

### How Code is Structured in Java
- Projects contain packages
- Packages contain source code files
- Source code files contain classes
- Classes contain methods
- Methods contain statements
- Statements contain keywords, literal values, operators and identifiers

## It Starts With Main

- JRE calls on the main method to run your code.
``` java
public static void main(String[] args){  
  //your code goes here
}
``` 
- Main Method
  - `public` it allows the JRE to call this method or any class
  - `private` allows this class to run the code only.
  - `static ` allows a class to be called without a instance of that class.
  - `void` it does not need to returns a value.
  - `(String[] args)` array of string of args


### Definitions
- method: A Java method is a collection of statements that are grouped together to perform an operation.
- modifier: a keyword that alters some aspect of a class, method or variable
- scope: the level of visibility of a class, method or variable.
- public: modifier specifying that the scope of a class, method or variable is that it is available to anyone.
- static: specifying that a class does not need to be created in memory (instantiated) before using.
- void: the return type declaration that means a method does not return some value.
- camel case: each word in an identifier is capitalized

## Classes and Objects

### Definitions
- Object: the encapsulation of state and behavior
- Class: the blueprint for an object
- State: the variables used inside of a class
- Behavior: the methods used in the class that can affect state
- Instantiation: The creation of a new object in memory during runtime (while you are running your program).
- Encapsulation: The mechanism of wrapping data (i.e., variables) and behavior (methods) together as a single object.
- Scope: The part of the code where the variable is accessible.
- Constructors: Special methods used by the Java Virtual Machine to initialize a class.
- Constructor Overloading: The use of multiple constructors, each varying in the number of parameters.
- Inheritance: Code defined in one class or interface can be reused by other classes.
- Abstraction: Focus on the interaction between classes and not the implementation details. We know how to use a cell phone, but we don't need to know how it works.
- Interfaces: An interface is like a 100% abstract class. It has no implementation details in it at all.
- Encapsulation: information hiding to improve maintainability, flexibility and extensibility.
- Polymorphism: Making the same code be able to do different things in different contexts.
- Abstract Classes: A class that must be subclassed in order to be used.
- Abstract Methods: A method declaration that needs to be implemented by an overriding method.
- Overriding: Changing the behavior of a subclass by creating a method with the same signature as a method in a parent class.
- Overloading: Using the same method name but with different arguments to make your code easier to use.
- Access Control: Specifies what can and cannot be reached from outside of the class. More information can be found on the Oracle Java Documentation page: Controlling Access to Members of a Class

## Method

## Java Built-in Classes

### Wrapper Classes
- Wrappers allow you to translate between primitive data types and a corresponding class. Unlike primitives, wrapper classes can have null values for which you can easily test.

### ArrayList
- they also share some common features with Arrays:
  1. Both are index based with the index starting at 0
  2. When you create them, you must specify what type of data they hold
  3. They both can handle duplicate values
  4. They can't hold primitives. Instead, you have to use the corresponding wrapper class.
    - `List<Double> listOfPayments = new ArrayList<>();`
  5.  enhanced for loop (or for-each loop) works just as easily with ArrayLists as with arrays:

- ArrayLists implement two important interfaces:
  - Collection 
  - List

- ArrayList Methods [See the Java API for Java 17 for a complete list.](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html)
  - `add()`: add items to the ArrayList
    - `add(E e)`: adds element e to the end of the list.
    - `add(int idx, E e)`: adds element e to the list at index idx. All following elements move up one index each.
  - `toString()`: method has been overridden to print out the entire list:
    - `System.out.println(hoard.toString());`
  - `clear()` removes all elements from the list.
  - `get(int idx)`: returns the element at location idx.
  - `indexOf(Object o)`: returns the location of o if it exists in the list, otherwise returns -1.
  - `remove(int idx)`: removes the element at location idx.
  - `set(int idx, E e)`: replaces the element at location idx with new element e.
  - `size()`: returns the number of elements in the list.
  
- Finally, it is possible to convert an array to an ArrayList and vice versa. 
  - To convert an array to an ArrayList, you need the helper class `Arrays`. This class has a number of static methods to help you manipulate arrays.
    - `List<String> listFromArray = Arrays.asList(stringArray)`
  - To convert from an ArrayList to an array, use the List method `toArray`:
    1. need to get the size of the array set before you can fill it.
    2. takes as its input, the ArrayList you are converting, then reassigns the reference variable to the resulting array.
    - `String[] stringArray = new String[stringList.size()]`
    - `stringArray = stringList.toArray(stringArray)`

### StringBuilder
