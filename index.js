'use strict';
var querystring = require('querystring');
var md5Hex = require('md5-hex');
var BASE_URL = 'https://gravatar.com/avatar/';

module.exports = function (email, opts) {
	if (email.indexOf('@') === -1) {
		throw new Error('Please supply an email');
	}

	var query = querystring.stringify(opts);

	return BASE_URL + md5Hex(email.toLowerCase().trim()) + (query ? '?' + query : '');
};
