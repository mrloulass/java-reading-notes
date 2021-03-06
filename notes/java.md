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

### StringBuilder [Documentation](https://docs.oracle.com/javase/tutorial/java/data/buffers.html)
- tool that makes string operations more efficient. One way to concatenate two strings is to use the addition symbol as shown in the code example below.
- contains the `.append()` method which appends data sequentially.
```java
public static void main(String[] args) {
    String cities[] = {"Tokyo", "Delhi", "Shanghai", "Mexico City", "S??o Paulo"};
    StringBuilder sb = new StringBuilder();
    // loop through all of the cities
    for(int i = 0; i < cities.length; i++){
        // concatenate the city names
        sb.append(cities[i]);
        // concatenate a comma between each city name for increased readability
        sb.append(", ");
    }
    System.out.println(sb);
}
```
  - Output:
  - `Tokyo, Delhi, Shanghai, Mexico City, S??o Paulo,`
- The default constructor for StringBuilder (i.e. new StringBuilder()) will specify enough space for 16 characters by default. If the number of spaces is known before instantiating the StringBuilder object, it is a good idea to use the overloaded constructor which will define the initial capacity.
  - `StringBuilder(CharSequence cs)`: The constructor will initialize the StringBuilder object with the passed in CharSequence (i.e., String-like) and pad on an extra 16 spaces for more elements.
  - `StringBuilder(String s)`: The StringBuilder object is initialized with the passed-in string with 16 extra spaces for elements appended to the end.
  - `StringBuilder(int initialCapacity)`: The default size for storing characters is 16. By passing in an integer, that value will be used to declare enough space in the computer's memory to store some number of spaces.

- Primitive data types (e.g., integers, booleans, etc.) that are appended to a StringBuilder object are converted to a String type automatically.  

### Date and Time Classes
- to store and manipulate dates and times.
#### LocalDate
- stores only date information without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.
#### LocalTime
- stores only time information without a time-zone in the ISO-8601 calendar system, such as 10:15:30.
#### LocalDateTime
- stores both date and time information without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30. 

## Collections and Generics
- Collections Framework: The set of interfaces and classes that constitute lists, sets, queues and maps.
- Hashing: Conversion of an object into a fixed length hexadecimal integer.
- Hash Function: A method that converts an object into a hash-code.
- Set: A collection of unique things
- List: An index based collection
- Queue: A collection designed to hold elements in some order prior to processing.
- Map: A collection that maps values to unique keys.
- Nested Class: A static class declared inside another class.
- Type-Safe: A property of Java that prevents you from putting the wrong object into a collection.
- Generics: A syntax to make collections type-safe.

## Design Patterns
- the best practices used by experienced object-oriented software developers.
- are solutions to general problems that software developers faced during software development.
- these solutions were obtained by trial and error by numerous software developers over quite a substantial period of time. 

- Design patterns have two purposes in software development:
  1. Common Platform for Developers: Design patterns provide a standard terminology and are specific to particular scenarios.
  2. Best Practices: Design patterns have evolved over a long period of time and they provide the best solutions to certain problems faced during software development. 

- There are a total of 23 design patterns, which fall into three distinct categories of Creational, Structural, and Behavioral. Let???s review these three categories.

### Three distinct categories

#### Creational
- These design patterns provide a way to create objects while hiding the creation logic, rather than instantiating objects directly using new operators. This gives the program more flexibility in deciding which objects need to be created for a given use case. Five well-known design patterns that are part of creational patterns are the:
  1. Factory method pattern, which allows a class to defer instantiation to subclasses. 

  2. Abstract factory pattern, which provides an interface for creating related or dependent objects without specifying the objects' concrete classes.

  3. Builder pattern, which separates the construction of a complex object from its representation so that the same construction process can create different representations.

  4. Prototype pattern, which specifies the kind of object to create using a prototypical instance and creates new objects by cloning this prototype.

  5. Singleton pattern, which ensures that a class only has one instance and provides a global point of access to it.

#### Structural
- These design patterns concern class and object composition. Concept of inheritance is used to compose interfaces and define ways to compose objects to obtain new functionalities. Examples of structural patterns include:
  1. Adapter pattern, which ???adapts??? one interface for a class into one that a client expects.

  2. Adapter pipeline, which uses multiple adapters for debugging purposes.

  3. Retrofit interface pattern, an adapter used as a new interface for multiple classes at the same time.

  4. Aggregate pattern, a version of the Composite pattern with methods for aggregation of children.

  5. Bridge pattern, which decouples an abstraction from its implementation so that the two can vary independently.

  6. Tombstone, an intermediate ???lookup??? object that contains the real location of an object.

  7. Composite pattern, a tree structure of objects where every object has the same interface. We will review this type of pattern in the course.

  8. Decorator pattern, which adds additional functionality to an object at runtime where subclassing would result in an exponential rise of new classes.

  9. Extensibility pattern, aka framework, which hides complex code behind a simple interface.

  10. Facade pattern, which creates a simplified interface of an existing interface to ease usage for common tasks.

  11. Flyweight pattern, a large quantity of objects share a common properties object to save space.

  12. Marker pattern, an empty interface to associate metadata with a class.

  13. Pipes and filters, a chain of processes where the output of each process is the input of the next.

  14. Opaque pointer, a pointer to an undeclared or private type to hide implementation details.

  15. Proxy pattern, a class functioning as an interface to another thing.

#### Behavioral
- These design patterns are specifically concerned with communication between objects. Examples of this category of pattern include:

  1. Blackboard design pattern, which provides a computational framework for the design and implementation of systems that integrate large and diverse specialized modules and implement complex, non-deterministic control strategies.

  2. Chain of responsibility pattern, in which command objects are handled or passed on to other objects by logic-containing processing objects,

  3. Command pattern, in which command objects encapsulate an action and its parameters.

  4. ???Externalize the stack???, which turns a recursive function into an iterative one that uses a stack.

  5. Interpreter pattern, which implements a specialized computer language to rapidly solve a specific set of problems.

  6. Iterator pattern, which is used to access the elements of an aggregate object sequentially without exposing its underlying representation. We???ll review this pattern later in the course.

  7. Mediator pattern, which provides a unified interface to a set of interfaces in a subsystem.

  8. Memento pattern, which provides the ability to restore an object to its previous state (rollback).

  9. Null object pattern, which is designed to act as a default value of an object.

  10. Observer pattern, aka Publish/Subscribe or Event Listener, in which objects register to observe an event that may be raised by another object.

  11. Weak reference pattern, which decouple an observer from an observable.

  12. Protocol stack, communications that are handled by multiple layers, which form an encapsulation hierarchy.

  13. Scheduled-task pattern, in which a task is scheduled to be performed at a particular interval or clock time (used in real-time computing).

  14. Single-serving visitor pattern, which optimizes the implementation of a visitor that is allocated, used only once, and then deleted.

  15. Specification pattern, which is a recombinable business logic in a Boolean fashion.

  16. State pattern, which is a clean way for an object to partially change its type at runtime.

  17. Strategy pattern, in which algorithms can be selected on the fly, using composition.

  18. Template method pattern, which describes the program skeleton of a program; algorithms can be selected on the fly, using inheritance.

  19. Visitor pattern, which is a way to separate an algorithm from an object.
