'use strict';
const querystring = require('querystring');
const md5Hex = require('md5-hex');

const BASE_URL = 'https://gravatar.com/avatar/';

module.exports = (identifier, options) => {
	if (!identifier) {
		throw new Error('Please specify an identifier, such as an email address');
	}

	if (identifier.includes('@')) {
		identifier = identifier.toLowerCase().trim();
	}

	const query = querystring.stringify(options);

	return BASE_URL + md5Hex(identifier) + (query ? `?${query}` : '');
};
