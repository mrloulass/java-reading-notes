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
