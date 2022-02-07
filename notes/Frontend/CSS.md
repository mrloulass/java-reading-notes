# CSS

- CSS stands for Cascading Style Sheets. CSS is used to manipulate how the HTML elements look on the webpage
- CSS is a way to style the HTML and create reusable styles, also called rules. These regulations and styles can be added directly to an HTML file by using the <style> element. They can also be added to a separate .css file and then linked to the HTML file.
- CSS is called cascading because the styles from a parent element also apply to its descendants. The styles cascade down the element tree from the parent elements to its children and descendants, much like a family tree.
- The CSS file is analyzed from the top down. If there are two selectors with the same type (e.g. the same element), the one closer to the bottom will be the style that is applied, because the style closer to the bottom overwrites the style closer to the top.

## Terms

- `CSS Cascading Style Sheets`, the best method for styling HTML.
- `Rules` Individual style specifications within CSS.
- `Selector` The element to which a rule applies.
- `Property` The aspect of an element to be changed by a rule.
- `Value` The behavior that a property should exhibit.
- `id` Gives an HTML element an id to then use as a selector in the CSS file with a octothorpe `#`.
- `class` Gives an HTML element a class to then use as a selector in the CSS file specified by a period `(.)`.
- `element` Select a specific element in your CSS file by using the element's name.
- `color` Used to color text, can use either predefined colors or hex codes.
- `background-color` Used to color backgrounds, can use either predefined colors or hex codes.
- `font-size` Used to change the size of text.
- `font-weight` Used to change the amount of bold given to text.
- `font-family`	Changes the font of the text and can use generic or web fonts as its value.
- `CSS Border` The CSS border properties allow you to define the border area of a box. The border can either be a predefined style like solid line, double line, dotted line, etc. or it can be an image.
- `Displaying Content`	Using the display property you can control how a block of content is shown in the browser.
- `Positioning Content`	The normal behavior of elements is to follow a set flow: the order you place elements in your code is the order they are displayed. However this behavior can be changed by setting the value for position to static, relative, absolute, or fixed.
- `Box Model`	Describes how these rectangular boxes are laid out on a web page. These boxes can have different properties and can interact with each other in different ways, but every box has a content area and optional surrounding margin, padding, and border.
- `Placing Content`	Using the width, height, and the position properties, it is easy to specify the height, width, and position of elements.

## CSS Syntax

- three different ways to style an element.
  1. using the `style` attribute. When using this attribute, it will only style that specific element.
  - `<p style="color:blue;">`
  2.  using CSS is to use the `<style>` HTML element. Using this method of styling is when the CSS selector comes into play. The CSS selector is how you target the element you want to style.

```css
<style>
p{
  color:blue;
}
</style>
```

3. preferred and extremely common to only have CSS styling in a separate styling sheet (.css) and to not use any HTML inline styling.

- `<link rel="stylesheet"  type="text/css" href="practice.css">` adding a link into your HTML file in the <head> element
  - The `link rel` is giving value to the item, in this case imports the "stylesheet". 
  - `type` specifies the type of linked document or resource, in this case "text/css". 
  - `href` specifies the location of the external resource.
- make a file for your CSS styling (.css)
- place all of your styles in the (.css) file `p{color:blue;}`

## Basic Properties and Values

### Coloring (color)

- able to change color for your text

### Background Color (background-color)

- adding a background color

### Font Size (front-size)
- make the text bigger
- `px` stands for pixels and is used for setting the font size of an element.
- `em` stands for ephemeral unit and is dynamic, which means it will change based on other things.
- If you haven't already set the font-size in pixels, the default `em` size is 16px
- `1 em= 16px`
- number used will be multiplied by the set pixels. This means if `1em = 16px`, then `2em = 32px`
- `em` is beneficial when you start worrying about how your site will look on a smaller device, like a phone or tablet.

### Font Weight (font-weight)
- this allows a font to appear bolder than other fonts based on the value set.
- keyword values are:
  - lighter
  - normal
  - bold
  - bolder
- numeric values are:
  - 100
  - 200
  - 300

## Selectors
- selectors are used in choosing the HTML element that you want to apply styling to
- `class` and `id` are both global attributes that you can add to any HTML element.
  - `id` will need a (#) in front of the selector name in the css file
    - one element can have a `id` name
  - `class` will need (.) in front of the selector name in the css file
    - multi ple elements can have the same `class` name
- specificity tells us what the most powerful selector in your CSS is.
  - `id` selector is the most powerful in that it carries the most weight when being applied to an element and trumps all other selectors.
  - `class` selector has a higher priority than an element selector.

### [Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- type of CSS selector based on the current state of an element. This is often based on the user's interaction with an element. For example, 
- `:hover` pseudo-class can be added to a tag, but only applies if the user is hovering over an element.
- `:first-child` pseudo-class are also based on the surrounding contents of the page
- `:nth-child` selector would give a style to every other row
  - `:nth-child(odd)`
  - `:nth-child(even)`
