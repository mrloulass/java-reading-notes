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
- Hypertext Transfer Protocol (HTTP), is the foundation of communication for the web.
- an application layer protocol for communication between systems using hypermedia documents (HTML),hypertext markup, images and video.
- enable communication between web browsers and web servers.
- client-server model allows the client to communicate with the server by way of requests and responses
- Once the request has been fulfilled, the line of communication between the client and server is closed.
- server does not keep any session information about the HTTP protocol communication after the connection is closed, which means future connections between client and server are always new from the perspective of the server. As a result, HTTP is classified as a `stateless protocol`
#### HTTP Request Lifecycle
- First, a connection is made between the client and the server. This connection transmits the request and response. 
- Next, the client sends an HTTP message over the HTTP connection to the server. 
- Then, the server will read the message sent from the client, perform any necessary computation, and return an HTTP message as a response. 
- Finally, the connection between the client and the server will either close or remain open for further requests.
#### HTTP Messages
- come in two flavors: requests and responses
- HTTP Request message:
```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: en
```
  - `GET` is one of many HTTP request methods.  
    - `GET` tells the server that the client only wants a resource. 
  - `HTTP/1.1` informs the server that the client is communicating using version 1.1 of the HTTP protocol. 
    - This is useful as the specification for a protocol can (and will) change and the underlying logic can change as a result. 
    - Specifying the protocol version removes ambiguity.
  - `Host: developer.mozilla.org and Accept-Language: en` are both parts of the message header. 
    - The purpose of the message header is to provide additional information to the server. 
    - The `Host` tells the server the path of the resource the client is requesting. 
    - The `Accept-Language` specifies the language the client can understand. `en` specifies the English language.
