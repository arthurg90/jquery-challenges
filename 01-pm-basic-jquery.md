# Basic jQuery

---

## Plugin Challenges

- Use the template `masonry.html` to play around with [Masonry](http://masonry.desandro.com/) (`masonry-layout` on NPM). If Masonry is working correctly you should get a responsive grid of different sized boxes.

- Create an HTML page containing a single input field of the type `password`. Use NPM to install `how-secure-is-my-password--jquery`. Setup the HSIMP jQuery plugin to show how long it would take to crack a password.

    - Make it more secure by changing the `calculationsPerSecond` option to be 40 billion
    - Make it more secure by changing the `ok` setting to be equal to 20 years

- Use the template `carousel.html` to play around with the [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) jQuery plugin (`owl.carousel` on NPM).

    - Get a basic kitten carousel working
    - Get it to show two kittens at a time, instead of 3
    - Make the carousel automatically start playing
    - Get the carousel to loop, so that when you get to the last image it goes back to the first
    - Get the carousel to pause when you hover over an image

---

## `.each()` Challenges

- Add jQuery to the `table.html` file. Using a jQuery `.each()` loop, add a class of `alternate` to every other row in the table. Can you think of a way of doing it using jQuery without using an `.each()` loop (think about how you could do it with CSS)?

- Add jQuery to the `redacted.html` file. Using a jQuery `.each()` loop add a class of `redacted` to every paragraph that contains the phrase "secret moon base".

    *Hint*: if you run `.text()` on a jQuery object you'll get back the text from that element as a string and you can search a string to see if it contains another string by using the string `.search("find this")` method - it will return `-1` if it isn't found 

- Add jQuery to the `items.html` file. Using a jQuery `.each()` loop, add a class of `col-x` where `x` is the column that the item should appear in if it's in a four by four grid and add a class of `row-y`, where `y` represents the current row the item should appear on.

    e.g. the first item would have the class `col-1 row-1`, the second `col-2 row-1`, the fifth `col-1 row-2`

    *Hint*: You'll need to round some numbers, you can use `Math.ceil()` or `Math.floor()` to do this:

    ```javascript
    // Math.ceil() rounds up
    Math.ceil(2.3); // 3
    Math.ceil(2.7); // 3

    // Math.floor() round down
    Math.floor(2.3); // 2
    Math.floor(2.7); // 2
    ```
