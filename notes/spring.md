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

## Backend Foundations with Java
### Terms
- POJO (Plain Old Java Object)	A simple class with getters and setters on the variables inside of itself. This type of class does not extend or implement from other classes.
- Server	A computer that responds to requests over the web.
- Servlet	A Java program which runs on the server.
- Web Container (Servlet Container)	The component of a server which interacts with Java Servlets.

### Web Server
- is to listen to requests from the outside world and respond back as instructed by the programmer. 
- A `web container` (or `servlet container`) is the component of a web server which interacts with Java code
- `Java servlet` the Java code that runs on the server 

## Maven Dependencies
- Maven helps a great deal in defining, creating, and maintaining reproducible builds with well-defined classpaths and library versions.
- Maven’s primary goal is to allow a developer to comprehend the complete state of a development effort in the shortest period of time. In order to attain this goal, Maven deals with several areas of concern:
  - Making the build process easy
    - While using Maven doesn’t eliminate the need to know about the underlying mechanisms, Maven does shield developers from many details.
  - Providing a uniform build system
    - Maven builds a project using its project object model (POM) and a set of plugins. Once you familiarize yourself with one Maven project, you know how all Maven projects build. This saves time when navigating many projects.
  - Providing quality project information
    - Maven provides useful project information that is in part taken from your POM and in part generated from your project’s sources. For example, Maven can provide:
      - Change log created directly from source control
      - Cross-referenced sources
      - Mailing lists managed by the project
      - Dependencies used by the project
      - Unit test reports, including coverage:
        - Third-party code analysis products also provide Maven plugins that add their reports to the standard information given by Maven.
  - Encouraging better development practices
    - Maven aims to gather current principles for best practices development and make it easy to guide a project in that direction.
### Project Object Model (POM)
- is the fundamental unit of work within Maven. At its essence, the POM file contains all the information and configuration details that Maven will use to build the Java project. It contains default values for most projects. 
- Some of the configurations that can be specified in the POM are the project dependencies, the plugins or goals that can be executed, the build profiles, and so on. Other information such as the project version, description, developers, mailing lists, and such can also be specified.
- The defaults that Maven uses are listed in the Super POM, which is Maven’s default. All POMs extend the Super POM, unless explicitly stated, which means the configuration specified in the Super POM is inherited by the POMs created for all projects. An example super POM is here.
- the minimum requirements for any POM is:
  - project root
  - modelVersion - should be set to 4.0.0
  - groupId — the ID of the project's group.
  - artifactId — the ID of the artifact (project)
  - version — the version of the artifact under the specified group
```
<project>
 <modelVersion>4.0.0</modelVersion>
 <groupId>com.WozU.app</groupId>
 <artifactId>WozU-Training-app</artifactId>
 <version>1</version>
</project>
```
- A POM requires that its groupId, artifactId, and version be configured. These three values form the project's fully qualified artifact name.
- Any missing configuration details will be inherited from the defaults from within Super POM for that version of Maven. 
### Build Phases and the Build Lifecycle
- Maven’s central concept is focused around the build life cycle, meaning that the process for building a particular artifact or project is precisely and clearly defined. When designing the project, this means that there are only a few commands that require learning in order to build any Maven project, with the POM providing the guidelines on how it should be built.
- There are three built-in life cycles:
  - default life cycle handles project deployment
    - phases:
      - validate — validate that the project is correct and all necessary information is available.
      - compile — compile the source code of the project.
      - test — test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed.
      - package — take the compiled code and package it in its distributable format, such as a JAR.
      - verify — run any checks on results of integration tests to ensure quality criteria are met.
      - install — install the package into the local repository for use as a dependency in other projects locally.
      - deploy — done in the build environment, copies the final package to the remote repository for sharing with other developers and projects.
  - clean life cycle handles project cleaning
  - site life cycle handles the creation of a project’s site documentation.
- Each of these build life cycles is defined by a different list of build phases, wherein a build phase represents a stage in the life cycle.
- [Lifecycle Reference](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference)
- These life cycle phases are executed sequentially to complete the default life cycle. Given the life cycle phases above, this means that when the default life cycle is used, Maven will first validate the project, then will try to compile the sources, run those against the tests, package the binaries (e.g., jar), run integration tests against that package, verify the integration tests, install the verified package to the local repository, then deploy the installed package to a remote repository.
### Goals
- Each phase within a Maven life cycle is made up of a sequence of goals, with each goal representing a task that needs to be completed. When the Maven operations process the application build, it runs a phase with each goal bound to this phase being executed in order.
- Goals can be bound to one or more phases, or none at all, which would mean it could be executed outside the build life cycle by direct invocation. If the goal is bound to more than one phase, it will be executed in each build phase. A phase without goals would not be executed.
  - the phases and default goals bound to them:
    - compiler:compile the compile goal from the compiler plugin is bound to the compile phase.
    - compiler:testCompile is bound to the test-compile phase.
    - surefire:test is bound to the test phase.
    - install:install is bound to the install phase.
    - jar:jar and war:war are bound to the package phase.
