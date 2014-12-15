Universal Starter Kit to build any javascript ES6 project/library runnable in nodejs and on any browser
====================

[![Build Status][travis-image]][travis-url]

[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]

[![MIT License][license-image]][license-url]


# Introduction

javascript next introduces a lot of new cool [features](https://6to5.org/features.html) unfortunately not yet available in the current modern browsers. This starter kit contains all the tools you need to let you run your ES6 code on any kind of platform.

## javascript ES6


```javascript
'use strict';

import helpers from './helpers/helpers';

/**
 * @class
 * An awesome script
 */
class Greeting {
  constructor(name = 'Dear Coder', text = 'hi there') {
    this.name = name;
    this.text = text;
  }
  get message() {
    return `${this.text} ${this.name}!`;
  }
  set message(text) {
    this.text = helpers.trim(text);
  }
}

export default {
  helpers,
  Greeting
};
```

```javascript
var greeting = new Greeting();

console.log(greeting.message) // -> hi there Dear Coder!
greeting.message = 'goodbye';
console.log(greeting.message) // -> goodbye Dear Coder!

```


## Tools available

- [gruntjs](http://gruntjs.com/)
- [6to5](https://6to5.org/)
- [requirejs optimizer](https://github.com/jrburke/r.js/)
- [amdclean](https://github.com/gfranko/amdclean)

# Usage

Once you've downloaded the files in this repo please run the following command in your terminal from the project folder (it may require `sudo`):

```shell
$ npm install && npm install grunt-cli -g
```

If you have installed correctly all the nodejs modules you can start writing your javascript modules into the `src` folder of course using the awesome javascript next syntax.

Browsing the [Gruntfile.coffee](Gruntfile.coffee) file you will find all the available terminal commands to compile/test your script. __This file contains also the script name used for the output__

## Grunt tasks

### Build and test
```shell
$ grunt
```

### Run all the tests
```shell
$ grunt test
```

### To compile and/or test the project anytime a file gets changed
```shell
$ grunt watch
```

### Convert the ES6 code into valid ES5 and combine the modules into one single file
```shell
$ grunt build
```

### Run the saucelabs tests
```shell
$ grunt saucelabs
```


[npm-url]: https://npmjs.org/package/es6-project-starter-kit
[npm-version-image]: http://img.shields.io/npm/v/es6-project-starter-kit.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/es6-project-starter-kit.svg?style=flat-square

[gemnasium-image]: https://img.shields.io/gemnasium/GianlucaGuarini/es6-project-starter-kit.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/GianlucaGuarini/es6-project-starter-kit

[travis-url]:https://travis-ci.org/GianlucaGuarini/es6-project-starter-kit
[travis-image]: https://img.shields.io/travis/GianlucaGuarini/es6-project-starter-kit.svg?style=flat-square

[saucelabs-image]:https://saucelabs.com/browser-matrix/es6-project-starter-kit.svg
[saucelabs-url]:https://saucelabs.com/u/es6-project-starter-kit

[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

