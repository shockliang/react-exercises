# react-exercises #

## Environment Setup ##
* Using npm to install `yarn`.
```
npm install -g yarn
```

* `live-server` installed by `yarn`.
```
yarn global add live-server
```

* Running `live-server`.
```
live-server some-folder
```

* Initialize package dependencies by yarn
```
yarn init
```

* Reinstall by yarn
```
yarn install
```

* Install babel cli
```
yarn global add babel-cli
```

* Install presets of babel
```
yarn add babel-preset-react babel-preset-env
```

* Uninstall global packages
```
yarn global remove babel-cli live-server
```

* Run script by yarn
```
yarn run some-script-name
```

## Hello React ##
* JSX - Javascript XML

* Compiled command by babel cli.
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

* JSX only have a single root.
Syntax error
```js
var tempalte = <h1>Something</h1><p>Others</p>;
```
Correct
```js
var tempalte = <div><h1>Something</h1><p>Others</p></div>
```

* ES6 arrow function
    * `arguments` object - no longer bound with arrow functions.
    * `this` keyword - no longer bound.

* Html attributes in JSX attributes converted
    * `class` to be `className`

* SCSS using `BEM` naming convention.
    * Block Element Modifier
    * http://getbem.com/naming/


## Redux ##
* Actions
    * Then an object that gets send to the store.
    * Naming convention using upper case and underscore to separate the second word. e.g. INCREMENT_OTHER