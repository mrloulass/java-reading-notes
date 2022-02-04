# Spring

-  It is an application framework that is divided into modules. Spring Framework provides foundational support for different application architectures, including messaging, transactional data and persistence, and web architecture.
- It's packed with some nice features like Dependency Injection, and out of the box modules like:
  - Spring JDBC
  - Spring MVC
  - Spring Security
  - Spring AOP
  - Spring ORM
  - Spring Test

## Introduction to Spring Tools

### Spring JDBC (Java Database Connectivity )
- manages all of the low-level details starting from opening the connection, preparing and executing the SQL statement, processing exceptions, handling transactions, and closing the connection.

### Spring MVC (Model-View-Controller)
- architecture and ready components that can be used to develop flexible and loosely coupled web applications. The MVC pattern results in separating the different aspects of the application (input logic, business logic, and UI logic), while providing a loose coupling between these elements.

### Spring Security
- customizable authentication and access control framework. It focuses on providing both authentication and authorization to Java applications and can easily be extended to meet custom security requirements.

### Spring AOP (Aspect-Oriented Programming )
-  includes breaking down program logic into distinct parts called concerns. The functions that span multiple points of an application are called cross-cutting concerns, which are conceptually separate from the application's business logic.

### Spring MVC Test
- can write and run integration tests that test controllers without explicitly starting a servlet container.

## Spring Tool Suite (STS)
- is an Eclipse-based IDE that is optimized for developing Spring framework-based projects.

## [Spring Framework] (https://docs.spring.io/spring-framework/docs/current/reference/html/index.html)
- provides Java developers with the tools necessary to build applications quickly and securely. Frameworks not only cut down on development time, but they also improve scalability, because developers can work collaboratively to refine the tool upon which they rely. 
- divided into modules
  - Core: Provides core features such as DI (Dependency Injection), Internationalization, Validation, and AOP (Aspect-Oriented Programming)
  - Data Access: Supports data access through JTA (Java Transaction API), JPA (Java Persistence API), and JDBC (Java Database Connectivity)
  - Web: Supports both Servlet API (Spring MVC) and recently Reactive API (Spring WebFlux), and additionally supports WebSockets, STOMP, and WebClient
  - Integration: Supports integration to Enterprise Java through JMS (Java Message Service), JMX (Java Management Extension), and RMI (Remote Method Invocation)
  - Testing: Wide support for unit and integration testing through Mock Objects, Test Fixtures, Context Management, and Caching

### Inversion of Control (IoC)
- essentially means that the control of objects, or portions of a program, is transferred to the container, or framework. It is a programming technique that provides a consistent means of configuring and managing Java objects.
- serves the following purposes:
  - There is a decoupling of the execution of a certain task from implementation.
  - Every module can focus on what it is designed for.
  - Modules make no assumptions about what other systems do but rely on their contracts.
  - Replacing modules does not impact other modules.
- The IoC container receives metadata from either an XML file, Java annotations, or Java code. From this metadata, the container is able to instantiate, configure, and assemble Spring beans from the POJOs.
- Objects created by the container are also called managed objects or beans. The container can be configured by loading XML (Extensible Markup Language) files or detecting specific Java annotations on configuration classes. These data sources contain the bean definitions that provide the information required to create the beans.
- Objects can be obtained by means of either dependency lookup or dependency injection. Dependency lookup is a pattern where a caller asks the container object for an object with a specific name or of a specific type. Dependency injection is a pattern where the container passes objects by name to other objects, via either constructors, properties, or factory methods.
- In many cases developers don’t need to use the container when using other parts of the Spring Framework, although using it may make an application easier to configure and customize. The Spring container provides a consistent mechanism to configure applications and integrates with almost all Java environments, from small-scale applications to large enterprise applications.

### What Spring Does Behind the Scenes
- single POJO and essentially represents a hashmap or dependency chart. The Spring Framework itself has a rather straightforward architecture
- Spring Framework takes care of:
  - Instantiating, or create an instance of, Spring Beans
  - Enabling and connecting all the Spring Beans together
  - Setting the Spring Beans up as specified in the metadata
  - Managing the whole Spring Beans’ life cycle (creation, configuration, tear down, trash collection)

