# is-positive [![Build Status](https://travis-ci.org/kevva/is-positive.svg?branch=master)](https://travis-ci.org/kevva/is-positive)

> Check if something is a positive number


## Install

```
$ npm install --save is-positive
```


## Usage

```js
var isPositive = require('is-positive');

isPositive(1);
//=> true

isPositive(0);
//=> false

isPositive(-1);
//=> false

isPositive('1');
//=> false
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
