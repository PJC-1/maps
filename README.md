## Here are step-by-step instructions to make this simple react app that uses the google-maps api and the foursquare api to display a list of places and a map with markers of those places.

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
and cd into that directory by running <code> cd DIRECTORY-NAME</code>.

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
Instal `babel-preset-react`. Run <code>npm i -D babel-preset-react</code> in the terminal.
