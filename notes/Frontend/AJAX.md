# AJAX

- AJAX stands for (Asynchronous JavaScript and XML). This technology helps to load data from the server without refreshing the browser page.
- Ajax uses XHTML for content, CSS for presentation, along with the DOM and JavaScript for dynamic content display.
- With AJAX, when you hit submit, JavaScript will make a request to the server, decipher the results, and then update the current screen.

## Terms

- `AJAX Asynchronous JavaScript and XML`. This technology helps you load data from the server without refreshing the browser page.
- `XMLHttpRequest` An API that can be used by JavaScript and other web browser scripting languages to transfer and manipulate XML data to and from a webserver using HTTP, establishing an independent connection channel between a webpage's Client-Side and Server-Side.
- `AJAX Request` To send a request to a server, use the open() and send() methods of the XMLHttpRequest
- `JSON JavaScript Object Notation` is a format for sharing data. This makes the format easy to transmit between web server and client or browser.

## Technologies AJAX Depends On

- AJAX cannot work alone. It is used in combination with other technologies to create interactive web pages.
  - JavaScript
    - A loosely typed scripting language
    - JavaScript function is called when an event occurs in a page
    - Holds the AJAX operation together
  - Document Object Model (DOM)
    - API for accessing and manipulating structured documents
    - Represents the structure of XML and HTML documents
  - CSS
    - Allows for a clear separation of the presentation style from the content and may be changed programmatically by JavaScript
  - XMLHttpRequest
    - JavaScript object that performs asynchronous interaction with the server

## [Browser Support](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#browser_compatibility)

- When a browser does not support AJAX, it merely means that the browser does not support the creation of a JavaScript object XMLHttpRequest object.

## XMLHttpRequest
- The `XMLHttpRequest` object is the key to AJAX. `XMLHttpRequest` is an API that can be used by JavaScript and other web browser scripting languages. It is used to transfer and manipulate XML data to and from a web server using `HTTP`, and establishing an independent connection channel between a webpage's Client-Side and Server-Side.
- The data returned from `XMLHttpRequest` calls will often be provided by back-end databases. `XMLHttpRequest` can be used to fetch data in other formats such as XML, JSON or plain text.
- Syntax for creating an XMLHttpRequest Object:
  - `const newRequest = new XMLHttpRequest();`
- All modern browsers have a built-in `XMLHttpRequest` object.

### XMLHttpRequest Object Methods
| Method                              	| Description                                                                                                                                                                                        	|
|-------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| new XMLHttpRequest()                	| Creates a new XMLHttpRequest object                                                                                                                                                                	|
| abort()                             	| Cancels the current request                                                                                                                                                                        	|
| getAllResponseHeaders()             	| Returns header information                                                                                                                                                                         	|
| getResponseHeader()                 	| Returns specific header information                                                                                                                                                                	|
| open(method, url, async, user, psw) 	| Specifies the request<br>method: the request type GET or POST<br>url: the file location<br>async: true (asynchronous) or false (synchronous)<br>user: optional user name<br>psw: optional password 	|
| send()                              	| Sends the request to the server: Used for GET requests                                                                                                                                             	|
| send(string)                        	| Sends the request to the server: Used for POST requests                                                                                                                                            	|
| setRequestHeader()                  	| Adds a label/value pair to the header to be sent                                                                                                                                                   	|
### XMLHttpRequest Object Properties
| Property           	| Description                                                                                                                                                                                           	|
|--------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| onreadystatechange 	| Defines a function to be called when the readyState property changes                                                                                                                                  	|
| readyState         	| Holds the status of the XMLHttpRequest<br>0: request not initialized<br>1: server connection established<br>2: request received<br>3: processing request<br>4: request finished and response is ready 	|
| responseText       	| Returns the response data as a string                                                                                                                                                                 	|
| responseXML        	| Returns the response data as XML data                                                                                                                                                                 	|
| status             	| Returns the status-number of a request<br>200: "OK"<br>403: "Forbidden"<br>404: "Not Found"                                                                                                           	|
| statusText         	| Returns the status-text such as, "OK" or "Not Found"                                                                                                                                                  	|

### AJAX Request
- To send a request to a server, you use the `open()` and `send(`) methods of the `MLHttpRequest` object
```javascript
xhttp.open("GET", "URLGOESHERE", true);
xhttp.send();
```
#### `open()`
  - which starts the AJAX request
  - `xhttp.open("GET", "URLGOESHERE", true);`
    - the `GET` method which defines that the request is going to "get" information
    - the `url` which specifies the server location, this can include information located within a file, not a `URL`, such as `info.txt`
    - define that the request is going to be asynchronous using the keyword `true`
      - sending a request asynchronously, JavaScript does not have to wait for the server's response but instead can execute other scripts while waiting for the server response or deal with the response after the response is ready.
