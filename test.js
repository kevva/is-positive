'use strict';
var test = require('ava');
var isPositive = require('./');

test(function (t) {
	t.assert(isPositive(1));
	t.assert(isPositive(0));
	t.assert(!isPositive(-0));
	t.assert(!isPositive(-1));
	t.end();
});
