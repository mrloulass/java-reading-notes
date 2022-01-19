# Study guides

## Rules for Writing Interfaces
- Interface methods are implicitly public and abstract
- Interface methods can never be final
- Interface variables must be public, static and final (constants)
- An interface can extend another interface
- An interface cannot implement another interface or class
- An interface must be declared with the keyword interface
- Interfaces can be public or default access level
- Interfaces are abstract whether you declare it or not

## Rules for Return Types
1. arrays are valid return types
2. null is a valid return value only for reference variables not primitives
3. Implicit upcasting in the return statement is allowed
4. Covariant return is a subtype of the type returned by the overridden method (as of Java 5)

## Rules for Overloading Methods (study)
1. Overloaded methods MUST change the parameters
2. Overloaded methods can change the return type
3. Overloaded methods can change the access modifier

## Exceptions
- The finally block code will always run regardless of try/catch block of code
  - the only time to use finally when you use a database or I/O file
    - use a close() to close data stream

## Abstract vs Interface

### Interface 
  - does not need  `abstract` key word, It is assume to be abstract
  - the key word `implements` the sub class to the main class
  - you can implement has many class interface has you want
  - every field in an interface is static, You need to give a value to your variables
  - is great for having unrelated items do the same thing
### Abstract
  - need the `abstract` key word
  - the key word `extends` the sub class to the main class
  - can only extend one class
  - is great for items that are related and received different type of value data

## Design Patterns
- Creational Pattern: How objects can be created while the object creation is hidden.
- Structural Pattern: How classes and objects are composed.
- Behavioral Pattern: The communication between objects.
