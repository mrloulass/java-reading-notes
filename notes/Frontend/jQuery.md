# jQuery
- [jQuery API](https://api.jquery.com/)
- `jQuery` is a fast, JavaScript **library** that makes many tasks simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications easier for the developer, this means `jQuery` is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which you would have had to write yourself before jQuery, and compresses it
- add jQuery events that will improve the user experience by manipulating your HTML document.
- jQuery is a JavaScript library that simplifies multi-line, complicated tasks. jQuery can be used in many different ways:
  - HTML/DOM manipulation
  - CSS manipulation
  - HTML event methods
  - Effects and animations
  - AJAX
## Terms
- `jQuery`	A fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer.
- `Event`	A method in jQuery that designates the event needed to trigger an action.
- `Document Ready Event`	Prevents jQuery from running before the document is done loading.
## jQuery Setup
- To use `jQuery`, it needs to be included in the project. There are two main ways to include `jQuery`:
  1. download the jQuery library from jQuery.com 
```html
<!-- Download jQuery from jQuery.com to your project folder and add the below script tag  -->
<head>
    <script src="jquery-3.2.1.min.js"></script>
</head>
```
  2. include `jQuery` from a `CDN`. `CDN` stands for 'Content Delivery Network' and is a way to incorporate different resources that live on the web into your project without having to import them. 
```html
<!-- Include jQuery from a CDN -->
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
</head>
```
## jQuery Syntax
- `$("p").hide();`
  - `$` is a wrapper declaring that you are using and accessing `jQuery`. You can compare this to using `var` when declaring a variable.
  - The selector is the HTML element you are querying or targeting, and in this case, you are targeting all <p> tags. This syntax of targeting an element is jQuery's way of using DOM (Document Object Model), and in the past, you have used document.`getElementsByTagName("p")`.
  - The action is what you are going to do to the HTML element you have targeted. `.hide()` will hide all paragraph elements.
- When targeting elements, you don't have to use only tags. You can also target by using a `class` or `id` specific to that tag. You would use this if you wanted to focus on only one `p` tag with a specific `class` or `id` rather than targeting all p tags. The syntax of targeting `classes` and `ids` is the same as when you use a CSS file: to target a class, use a period `.` and to target an id, use a hashtag `#`
### Document Ready Event
- this prevents jQuery from running before the document is done loading.
```javascript
$(document).ready(function(){
    $("p").hide();
});
```
- All jQuery methods must be within the Document Ready Event for them to properly work, so make sure you include `$(document).ready(function(){ `whenever you are using jQuery.

## Actions
-  can use when targeting HTML elements
  -  A Mouse Event will occur depending on where your cursor is on the page or what it is doing
  -  Mouse Event `.click()` method in jQuery:
```javascript
$(document).ready(function(){
    $("p").click();
});
```
- next is define what you want to happen when you `click` on the paragraphs (p). To do this, you need to pass in a `function` to the event and use another action:
```javascript
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
```
- By adding `$(this).hide();`, you are now hiding the paragraphs (p) once they are clicked on. The `this` keyword refers to the current element you are using, which in this case is the ("p") tag.

## CSS
- jQuery CSS manipulation to define what you want the CSS elements to be.
- start with the `addClass()` method. This method will add a previously defined class in a CSS file to the specified element
```css
.blue {
    background-color: blue;
    font-size: large;
}
```
```javascript
$(document).ready(function(){
    $("p").click(function(){
        $(this).addClass("blue");
    });
});
```
- `removeClass()` - This will do the opposite of `addClass()`. It will take away any CSS class already being used with a specific element.
- `toggleClass()` - This will switch between the `addClass()` and `removeClass()` methods. If you consider the code above and instead had `toggleClass()`, each time you click on the paragraph, it will either add the CSS class or remove it.

### .css()
- this method differs from those you have explored because it DOESN'T use a previously defined class in your style.css file
- two ways you can use this method:
  - `.css("propertyName")` - This will return the CSS property of the first matched element.
  - `.css("propertyName", "value")` - This will set a specified element with a specific property and set the value to either a string or a number depending on what the property is. You can use any propertyName and value that you would use in a regular CSS file.
```javascript
$(document).ready(function(){
    $("p").click(function(){
        $(this).css("color", "orange");
    });
});
```
- user clicks on a `p` item, the color of the text will change to orange.
## More [Events](https://api.jquery.com/category/events/)
- list of frequently used Mouse Events, Keyboard Events, and Form Events

| Name         	| Event Type     	| Description                                                                                                                                                                                                                                  	|
|--------------	|----------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| dblclick()   	| Mouse Event    	| Works just like click(), but the difference is that the user has to double-click with the mouse.                                                                                                                                             	|
| mouseenter() 	| Mouse Event    	| An event will be fired when your mouse enters a specified area, and what has been changed will not revert to original when the mouse leaves.                                                                                                 	|
| mouseleave() 	| Mouse Event    	| An event will be fired when your mouse leaves a specified area, and what has been changed will not revert to original when the mouse enters that area.                                                                                       	|
| hover()      	| Mouse Event    	| This event is a combination of mouseenter() and mouseleave() so whatever is changed when the mouse hovers over an area will revert to its original state when the mouse stops hovering. You will have two methods within the hover() method. 	|
| keyup()      	| Keyboard Event 	| This Event will be fired after a key on the keyboard is pressed and then released.                                                                                                                                                           	|
| keydown()    	| Keyboard Event 	| This Event will be fired when a key is pressed.                                                                                                                                                                                              	|
| keypress()   	| Keyboard Event 	| This event is fired when a key is pressed all the way down. This would happen after keydown() and before keyup().                                                                                                                            	|
| submit()     	| Form Event     	| This event is fired when a user is trying to submit a form.                                                                                                                                                                                  	|
| change()     	| Form Event     	| This event is fired when an input in a form is changed.                                                                                                                                                                                      	|
| focus()      	| Form Event     	| This event will be triggered when someone clicks directly into a specific form field.                                                                                                                                                        	|
- 