## Introduction to Spring Boot
- Spring Framework project that is an open-source Java-based framework created by the Spring Framework Pivotal team to build micro-services that are stand-alone and production-ready spring applications.
- Micro-services is an architecture that enables developers to develop and deploy services independently. The individual services have their own processes that serve for a more lightweight model to support business applications.
- Spring Boot was designed with the following goals:
  - To avoid complex XML configuration in Spring
  - To develop production-ready Spring applications in an easier way
  - To reduce the development time and run the application independently
  - To offer an easier way of getting started with the application
- advantages for developers:
  - Easy to understand and develop Spring applications
  - Increases productivity
  - Reduces the development time
- Spring Boot features include the ability to:
  - Create stand-alone Spring applications
  - Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
  - Provide opinionated “starter” dependencies to simplify your build configuration
  - Automatically configure Spring and third-party libraries whenever possible
  - Provide production-ready features such as metrics, health checks, and externalized configuration
  - Require no code generation and no requirement for XML configuration
- Spring Boot’s micro-services offer several distinct advantages:
    - Easier deployability
      - The independence of micro-services enables them to be deployed individually and checked for operation easily, which reduces the effort to deploy new services.
    - Less complex to scale
      - Micro-services tend to be less complex to scale as it becomes an issue with scaling horizontally or having enough instances to handle the workload being passed to the micro-services.
    - Interoperable with Spring Containers
    - Require minimum resources to configure
      - Drawing back to the independence of each microservice, this also enables developers to quickly make the microservices and have them ready more easily than traditional applications.
    - Reduced production time
      - Due to the simplicity and focused function, the microservices require less time to reach production.
### Spring Annotations
- Within Spring Boot, annotations are a form of metadata that provides relative information about a program. Essentially, the annotations are used to provide supplemental information about an application. These annotations are not part of the application being developed and do not have a direct effect on the operation of the code they annotate, but they can change the way the Spring Framework tailors the application for bootstrapping and deployment, such as configuring the environment as a REST controller and where to map directories.
  - Traditionally, Spring allows a developer to manage bean dependencies by using XML-based configuration.
  - There is an alternative way to define beans and their dependencies. This method is a Java-based configuration.
  - Unlike the XML approach, Java-based configuration allows you to manage bean components programmatically. That’s why Spring annotations were introduced.
- Here are some of the annotations:
  - @SpringBootApplication
    - This annotation is used to mark the main class of a Spring Boot application:
```java
@SpringBootApplication
class CarSalesApplication {
    public static void main(String[] args) {
        SpringApplication.run(CarSalesApplication.class,args);
    }
}
```
## Spring MVC
### Model-View-Controller (MVC)
- is a pattern for organizing code by separating the software into three parts: model, view, and controller.

### Request Lifecycle
- The Spring Web MVC framework is designed around a front controller called `DispatcherServlet`. 
  - A front controller is a web application pattern where a single servlet acts as the point of contact for requests. 
  - It then delegates the responsibility of the request to controllers and components within the application. This means that requests made to the Spring MVC web application will first make contact with the `DispatcherServlet` servlet. From the moment a request leaves the client to the moment the response is returned encompasses the lifecycle of a request. A request in the Spring framework makes several stops during its lifetime, exchanging information at each step. The diagram below helps illustrate the lifecycle of a request.
1. Request: First, the request leaves the browser. It must contain the request URL and can optionally contain additional information. The request will make its first stop at the `DispatcherServlet` front controller.

2. Handler mapping: The `DispatcherServlet` doesn't know where to go next. So, the servlet will consult a handler mapping to determine where the request should go next based on the request URL.

3. Controller: Once `DispatcherServlet` determines which controller is appropriate for the request, the request is sent to that controller. The information carried from the client is then supplied to the controller to be processed. After the controller has finished its job, the controller will produce a result model that is ready to be used.

4. Model & view name: However, the raw data of the model is of no use to the client. It would need to be paired with a view such as an HTML document or a JavaServer Page. The controller will identify the name of the view and package this with the model. Then, this package will be sent back to the `DispatcherServlet`. Rather than providing the controller with a specific view name, a logical view name is used as an intermediate variable to refer to the view name. This layer of abstraction is akin to using a variable rather than a literal value. This logical name points to an actual view that will produce the result.

5. ViewResolver: How does the controller know where to look to find the actual view name? ViewResolver. The DispatcherServlet will consult the view resolver which maps the logical name to the actual name, which may be an HTML or JSP document.

6. View: Once the model and the actual view are collected, the data from the model is inserted into the view. The view is now generated and ready to be sent back to the client.

7. Response: The view is sent back to the client to be viewed as an HTML page.

- 
