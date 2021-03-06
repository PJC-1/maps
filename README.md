## This repo follows *Turbo 360's* YouTube tutorial [React with Google Maps](https://www.youtube.com/watch?v=N1J7Q1qJPQM&t=550s)

## As a note, the following instructions are not complete and may be out of date. *Turbo 360's* YouTube channel also features a new React tutorial using Google Maps, [React & Google Maps Revisited](https://www.youtube.com/watch?v=jZZEskrwc4w&t=203s)

##Here are step-by-step instructions to make this simple react app that uses the google-maps api and the foursquare api to display a list of places and a map with markers of those places.

## Here is an screenshot of what the end result will look like:

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/finished.png)

## Technologies:
- [Reactjs](https://facebook.github.io/react/)
- [webpack](https://webpack.github.io/)
- [Babeljs](https://babeljs.io/)
- [react-google-maps](https://github.com/tomchentw/react-google-maps)
- [SuperAgent](https://visionmedia.github.io/superagent/)
- [JSX](https://jsx.github.io/)
- [npm](https://github.com/npm/npm)
- [nodejs](https://nodejs.org/en/)


## Checkout the finished product:
- Clone or download this repo
- run `npm install` in the terminal
- run 'webpack -w' in the terminal
- open `index.html` in the browser

## Lets get coding:

### 1a.
Create a new directory by running <code>mkdir DIRECTORY-NAME</code> in the terminal,
and cd into that directory by running <code> cd DIRECTORY-NAME</code> in the terminal.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/a1.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/a2.png)

### 1b.
Run <code>npm init -y</code> in the terminal to produce the `package.json` file, the `-y` option will create the `package.json` file with the default settings and will not prompt you to answer each question.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/1.png)

### 2.
Create an `index.html` file and a `webpack.config.js` file. A configuration file in Webpack is basically a common.js module. The config file is a place to put all of your configuration, loaders, and other specific information relating to your build.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/2.png)

### 3.
Install `react`. Run <code> npm i -S react</code> in the terminal, the `-S` is simply short-hand for `--save` and the `i` is short for `install`.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/3.png)

### 4.
Instal `react-DOM`. Run <code> npm i -S react-dom</code>

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/4.png)

### 5.
Install `webpack`. Run <code>npm i -D webpack</code> in the terminal. The `-D` is short for `--save-dev` and will make the package appear in the `devDependencies` if your `package.json`.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/5.png)

### 6.
Install `babel-core`. Run <code>npm i -D babel-core</code> in the terminal. This installs the Babel compiler itself, which transpiles the `ES6` javascript into `ES5` since not all browsers can understand the `ES6` code.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/6.png)

### 7.
Install `babel-loader`. Run <code>npm i -D babel-loader</code> in the terminal. With `webpack`, running your javaScript and JSX through Babel is a simple as adding a `loaders` entry for `babel-loader` to your `webpack.config.js` which we will create and set-up in a few step. Basically we will be telling Webpack to only apply Babel to files in a specific directory. This speeds up the build by making sure that Babel isn't applied to the entire `node_modules` directory.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/7.png)

### 8.
Install `babel-preset-react`. Run <code>npm i -D babel-preset-react</code> in the terminal. The `babel-preset-react` is a plugin used by the `babel-loader` to translate JSX syntax.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/8.png)

### 9.
Install `babel-preset-es2015`. Run <code>npm i -D babel-preset-es2015</code> in the terminal. Like the `babel-preset-react`, this plugin will be used by the `babel-loader` to translate ES6 syntax.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/9.png)

### 10.
Create the `webpack.config.js` file by running <code>touch webpack.config.js</code> in the terminal. On line `1` and `2` we use node's require method to load the webpack module from webpack and the path module from node which provides utilities for working with file and directory paths. The minimalist requirement of a Webpack config file is the presence of `entry` and `output` properties. On `line 6` the `entry` property contains an `app` key who's value holds the directory path of the React applications codebase, the `entry` basically tells Babel where the javascript code we wrote lives to have it transpile into ES5. On `line 10` the `output` property has a `sourceMapFilename` key who's value represents the directory path of the bundle file output, this is where we use webpack to specify where to tell Babel to put the transpiled code. On `line 4` we uses node's `module.exports` which will contain properties for the webpack configuration. [for more information webpack configuration](https://webpack.github.io/docs/configuration.html)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/10a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/10b.png)

### 11.
Create a `src` directory, cd into that directory and create an `app.js` file inside the `src` directory by running the folling commands into the terminal <code>mkdir src</code> <code>cd src</code> <code>touch app.js</code>

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/11a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/11b.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/11c.png)