- `HTTP/1.1 200 OK`
  - `HTTP/1.1` informs the client which version of the protocol it is using.
  - `200` is a HTTP status code. This value means everything worked with no problem. 
    - if the server responded with a status code of `404`, this means the resource specified (e.g., an image) is not at the location. 
    - [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - `OK` is the status message that accompanies the HTTP status code. This is useful for providing more information to accompany the status.
#### [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- HTTP request methods, or verbs, are used to indicate the desired action to be performed.
- The four commonly used HTTP request methods include `GET`, `POST`, `PUT`, and `DELETE`
- These four request methods are often referred to as `CRUD` operations, which stands for `Create`, `Read`, `Update`, and `Delete`
  - `POST` is used to send data to the specified resource on the server. As a result, the state of the server is changed. `POST` is represented by the `C, or Create`, in `CRUD`.
  - `GET` is used to read a specified resource. This operation does not change the server as a result.
  - `PUT` is used to update a specified resource with the data being sent.
  - `DELETE` is used to delete the specified resource.
### Servlets
- a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model.
#### Servlet Example:
- `Servlets` are classes that extend the `HttpServlet` base class. One function of `Servlets` is to respond to HTTP requests in Java.
- simple servlet that responds to CRUD operations (i.e. GET, POST, PUT, DELETE)
1. Create a new "Spring Starter Project" in STS
2. "Project Dependencies" page should now be displayed
    - This is an easy way to add dependencies (i.e., libraries) to projects
    - building a servlet, the `web` dependency is needed. 
3. project is now generated and includes dependencies for web functionality.
    - `src/main/java` folder
      - `com.example.demo` package
        - `Application.java` file
4. Create a new class (name of Servlet)
5. (name of Servlet) class to  extends HttpServlet after the class name.
6. `Add generated serial version UID` to the class
    - STS will then generate the code which includes the serialVersionUID variable and assigns a value to it.
7. For the Spring framework to know which classes are servlets, a `annotation` is required. A `annotation` is simply metadata preceded with the at `(@)` symbol that is associated with a program.
    - `Application.java`, the servlet will be `annotated` with `WebServlet` and a string value which represents the path. By adding the `WebServlet` `annotation`, the server understands this to be a configuration of a servlet.
      - `@WebServlet("/Path Name")`
        - `WebServlet` `annotation` listens for requests made to `/Path Name`
8. adding the `ServletComponentScan` `annotation` in the `Application.java` class enables scanning for servlet components
9. Servlets are initialized in the `init` method defined within the (name of Servlet) class. 
    - However, the servlet can be destroyed if the server needs to manage resources. 
    - If the servlet is going to be stopped, the `destroy` method is called. This method provides the ability to perform last-minute operations such as storing important data in a database before being destroyed. 
    - This step is only needed in this example, Spring will do this step for you later on.
10. A class that inherits from `HttpServlet` is a web servlet.
    - can implement CRUD methods (i.e., GET, POST, PUT, and DELETE) to handle the various HTTP requests sent to the server. 
    - These methods include `doGet()`, `doPost()`, `doPut()`, and `doDelete()`. 
    - Each method takes in an `HttpServletRequest` object which is sent from the client to the server 
    - `HttpServletResponse` object which is sent from the server to the client.
    - [HttpServlet](https://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServlet.html)
### Changing Header Information
- In the CRUD method parameters, a request and response object is being passed
- can pass data to the server by way of headers in an HTTP request
### HTTP Status Codes
- enable developers to specify what the status of the request is.
- [HTTP status codes](https://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletResponse.html#field_summary
)
- These can be programmed on the server side using the `setStatus` method or the `sendError` method. 
- Response with status 200
  - set the status of the response to 200 (OK)
    - `response.setStatus(HttpServletResponse.SC_OK);`
- Response with status 404
  - send the error to the client (Resource Not Found)
    - `response.sendError(HttpServletResponse.SC_NOT_FOUND, "The specified resource does not exist on this server.");`

## Data Persistence (will add more notes later)
- is a means for an application to persist and retrieve information from a non-volatile storage system. JPA standardizes the important task of object-relational mapping by using annotations or XML to map objects into one or more tables of a database.

### Terms
- `DAO`	A Data Access Object is a component that contains all persistence logic which is focused on database access.
- `JDBC`	Java Database Connection is a persistence layer framework that reduces both time and errors while making data access an easier task.
- `JDNI`	Java Naming and Directory Interface is a way to connect to a database connection pool on a Java EE server.
- `Data Source`	A connection to the physical location of the actual data source.
- `Query Sanitation`	The removal of malicious data that is usually submitted through a web form.
- `JPA`	Java Persistence API is used for making connections SQL databases.

### MySQL
- is a traditional Relational Database Management System (RDMS) that uses the SQL syntax to manage table data
- a NoSQL service that can store data in JSON Collections.
- two application you will need in order to use MySQL, the `Service` and the `Client`

#### Service
- `MySQL Server` engine which manages the data in your tables and collections. 
- part of MySQL that secures, organizes, and hosts your data.

#### Client
- `MySQL Workbench` is the interface you use to connect to the `MySQL Server` and make changes. 
- can perform queries, create tables, make schemas, and change the server settings through the `MySQL Workbench`. It is helpful to think of `MySQL Workbench` as a browser to view the contents of your `MySQL Server`.

## ORM (Object-Relational Mapping) (will add more notes later)
- data can be stored with ease saving time and stress. ORM affords developers the ability to map the properties of an object to the columns in a database. 
-  developers do not need to write error-prone SQL code nor spend time trying to debug broken code. 
- ORMs provide a few sophisticated features
  1. ORMs allow for `lazy loading` which will only fetch the necessary data from the database. Lazy in this sense means grabbing the minimum amount of data to get the job done. 
  2. ORMs allow for `eager fetching` which is the opposite of lazy loading. This feature will retrieve an object and it's connected components in a single query, resulting in a larger data payload and longer database access times (i.e., slower). 
  3. Finally, there is the `cascading` feature which will update a table such that connected tables are also updated if needed. 
- These features combined with the persistence of the ORM make it a powerful tool in the world of large applications.
- The persistence framework `Hibernate`
  - which is an implementation of the `Java Persistence API` (JPA).
### Hibernate
- is an object–relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database.
  - `Session` class found in the `org.hibernate.Session` package.
    - is an interface which provides data-access functionality to the database by creating, reading, updating, or deleting data to and from the database.
  - `SessionFactory` class is responsible for opening, closing, and managing any number of `Hibernate` `Session` objects.

## RESTful Web API's 
- `REST`(Representational State Transfer) is an architectural style for using the HTTP protocols. 
- A `RESTful` web service is a way for different computers to exchange information with one another across the internet. 
- `RESTful` web services operate over the HTTP protocol most notably for the GET, POST, PUT, and DELETE methods. 

### Terms
- `Stateless`	Information about communication is retained by neither the server nor the client.
- `REST`	Representational state transfer, used in the implementation of HTTP.
- `API`	Application Programming Interface, used to expose end points that a client application can execute CRUD operations on.
- `@RestController`	A meta annotation combining `@Controller` and `@RequestBody` annotations to simplify the creation of controllers using REST.
- `@Controller`	This annotation is used to tell spring that a class will implement HTTP and needs to be configured as such.
- `@RequestMapping`	This annotation is used to assign the value of the route for a controller or method and can also be used to determine which CRUD method should be allowed for a given route.

### Rest Controller
1. `@RestController:` This annotation is actually a combination of two different annotations.
  - `@Controller` - The basic controller annotation but this will attempt to return a view after searching the default path for a matching view.
  - `@ResponseBody` - Tells the controller to automatically serialize to JSON what is returned from the method and then that JSON is placed inside the response body of the HTTP response before being sent back to the client.
- `meta-annotation`: combining two or more annotations into a single annotation
  - `@RestController` is a great example of a meta-annotation that creates a seamless transfer of information without additional overhead.

2. `@Autowired`: When you need to access methods from a different class `@Autowired` will take care of finding and implementing the correct classes based on the name of the property or method. 

3. `@GetMapping`: Notice that your route can be given a specific mapping by changing the first word, Get, Put, Post, Delete followed by Mapping will tell the controller which method to hit for a specific route. Keep in mind that if you use the default of `@RequestMapping()` without an argument, the annotation will map all four by default, and any path entered will always return the method to which the annotation is attached.

### Adding Static Files
- A good example of when you would not want the controller to serve JSON is when expecting the server to send static files. To do this, you will add a controller that is going to serves up a static file. 
- change the Controller to function as an API for the static files.
1. the static files are going to represent the client,add the controller that will serve them to the root package for the domain
2. Now that you have a controller to serve up the `index.html` view, you better create an `index.html` file in the default location Spring will look for it. `src/main/resources/static` is the place to be if you want to serve static files.
3. Add an index.js file in the same folder and modify it to contain the JavaScript code
4. Add a style.css file in the same folder 
- The `Controller`class is functioning to send a response which is HTML rather than JSON because of the `@Controller` annotation.

### Modify Message Controller
- handle incoming messages
- consume resources from the MessageController
1. add a `@RequestMapping("/api")` annotation just below the `@RestController` annotation. 
  - By adding this annotation at the top of the class, any path within the MessageController will need the prefix `/api` to be accessed. -
  - This is useful when creating an API because it is clear that this route is for data only and not for viewing pages.
2. Add a new method that will take care of the the logic to pull directly from the route.
