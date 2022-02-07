# HTML

- HTML stands for Hypertext Markup Language. It was created to mark up a text document that would be rendered by a browser. HTML tells the browser how to display the content. You will use HTML to mark up a document using tags that a browser then reads. It uses the markup to divide the document into different elements that it will then display.
- HTML is building the framework of a document.
  (structure of its contents)

## Terms

- HTML Hypertext Markup Language, the language used for encoding the structure of web pages.
- Tag The beginning of an HTML element, usually denoted with angle brackets surrounding a tag type.
- Element A distinct component of an HTML document, usually comprised of start and end tags surrounding some kind of content.
  Attribute Modifies a given element and is located within the tag itself.
- <!DOCTYPE html>	Declares type of document and is always first in HTML document.
- <html> Used to denote the beginning of the HTML in an HTML document.
- <head> Contains metadata about the document and will not be shown in the browser.
- <title>	Metadata that states the title of the webpage.
- <body> Contains all content to be displayed in the browser.
- <p>	Used to wrap a block of text and causes it to be formatted as a paragraph.
- <br> A self-closing tag that is used to break blocks of text onto another line.
- <div>	Used to create a generic container for content.
- <img> A self-closing tag used to display images. Uses the src attribute to specify location of the image.
- <a> Used to add hyperlinks and uses the href attribute to specify the location of the link.
- <input> Adds input fields to the page and sometimes uses the placeholder attribute.
- <button> Adds a button to the page and sometimes uses the onclick attribute.
- <li>	Used to display list items.
- <ol>	Displays ordered lists and always uses the <li> element.
- <ul>	Displays unordered lists and always uses the <li> element.

## Tags vs. Elements

- A tag is a specialized series of characters or a keyword that a browser interprets as either the start or end of an HTML element.
  - opening tag: `<p>`
  - closing tag: `</p>`
- Elements are HTML components that contain the start tag, such as <p>, the content of the paragraph, and the end tag, </p>. Think of elements as the whole object, not just an individual tag.
  - paragraph element:
  - `<p>I am a paragraph!</p>`

## Document Structure

- When working in HTML, It is extremely important when making sure the HTML document is set up correctly.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Document</title>
  </head>
  <body>
    <p>Content to be displayed on the screen will go here.</p>
  </body>
