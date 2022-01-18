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
