# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React with Lord of the Rings

We'll build a simple website that shows title and runtime information about the
original Lord of the Rings Trilogy.

Specifically, at the end of this activity, your solution will look like this:
![Lord of the Rings movie info](https://github.com/WDI-SEA/react_intro_global/blob/master/images/lotr.png)

### Setup
Fork and then clone this repo down to your local machine. Once cloned, cd into the directory for the project and run `npm install`.

Inside of `./src` folder create a `components` directory. You will create your new components in this directory.

### Create a Movie Component

Start by creating a `Movie` component and rendering it as a child of the `App` component. You will want to render it three times, once for each movie in the list.

### Pass Props

From the `App` component pass props to the `Movie` component using this data.

title | hours | minutes
------|-------|--------
The Fellowship of the Ring | 2 | 58
The Two Towers | 2 | 59
The Return of the King | 3 | 21

Update your `Movie` component to receive and display these props on the page.

<br>

## Hungry for More?

- See if you can store your movie data in an array in your App.js file and pass in props from your array.
- See if you can store your movie data in an array in your App.js file and then loop through that array to generate a `Movie` component for every item in the array.

---

### Reflections on Reusability

Components are great because they allow us to compartmentalize code and easily reuse parts we create. We simply set the value of props and the component defines how everything should be displayed.

In this instance, we factored out some redundancy of the
movie titles.
- All these movies start with `"Lord of the Rings:"`, so only the unique part is the prop.
- Similarly, we don't have to rewrite the format of the runtime information.

Building and reusing components becomes especially powerful the more complex components become.
- Imagine building a component for video search results inside YouTube.
  - The props list might include:
    - time information
    - preview images
    - options to add the result to a playlist
    - etc...

Building one component to rule all them all would save you a lot of time!


### Internet Dive Point
In case you want to nerd out, here are handy links to the IMDB page for each
movie:

* [Lord of the Rings: The Fellowship of the Ring](http://www.imdb.com/title/tt0120737/)
* [Lord of the Rings: The Two Towers](http://www.imdb.com/title/tt0167261/)
* [Lord of the Rings: The Return of the King](http://www.imdb.com/title/tt0167260/)

_edited from [global code-along](https://github.com/WDI-SEA/react_intro_global/blob/master/11-lotr-codealong.md)_