</html>
```

### !DOCTYPE

- `!DOCTYPE` is a statement in the HTML document to specify which version of HTML is being used. It is the way the browser knows that the document adheres to the HTML5 standard and will treat it as such. DOCTYPE will always be on line 1 of every HTML page because it needs to be listed before you write out any other HTML code.

### HTML Element

- HTML tag <html> is used to denote the start of the HTML document. The HTML element contains the whole HTML document that will be read by the browser. When creating the HTML page, you start with <html> and end the document with </html>. Everything in between these tags is analyzed by the browser to create the display on the page.
- can only be one <html> element per document.

### Head Element

- The head element, <head>, contains all the metadata for that document. It will always be listed right after the <html> tag. HTML metadata is data about the HTML document that will not be displayed. It can define the document title, as well as, contain links to other pages that the page needs to display.
- Meta information about the document is also placed in the head element using the <meta> tag, as is the title element with the <title> tag. The title tag tells the browser what to display on the browser tag and will not be shown directly on the HTML page.
- can only be one head and one title element per document. You can, however, have multiple meta tags if you choose.

### Body Element

- The <body> element contains everything that will be displayed in the browser. These elements can include text, images, and links. Any HTML element you want to be displayed on the webpage MUST be within the body element
- can only be one body element per document.

## Structure Tags

- tags will always be added between the <body> </body> tags on the HTML page.

### Paragraph Tag

- The paragraph <p> tag is used to wrap a block of text and format it as a paragraph. This also allows the browser to know to automatically wrap the text based on the window size.

### Break Tag

- if you want this same break of lines, but within one paragraph? Thats where the break tag <br> comes in.
- <br> tag is a self-closing tag

### Div Element

- The <div> element is used to create a generic container for content. It is referred to as a structure element, because it is used to organize the structure of a page. It is widely used throughout HTML documents.

## Tags and Their Attributes

- **Attributes** communicate specific functionality about a tag and fall into two categories.
  1. it can be used to change or modify a tag’s functionality.
  2. it can add functionality that is not automatically associated with that tag.
- Either way, the attribute is added to the HTML start tag.

### Image Element

- The <img> tag does NOT need a closing tag,
- to display an image on an HTML page, specify exactly which image to display. add a source attribute, `src`, which is used in specifying the source of the image or where the image is located on the page
  - `<img src="myImage.jpg">`
- Typically, you will create an "images" or "media" folder to contain these images.
  - `<img src="images/myImage.jpg">`
- if image exists on the internet, you can use the URL of the image.
  - `<img src="https://woz-u.com/wp-content/uploads/2017/11/woz-thumbnail.jpg">`

### Anchor Element

- anchor tag <a> is how you add hyperlinks into the HTML page.
- need to add an attribute to the tag to tell it where you want the link to go.
- It uses the `href` attribute, which will specify the URL of the page you wish to link to. The last part of the anchor tag is the text between the opening and closing tags. This text is what the user sees when the HTML is rendered. Keep in mind, this tag DOES need a closing anchor tag </a>.
- `<a href="http://www.google.com">Google Something!</a>`
- want the web page to open in a new, separate tab or window, you can add the `target` attribute to the <a> tag and set its value to `"_blank"`.
  - `<a href="http://www.google.com" target="_blank">Google Something!</a>`

### Input Element

- The <input> tag is what is used to add fields to an HTML page that collects information. Consider signing up for Facebook — you input your name, email address, etc. Those fields are all created using the <input> tag.
- the input tag does not require a closing tag.
- `Name: <input>`
- add a short hint that describes the expected value of an <input> element by adding the `placeholder` attribute.
  - `<input placeholder="Name">`

### Button Element

- <button> tag is used when you want to put a button on the page.
- `<button>Click Me!</button>`
- It could be a button when you submit a form
  - <input type="button" value="Click Me">
- One of the main attributes used when you have a button is `onclick`
- `<button onclick="alert('Hello!')">Click Me!</button>`

### [More Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

- `id` <Global Tags> Provides a unique id so it can be located
- `lang` <Global Tags> Specifies the language of the elements content
- `spellcheck` <Global Tags> Specifies if the element needs to have its spelling and grammar checked
- `style` <Global Tags> Specifies the CSS styles that determine the look of an element
- `class` <Global Tags> References a predefined set of looks and feels to be applied to an element
- `checked` <input> Tags Specifies that an input element will be pre-selected when a user lands on the page
- `href` <a>, <link> Tags Specifies the URL of the page that the link goes to
- `required` <input>, <select>, <textarea> Tags Specifies that the element must be filled out before submitting a form
- `type` <button>, <input>, <link>, <script> Tags Specifies the type of the element to display. The default type is text
- `value` <button>, <input>, <link>, <script>, <li>, <option> Tags Specifies the initial value of the element

### Creating a List

- two primary ways to create a list:
  - Ordered lists are numbered indicating the importance of the order
    - use the <ol> element. Within the <ol> element you have the list item elements <li>.

```html
<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

- Unordered lists are for when the order of the items in the list do not matter
  - an unordered list uses the <ul> element to contain the list. each list item is contained in an <li> element

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Grapefruit</li>
</ul>
```

## Complex HTML Elements

### Terms

- Semantic Tags Clearly defines the purpose of the element to the developer and web browser.
- <strong> Used to bold text.
- <em> Used to italicize text and is read by the browser as important.
- <i> Used to italicize text and is intended to make text stand out.
- <h1> - <h6>	Used to break up the reading and allows the reader to know where the title sections are. <h1> is most important and <h6> is the least.
- <header>	Contains introductory information about that page or section of page.
- <footer>	Contains information at the bottom of the page or section.
- <nav>	Contains links to other pages on the site.
- <section>	Specifies a specific section in a document.
- <article>	Breaks up the document into groups.
- <table>	Creates a table that contains <tr>, <td>, <th>, <thead>, <tbody>, and <tfoot>.
  <form>	Used to gather information from the user. Can contain <label>, <textarea> and <input>.
- <select> Used to create a dropdown list. Uses <option> to populate the different options in the dropdown.
- <input> Can have different types such as checkboxes, radio, and submit.
- <button> Can be used to submit a form by having name="submit" type="submit" within the <button> tag.

### Semantic Tags

- are tags that clearly define what that element is for/doing, these tags give more meaning to the browser and the developer in question

#### Text Emphasis

- elements that can change or add emphasis to the text inline
- <strong> element can be used to bold text.
- <em> and <i> tags, which both italicize the text. However, the <em> is treated by the browser as important, while the <i> is intended to make text stand out.

#### Heading Tags

- break up the text, allowing the reader to know where the title sections are.
- Headings are ranked from 1 - 6, <h1> being the most important, and <h6> the least.

#### Outlining a Document

- semantic tags that give structure and meaning to the document as a whole

##### Header and Footer Elements

- efficiently help organize the document so it is clear what you want at the top and bottom of the page.

##### Nav Element

- This tag can go within the <header> tag, but it is not necessary. If you look at the diagram below, you will see it is located within the <header> tag. This will specifically define for the web browser that there is a navbar on the page. A navbar is where you will be able to navigate the site and look at different pages
- have to utilize the <li> and <a> elements.
- the <li> element will list out those pages for you. The <a> will be the element that does the navigating throughout the webpage.

```html
<body>
  <nav>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="bio.html">Bio</a></li>
    </ul>
  </nav>
