# CSS

[TEST CSS knowledge](https://flukeout.github.io/)

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
- `font-family` Changes the font of the text and can use generic or web fonts as its value.
- `CSS Border` The CSS border properties allow you to define the border area of a box. The border can either be a predefined style like solid line, double line, dotted line, etc. or it can be an image.
- `Displaying Content` Using the display property you can control how a block of content is shown in the browser.
- `Positioning Content` The normal behavior of elements is to follow a set flow: the order you place elements in your code is the order they are displayed. However this behavior can be changed by setting the value for position to static, relative, absolute, or fixed.
- `Box Model` Describes how these rectangular boxes are laid out on a web page. These boxes can have different properties and can interact with each other in different ways, but every box has a content area and optional surrounding margin, padding, and border.
- `Placing Content` Using the width, height, and the position properties, it is easy to specify the height, width, and position of elements.

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

- `<link rel="stylesheet" type="text/css" href="practice.css">` adding a link into your HTML file in the <head> element
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

## Styling

### [Styling Text (font-family)](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

- Generic Family Name: Generic fonts determine how the font appears.
  - serif
  - sans-serif
  - monospace
  - cursive
  - fantasy
  - system-ui
- Font Family Name: uses fonts that are already predefined and able to be read by most web browsers.
  - Arial
  - Courier New
  - Verdana
  - Georgia
  - Times New Roman
  - Trebuchet MS
- If a browser does not support a specific font, typically a fallback system is used. This system is where you would list multiple fonts for the browser to read, just in case one or more are not readable.

```css
p {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
```

- The browser will attempt to use the first font it finds going from left to right.

### [Using Web Fonts](https://fonts.google.com/)

- Many different fonts are also available online. These font types are available and used by the browser by linking them through the HTML.
- Place in the the <head> element
- `<link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed" rel="stylesheet">`

## CSS Border

- You can create and use a border around any of the elements in HTML

### CSS Border Properties (border-style)

- The CSS border properties allow you to define the border area of a box. The border can either be a predefined style like solid line, double line, dotted line, etc. or it can be an image.
- `border-style:` property sets what kind of border you want and may take one of the following values:
  - none - Defines having no border
  - hidden - Defines a hidden border
  - solid - Defines a solid border
  - dashed - Defines a border with dashed lines
  - dotted - Defines a border that is dotted
  - double - Defines having a double border
  - groove - Defines a 3D grooved border
  - inset - Defines a 3D inset border
  - outset - Defines a 3D outset border
  - ridge - Defines a 3D ridged border

```css
p {
  border-style: dashed;
}
```

- using the border-style property, you can have one to four values, the value listed from left to right would define the top, right, bottom and left sides of the border, in that order.

```css
p {
  border-style: dashed dotted solid double;
}
```

### Border Width (border-width)

- `border-width` property specifies the width of the border area. You can define the thickness using a keyword such as `thin`, `medium` and`thick`, or you can set the size using `px` or `em`. Also, you can define the `border-style` property and then define how thick you would like the value to be.

```css
p {
  border-style: solid;
  border-width: 20px;
}
```

- If the value for the border-width property is missing or not specified, the default value of the border-width property, medium, will be used instead.

### Border-Color (border-color)

- border-color property specifies the color of the box's border

### Border Property (border)

- `border` CSS property is a shorthand property for setting one or more of the individual border properties `border-width`, `border-style` (required) and `border-color` into a single rule.
- If the value for an individual border property is omitted or not specified while setting the border shorthand property, the default value for that property will be used instead, if any.

## Displaying Content (display)

- you can control how a block of content is shown in the browser. A few values that are used very frequently:
  - `none` - This property allows you to hide content. An element with `none` applied to it will not be visible to the user.
  - `inline` - Elements with `inline` applied are displayed side by side on the same line. They automatically wrap when they reach the end of the window.
  - `block` - Elements with `block` disrupt the flow of the elements around them. They typically take up the entire width of the window and stack vertically. It is like a paragraph <p>.

### Positioning Content & Altering Document Flow [(position)](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- `position` property change default positioning behavior
- This change allows the browser to account for various screen sizes like monitors, tablets, and phones.
- can be changed by setting the value for position to `static`, `relative`, `absolute`, or `fixed`. Some of these values rely on defining the `top`, `right`, `bottom`, and `left` properties. These properties define where on the page the element will live.
  - `static` - This value doesn't position the content in any unique way. It is positioned in comparison to the normal flow of the page. The `top`, `right`, `bottom`, and `left` properties will not affect this value.
  - `relative` - This value positions the element according to the normal flow of the document but then offsets. It's relative to itself based on the values of `top`, `right`, `bottom`, and `left` properties.
  - `fixed` - This value removes the element from the normal flow of the document. It is positioned relative to the screen's viewport and doesn't move when scrolled. Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
  - `absolute` - This value removes the element from the normal flow of the document. This allows the positioning of the elements based on the browser window vs. other elements. Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
- The difference between fixed and absolute is fixed takes its calculations from the viewport, and absolute takes its calculations from the nearest parent that is also positioned. If none are found it will work all the way up to the <html> tag.

## What Is The CSS Box Model?

- Every element that can be displayed is comprised of one or more rectangular boxes. CSS box model typically describes how these boxes are laid out on a web page. These boxes can have diverse properties and can interact with each other in different ways, but every box has a content area and optional surrounding margin, padding, and border.

### Margin (margin)

- clears an area around the border that separates it from other boxes. The CSS margin properties allow you to set the margins around the sides of an element's box. The margins do not have a background-color, they are entirely transparent.
- You can easily specify the different margins for the different sides of an element such as top, right, bottom or left side using CSS individual margin property.

```css
h1 {
  margin-bottom: 20px;
}

nav {
  margin-left: 100px;
  margin-top: 45px;
}
```

- There is also the margin shorthand property to avoid setting the margin of each side separately with margin-top, margin-right, margin-bottom and margin-left.

```css
h1 {
  margin: 0px 10px;
}

article {
  margin: 25px 50px 75px 100px;
}
```

- This shorthand notation can take one, two, three, or four whitespace separated values.
  - If one value is set, this is applied to all of the four sides.
  - If two values are specified, the first value is applied to the top and bottom, and the second value is applied to the right and left side.
  - If three values are specified, the first value is applied to the top, the second value is applied to left and right side and the last value is applied to the bottom.
  - If four values are specified, they are applied to the top, right, bottom, and left side respectively in the specified order.

### CSS Padding (padding)

- `padding` is the space between the content of the element and its border.
- `padding` properties allow you to set the padding area for an element that separates its border from its content. The padding is affected by the `background-color` of the box.

```css
h1 {
  padding-bottom: 10px;
}
article {
  padding-top: 20px;
  padding-left: 50px;
  background-color: cyan;
  border-style: solid;
}
```

- `padding` property is a shorthand property to avoid setting padding for each side of an element separately, i.e. `padding-top`, `padding-right`, ` padding-bottom``, and  `padding-left`.

```css
h1 {
  padding: 10px 20px;
}
nav {
  padding: 10px 15px 20px 25px;
}
```

- The `padding` property can take one, two, three, or four whitespace separated values.
  - If one value is specified, this is applied to all the four sides.
  - If two values are specified, the first value is applied to the top and bottom, and the second value is applied to the right and left side.
  - If three values are specified, the first value is applied to the top, the second value is applied to left and right side and the last value is applied to the bottom.
  - If four values are specified, they are applied to the top, right, bottom, and the left side respectively in the specified order.
- Unlike CSS margin properties, values for padding properties cannot be negative. Like margin properties, percentage values for padding properties refer to the width of the generated boxes containing block.

## Layout

- In normal document flow, elements are stacked from top to bottom in the order that they appear in the HTML.
- Elements can change behavior using things like the `position`, and the `display` properties. You can also use a property called `float`.

### Floating Content (float)

- `float` causes elements to be stacked next to each other instead of on top on one another.

```css
p {
  width: 200px;
  padding: 10px;
  float: left;
}
div {
  width: 200px;
  padding: 10px;
  float: right;
}
```

- display the content in columns stacked next to each other.

[TEST CSS knowledge](https://flukeout.github.io/) 