### Maven Plug-in
- Maven is really just a core framework for a collection of Maven Plugins. In other words, plugins are where much of the real action is `performed.Pplugins` are used to create jar files, create war files, compile code, unit test code, create project documentation, and on and on. Almost any action that you can think of performing on a project is implemented as a Maven plugin.
### Packaging
- When looking at a Maven project, one of the most important elements to consider is the resulting package type. You specify the packaging type in the POM that controls the type of artifact that the project produces. There are quite a few different types of packaging that Maven has built in (most familiar being jar, war, and ear). If there is none specified, Maven assumes the default, which is jar.
### Mojo
- Maven’s MOJOs stands for Maven Old Java Objects
- Mojo is simply a goal in Maven, and plug-ins consist of any number of goals (Mojos). Each Mojo is an executable goal in Maven, and a plugin is a distribution of one or more related mojos. Mojos can be defined as annotated Java classes or Beanshell script. A Mojo specifies metadata about a goal: a goal name, which phase of the life cycle it fits into, and the parameters it is expecting.
### Archetype
- Maven has a focus of making it easier and simpler for developers to package their applications. The archetype provides developers a toolkit to create Maven project templates. According to the Apache Maven Project, an archetype is defined as "an original pattern or model from which all other things of the same kind are made."
- Archetypes are a powerful way to get developers to adhere to best practices employed by a project or organization. The Maven project itself utilizes archetypes to try and get users up and running as quickly as possible, utilizing a sample project that illustrates many of the features of Maven while simultaneously introducing new learners to the best practices employed by Maven.
### Maven Repositories
- which house a multitude of different types of build artifacts and dependencies.

- The repositories boil down to two types: local and remote. As the name implies, the local repositories point to local directories on the computer on which Maven runs. This repository holds the remote downloads and temporary artifacts that have been built but not yet released.
## Bootstrap Framework
- which is a free and open-source CC framework. Its focus is around enabling responsive, mobile-first front-end web development, and it contains CSS and optional JavaScript-based design templates. The templates include typography, forms, buttons, navigation, and many more interface components.
- The Bootstrap framework focuses on simplifying the development required for creating informative web pages, as opposed to web applications. It is flexible and easy to work with and it enables web pages that are responsive by design, have a wide range of browser compatibility, and provide consistency through reusable components, on top of being quick and easy to learn.
- few reasons to use Bootstrap:
  - Quick and easy to learn
  - Rich extensibility via JavaScript
    - Built-in support for jQuery plugins and JavaScript APIs
  - Can be used with any IDE or text editor
  - Compatibility with any server side technology and language (ASP.NET, PHP, Ruby on Rails, C#, etc.)
  - Enables web developers to focus on development work without concern for design
## Packaging and Deployment
- When an application has reached its conclusion with development, it is time for the application to be packaged for deployment and deployed to the appropriate end users. After the application is implemented (coded) and built, the developer would take all the distributables, executables, documentation, resources, and more and put that into a directory for staging and packaging.
- Packaging an application ensures that all of the components that are necessary are contained or bundled with the application code. This ensures that when it is executed, all the dependencies and required elements are present for the application to work.
- As software development has evolved and the progression of the cloud has become quite remarkable, a partnership has arisen that provides developers the ability to quickly create, implement, package, and deploy their code to the cloud with the application scaling in response to usage. This is where the Pivotal Cloud Foundry comes into play.
### Pivotal Cloud Foundry (PCF)
- With multiple systems, capabilities, and functionality, VMware designed and introduced the Cloud Foundry. It is a multi-cloud platform that is capable of supporting the development, management, and continuous delivery of software applications. Utilizing an IaaS model, such as AWS, Azure, or Google Cloud, Cloud Foundry deploys on top and provides features and specialized functions to enable organizations to reduce the complexity and associated costs of configuring the underlying platform for their applications.
- three types of IT business models:
  - Software-as-a-Service (SaaS)
    - Organizations have access to an application through a web-based portal and all the resources to run the application are managed by the cloud service provider.
  - Infrastructure-as-a-Service (IaaS)
    - Organizations are able to manage the applications, data, runtime, middleware, and operating systems while outsourcing the network management, storage capacity control, server resources, and virtualization capabilities. This allows organizations to focus on developing their software without concern about hardware management.
  - *Platform-as-a-Service (PaaS)
    - Organizations are able to develop and deploy their applications and manage their data on the provided platform, while the cloud service provider manages all the systems required to scale and meet the needs of the application and data.
## Jenkins
- Continuous Development/Continuous Integration (CD/CI) 
  - This essentially means that the developers are developing and releasing many small changes to the application and providing those changes and fixes to the user as quickly as possible.
- Jenkins is a tool for developers so that they can build and test software projects, while continuously making it simpler and easier for developers to integrate changes into their projects and deploy these resulting changes to their users so that they can obtain a fresh build quickly.
- Jenkins is an open-source automation tool written in Java programming language that allows continuous integration. The Jenkins tool builds and tests the software projects and is currently the leading open-source automation server, with over 1,600 plugins to support automation of all kinds of development tasks.
- Jenkins is centered around the Jenkins Pipeline, which is a continuous delivery pipeline that executes the software workflow as code. The pipeline is a collection of operations that move the software from version control into the hands of end users through the use of automated tools.
