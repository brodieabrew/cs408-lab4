# CS408 Lab 4

## Overview
This project creates a website using HTML, CSS, and JavaScript.
The main focus of this site is to provide maximum accessibility
to all users that will potentially use the site.

## Usage
From within the project directory run the following commands:

`npm install`

Once the modules have been installed, you can open the project using:

`code .`

Open "index.html" from the file explorer window and use the
Visual Studio Code command palette (F1) to run the Live Preview Server.

## Accessibility Lab Answers
### Color
I used an online contrast checker and found that the contrast ratio was [2.79:1](https://webaim.org/resources/contrastchecker/?fcolor=2A2A2A&bcolor=008000), which was a fail for accessibility. By changing the background color to white, I was able to improve the contrast ratio to [14.35:1](https://webaim.org/resources/contrastchecker/?fcolor=2A2A2A&bcolor=FFFFFF).

### Semantic HTML
1. The only problems with navigating the site using a keyboard is that the some of the comment functionality that should be interactable via the keyboard is not. Everything else seems to work fine.
2. I updated the elements within the main article element to be more fitting. For example, I changed the font elements to use different header elements (e.g, h2 and h3). I also wrapped most text in paragraph elements. These changes, in combination with updating the CSS styling for header elements, should make the website much easier to navigate for things like screen readers.
3. The navigation menu should simply be updated to use a nav element instead of a div element with a custom defined "nav" class. This also required some updates to the CSS to style nav elements instead, but that was also very simple.

### The Images
We can make images more accessible by adding the alt attribute to each image element and providing a brief description of the image.

### The Audio Player
1. The simplest method to make audio elements accessible to the hearing impaired or deaf is to provide a brief description or transcript of the audio. I did this by adding a paragraph element immediately after the audio element with a transcript.
2. To make the audio accessible to users that have older browsers that don't support the audio element, I simply included download links to the .mp3 and .ogg audio files in the text that is shown if the browser doesn't support the audio element.

### The Forms
1. One way to add a label that is visually hidden but still accessible to screen readers is to use some CSS styling to prevent the display of the element. I borrowed the [visually-hidden class](https://a11y-guidelines.orange.com/en/articles/accessible-hiding/), which styles the element such that it is visually hidden on as many browsers as possible.
2. The way that I achieved this is by adding some label elements that are directly attached to each input element. I also styled the CSS slightly different so that it looks more visually appealing (in my opinion).

### The Show/Hide Comment Control
The easiest way to make the comment control keyboard accessible is to use a button element instead of a div. By changing the styling slightly, we can have the exact same look with additional functionality.

### The Table
To improve the accessibility of the table I used the th elements to specify the header elements for the table, and I used the scope attribute to provide a scope for each header element in the table. I also provided a caption element in the table that contains a brief summary of the content.

### Other Considerations
One thing that I did to make the website more accessible was replace the remaining font elements with proper header elements. This should make different sections of the website clearer for screen readers. Another thing that I did to make the website more accessible was replace the div element used for the "Related" section to use a section element. This should make it more clear that the "Related" section is a separate section.

A good idea for the future would be to make the website more mobile accessible. In its current state, the site is primarily tailored towards larger devices, meaning that the site will likely display incorrectly on smaller devices.

## Sources and Credits
* [MDN](https://developer.mozilla.org/en-US/)
* [Orange](https://a11y-guidelines.orange.com/en/articles/accessible-hiding/)
* [W3 WAI](https://www.w3.org/WAI/)
* [W3 Validator](https://validator.w3.org/nu/)
* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)