</body>
```

##### Section Element

- <section> element specifies a specific section in a document. It contains a group of content, typically including a heading.

##### Article Element

- <article> element breaks up the document into groups.

#### Tables

- are used to represent structured data in rows and columns; they allow you to quickly associate some data with other data

#### Forms

- are used to collect information from users — such as when a user signs up for social media websites like Facebook and Twitter — and typically contain other HTML elements like inputs and buttons.

- <input> element where the user can place text in the field. There are other (types) of inputs that include the `button`, the `checkbox`, and the `radio button` elements.
  - HTML5 adds more types with options like email, color, date, and number.

##### Forms and Input Elements
```html
<form>
  <input type="text" id="firstName" name="firstName"/>
  <input type="text" id="lastName" name="lastName"/>
  <input type="submit" value="Submit"/>
</form>
```
  - The `name` attribute is used when submitting the form to the server. The value of the `name` attribute will be used to identify the value that the user submitted. Without the name attribute, there is no way to tell what information belongs where.
- two ways to use the <label> element and associate it with a form element. 
  1. to wrap the form element inside the <label> element like so:
    - `<label> First Name <input type="text" id="firstName" name="firstName"/></label>`
  2. using the label is with the `for` attribute:
    - `<label for="firstName">First Name</label> <input type="text" id="firstName" name="firstName"/>`
- if you do not have a <label> element and only have the `placeholder` attribute, the `placeholder` will disappear once the user clicks into the input and starts typing, which could be a potential cause for confusion.
##### HTML5 Validation
- ability to validate the values entered into the form on the client (browser) before it is sent to the server.
- required: One of the most basic validation types is the required attribute
  - `<input name="firstName" required/>`
- min & max: attributes
  - `<input name="age" min="13" max="120" type="number"/>`
- Special Types
  - automatic validation properties.
    - built-in validation, are number, url and tel
```html
<input type="email"/>
<input type="number"/>
<input type="url"/>
<input type="tel"/>
```
##### textarea Element
- <textarea> element is used if larger blocks of text need to be entered
  - Specifically, the `rows` and `cols` attributes
  - `<textarea rows="10" cols="50" name="message"></textarea>`
##### Dropdown Lists
- <select> element is used to create a dropdown list and can be configured to allow a single selection (default behavior) or multiple selections.
  - actual items of the list are contained in an <option> element.
```html
<select name="color">
  <option value="R">Red</option>
  <option value="B">Blue</option>
  <option value="W">White</option>
</select>
```
  - selected attribute can also be added to an <option> element to make it the default option.
```html
<select name="color">
  <option value="R">Red</option>
  <option selected value="B">Blue</option>
  <option value="W">White</option>
</select>
```
##### Form Checkboxes
- checkboxes can be a great way to collect information when there is more than one option, or you need to know the user selected an option.
- Checkboxes will give three options: `selected`, `unselected`, and `indeterminate`. The value attribute is used to hold the value submitted to the server.
```html
<input type="checkbox" id="red" name="ColorRed" value="Red"/>
  <label for="red">Red</label><br>
  <input type="checkbox" id="blue" name="ColorBlue" value="Blue"/>
  <label for="blue">Blue</label><br>
  <input type="checkbox" id="white" name="ColorWhite" value="White"/>
  <label for="white">White</label>
```
##### Form Radio Buttons
- Radio buttons are used to allow a user to select one option from a list. Radio buttons contain two states, on or off. 
```html
<input type="radio" id="weatherSun" name="weather" value="sun"/>
<label for="weatherSun">Sun</label><br>
<input type="radio" id="weatherClouds" name="weather" value="clouds"/>
<label for="weatherClouds">Clouds</label><br>
<input type="radio" id="weatherRain" name="weather" value="rain"/>
<label for="weatherRain">Rain</label>
```
##### Submitting the Form
- Submitting a form is when the data that is entered into the form is sent to the server for processing
- There are two methods, using buttons, that will submit the form.
1.  use an actual button element with `type` and `name` values set as `submit`
  - `<button name="submit" type="submit">Submit Me</button>`
2. use an `input` tag with the `type` set to `submit` like so:
  - <input type="submit" value="Submit Me"/>
