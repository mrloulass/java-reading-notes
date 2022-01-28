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