### 12.
Set up the app.js file.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/12.png)

### 13.
Run `web pack -w` in the terminal, which stands for web pack watch, which will watch for all changes and automatically retranspile your code. This will generate the build folder and `bundle.js` and `bundle.map` files, which are the transpiled code.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/13.png)

### 14.
Set up the `index.html` file to render. Now if you open `index.html` in the browser you will see the text `This is a REACT APP!` displayed on the screen.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/14a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/14b.png)

### 15.
Go into the `src` directory, and make a new directory named `components` cd into this directory and make two files, one named `Maps.js` and another named `Places.js`.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/15.png)

### 16.
Now lets do a basic set up for the Map component, and `import` this component in the `app.js` file with this line of code: `import Map from './components/Map'`

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/16a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/16b.png)

### 17.
Now that we have the Map component all set up, we can utilize the Map component in the app.js. If you open the `index.html` file in the browser and you will see some text rendered from he Map component.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/17a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/17b.png)

### 18.
Create a simple Places component, export and import this module in the app.js and adding it to the render.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/18a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/18b.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/18c.png)

### 19.
Install `react-google-maps` by running this line of code in the terminal, <code> npm i -S react-google-maps </code> and then add a script tag that uses your googleAPI key. For more information on [react-google-maps](https://github.com/tomchentw/react-google-maps). Here's a link to the [Google Maps APIs docs](https://developers.google.com/maps/documentation/javascript/), this is where you can get your api key.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/19a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/19b.png)


### 20.
In the `maps` component we can import some components from the `react-google-maps` library.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/20.png)

### 21.
Next we need to create a container for the map. The style in the `div` just means that we want the map to be 100% of it's parent element.
<code> style{{height: '100%', width: '100%'}} </code>

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/21a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/21b.png)

### 22.

In the map component lets add some code to render the google map, we pass down `center` as a `prop`, so we need to go back to our `app.js` and make sure that we create a center variable and pass it down to the `Maps` component via props.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/22.png)

### 23.

In the `app.js` add another variable named markers, which is an array of objects, these will be the markers on the map. We also need to pass the `Map` component markers as a prop.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/23.png)

### 24.

In the `Maps.js` file we access markers and create a local variable markers, and use the map function that will iterate over the markers property and pull the `lat` and `lng` for the google maps, we also return a `Marker` component that takes `i` as the `unique identifier` and it also takes marker which we just declared in the `Map` component. We add `{ marker }` and on `line 29` as a reference to marker on `line 9`, this is how the map will display the markers. In the return of `const marker` `{...marker}` is just `ES6` short hand for passing in `marker`.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/24a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/24b.png)


### 25.

To make our API calls in react we will be using another external module named `superagent`. To install `superagent` enter this code into the terminal: <code>npm i -S superagent</code>

For more information on `SuperAgent` here's the link to their [DOCS](https://visionmedia.github.io/superagent/)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/25.png)


### 26.

Inside the parent component (which is the App component in app.js) and we want to override whats called the `lifecycle component` called `componentDidMount`, a lifecycle method is an action that gets fired by the system and not by the user. Here we just added a console.log to check if it is working. So if you open index.html in the browser and refresh you will see `componentDidMount` logged in the console.

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/26a.png)

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/26b.png)


###27.

Import `Super Agent` to make api calls, we import this in the `app.js` file with this line of code:

<code>import superagent from 'superagent'</code>

Click here for more information [SuperAgent](https://visionmedia.github.io/superagent/).

![alt tag](https://github.com/PJC-1/maps/blob/master/pics/27.png)