##### GET vs POST
- using the `open()` method, you have the option of using several different HTTP requests. 
  - `GET`: is used to request data from a specified source.
  - `POST`: is used to submit data for processing.
    - Sending a large amount of data to the server as POST has no size limitations.
    - A cached file is not an option.
    - Sending user input, which in some cases may contain unknown characters, POST is more robust and secure than GET.
  - `PUT`
  - `DELETE`

#### `send()`
  - `xhttp.send();`
  - sending the request after 'opening' the request.

### Using jQuery with AJAX
- load any static or dynamic data using the `load()` method provided by jQuery.
  - `[selector].load(URL, [data], [callback]);`
  - `URL` - The URL of the server-side resource to which the request is sent. It could be CGI, ASP, JSP, or PHP script which generates data dynamically or out of a database.
  - `data` - This optional parameter represents an object whose properties are serialized into properly encoded parameters to be passed to the request. If specified, the request is made using the POST method. If omitted, the GET method is used.
  - `callback` - A callback function invoked after the response data has been loaded into the elements of the matched set. The first parameter passed to this function is the response text received from the server and second parameter is the status code.
```javascript
$(document).ready(function() {
  $("#driver").click(function(event) {
    $("#stage").load("info.html");
  });
});
```
- jQuery code snippet does the following:
  - `$(document).ready(function()` - This makes sure your document loads and is ready
  - `$("#driver").click(function(event)` - Uses the `id driver` as a target for a click event
  - `$("#stage").load("info.html")`; - Loads the targeted URL which is the file `info.html` that you will create next to the id given.

### JSON
- (JSON) JavaScript Object Notation. It is a format for sharing data. Even though JavaScript is in the name, it is available for several programming languages including Python, Ruby, Java, and PHP.
- JSON uses the `.json file` extension when it is a stand-alone file. 
- When it is defined in another file format such as .html, it can appear inside of quotes as a JSON string, 
- it can be an object assigned to a variable. This process makes the format easy to transmit between the web server and the client or browser.
#### JSON Object
`JSON` object is a key-value data format that is typically rendered in curly brackets {}.
```json
{
  "name": "Andrew",
  "age": 30,
  "graduate": true
}
or
{ "name": "Andrew", "age": 30, "graduate": true }
```
- entire object is surrounded by {}. 
- JSON objects are written in `key : value` pairs where the `key` comes first, then a colon (:), followed by the `value`. 
- When creating a JSON object the `keys` must always be a string, and the `values` must be a valid JSON data type such as; string, number, object, array, boolean or null.
#### Nested JSON Objects
```json
{
  "andrew": {
    "username": "Shucks",
    "location": "Florida",
    "online": true,
    "followers": 987
  },
  "jesse": {
    "username": "JesJesEH",
    "location": "Canada",
    "online": false,
    "followers": 432
  },
  "mark": {
    "username": "MarkyMark",
    "location": "Georgia",
    "online": false,
    "followers": 321
  },
  "kyle": {
    "username": "IareKyle",
    "location": "New York",
    "online": true,
    "followers": 654
  }
}
```
- curly brackets are used throughout to form a nested JSON object with associated username, location, and other data for four different users. Note that commas are used to separate each object as well as each key/value pair.
#### Nested Arrays within JSON
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "location": "Delaware",
  "websites": [
    {
      "description": "work",
      "URL": "https://www.JSONSMITH.com/"
    },
    {
      "description": "videos",
      "URL": "https://www.youtube.com"
    }
  ],
  "socialMedia": [
    {
      "description": "twitter",
      "link": "https://twitter.com"
    },
    {
      "description": "facebook",
      "link": "https://www.facebook.com/"
    },
    {
      "description": "github",
      "link": "https://github.com"
    }
  ]
}
```
- the websites and socialMedia keys each use an array to nest information belonging to John Smith
#### JSON.parse()
- use of JSON is to exchange data to and from a web server. When receiving data from a web server, the data is always a string. Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.
  - `{ "name":"John", "age":30, "city":"Arizona"}`
- use `JSON.parse()` to convert the text into a JavaScript object:
  - `let newObj = JSON.parse('{ "name":"John", "age":30, "city":"Arizona"}');`
- change to JavaScript object:
```javascript
newObj = {
  name: "John",
  age: 30,
  city: "Arizona"
};
```
##### Parsing JSON from API
- use a `URL` to hit an API endpoint that will send you back an entire JSON object from a server that you can manipulate.
