## Changelog

### v7.0.0
  * added: the `min` and `lint` aliases
  * changed: use headless chrome instead of the deprecated phantomjs for the karma tests
  * changed: use babel-env to configure the babel presets
  * changed: replace the deprecated `prepublish` with `prepare` in the package.json
  * updated: all dependencies
  * removed: support for node 4 and 5

### v6.0.0
  * removed: saucelabs tests
  * updated: the `make` file was renamed `make.js` and it should be triggered via `node make`

### v5.3.2
  * updated: dev dependencies

### v5.3.1
  * updated: dev dependencies

### v5.3.0
  * updated: dev dependencies

### v5.2.0
  * updated: dev dependencies
  * fixed: unit test

### v5.1.3
  * updated: dev dependencies

### v5.1.2
  * updated: dev dependencies

### v5.1.1
  * updated: optimized the `watch` errors handling
  * updated: dev dependencies

### v5.1.0
  * updated: dev dependencies

### v5.0.3
  * fixed: compatibility issues on windows [more info](https://github.com/GianlucaGuarini/es6-project-starter-kit/issues/8)
  * updated: dev dependencies

### v5.0.2
  * updated: dev dependencies and updated
  * removed: peerDependencies
  * added: `jsnext:main` property in the package.json file
  * added: better error logs for the build step

### v5.0.1
  * added: all the missing peerDependencies `mocha` and `phantomjs`

### v5.0.0
  * removed: webpack replaced with rollup
  * updated: babel to 6.*

### v4.1.0
  * updated: switch to ASI (Automatic Semicolon Insertion)
  * updated: upgrade to node 4.*
  * updated: dev dependencies
  * added: showcase in the [README.md](README.md) file

### v4.0.7
  * updated: dev dependencies

### v4.0.6
  * updated: dev dependencies

### v4.0.5
  * updated: dev dependencies

### v4.0.4
  * updated: es6 available also for the tests scripts
  * updated: dev dependencies

### v4.0.3
  * added: the `npm run` command aliases closing #6
  * updated: dev dependencies

### v4.0.2
  * updated: dev dependencies

### v4.0.0
  * ![Yeah](http://www.gifbin.com/bin/30075yu908.gif)
  * removed: bye bye grunt tasks
  * removed: jshint + jscs
  * removed: requirejs optimizer + amdclean
  * removed: `dist/cjs` folder nodejs will rely on the same file needed for the web environments
  * added: custom build system based on javascript native promises
  * added: webpack as build tool
  * added: eslint as default syntax style checker
  * added: karma as default testing tool

### v3.0.11
  * updated: small fix to the tests

### v3.0.1
  * updated: dev dependencies

### v3.0.0
  * updated: dev dependencies
  * updated: 6to5 to babel 4.3.0
  * removed: 6to5 runtime dependecy
  * added: `grunt serve` command

### v2.0.3
  * updated: 6to5 to 3.6.0

### v2.0.2
  * updated: 6to5 to 3.3.10

### v2.0.1
  * updated: the amd output will use only the 6to5 runtime injected with the build script

### v2.0.0
  * updated: 6to5 to 3.3.1
  * added: `6to5-runtime` dependency needed for the commonjs output
