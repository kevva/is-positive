'use strict';
module.exports = function (n) {
	return (typeof n === 'number' || n instanceof Number) && n > 0;
};
