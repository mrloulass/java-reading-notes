# Backend Foundations with Java
## Server
### Terms
- `POJO` (Plain Old Java Object)	A simple class with getters and setters on the variables inside of itself. This type of class does not extend or implement from other classes.
- `Server`	A computer that responds to requests over the web.
- `Servlet`	A Java program which runs on the server.
- `Web Container` (Servlet Container)	The component of a server which interacts with Java Servlets.

### Apache Tomcat Server
- Apache Tomcat is a free and open-source implementation of the Jakarta Servlet, Jakarta Expression Language, and WebSocket technologies. Tomcat provides a "pure Java" HTTP web server environment in which Java code can run
- **web server** is to listen to requests from the outside world and respond back as instructed by the programmer
- **web container** (or servlet container) is the component of a web server which interacts with Java code. In this context, the Java code that runs on the server is referred to as a Java servlet.

### Spring Framework
- provides Java developers with the tools necessary to build applications quickly and securely.

### Simple Backend Application
- Send a request to the server for a greeting.
- The server can then generate a string with the greeting and return it to the user.
- If there is no name sent in the initial request, then the greeting will be generic.

#### MVC architecture
- Model-View-Controller, is a design pattern where the source code of an application is separated into the three types

#### model
- represents the data in an application. An example of this would be the Greeting class in the greeting project.
#### view
- represents what the user will see when it has been populated with data from the Model.
#### controller
- takes action and responds to incoming requests by executing the necessary code. 
- the controller is responsible for taking the data and creating updating the view. 
- An example of this would be the GreetingController class in the greeting project.

## HTTP and Servlets
### Terms
- `Annotation`	A form of metadata that can be added to Java source code.
- `HTTP` (Hypertext Transfer Protocol)	An application layer protocol for communication between systems using hypermedia documents such as HTML
- `Stateless Protocol`	A protocol in which information about a session between a client and server is not stored on the server.
- `CRUD`	An acronym for Create, Read, Update, and Delete. It describes the basic functionality for storing and persisting data.
### HTTP
