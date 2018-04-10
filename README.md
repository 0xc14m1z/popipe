# popipe

[![Build Status](https://travis-ci.org/0xc14m1z/popipe.svg?branch=master)](https://travis-ci.org/0xc14m1z/popipe) [![Coverage Status](https://coveralls.io/repos/github/0xc14m1z/popipe/badge.svg?branch=master)](https://coveralls.io/github/0xc14m1z/popipe?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/c0bc2333ec245c353d54/maintainability)](https://codeclimate.com/github/0xc14m1z/popipe/maintainability)

Small method that behaves like the pipe operator of functional languages.

## how to install

```
$ npm install --save popipe
```

## how to use it

The pipe method takes a variable number of arguments and apply them as
transformations to the first argument in a clean way, instead of method calls
fall.

```js

import pipe from "popipe"
// or var pipe = require("pipe")

// transformation methods
const doubler = x => x * 2
const incrementer = x => x + 1

const answerOfLife = pipe(5, doubler, doubler, incrementer, doubler)
// 42

```

If you want to apply additional arguments to transformation methods, use the
currying technique having a function that accepts a single parameter as your
final result.

```js

const multiplier = y => x => x * y

const answerOfLife = pipe(5, doubler, multiplier(2), incrementer, doubler)
// 42

```
