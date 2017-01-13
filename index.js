'use strict';
const querystring = require('querystring');
const md5Hex = require('md5-hex');

const BASE_URL = 'https://gravatar.com/avatar/';

module.exports = (email, opts) => {
	if (email.indexOf('@') === -1) {
		throw new Error('Please specify an email');
	}

	const query = querystring.stringify(opts);

	return BASE_URL + md5Hex(email.toLowerCase().trim()) + (query ? `?${query}` : '');
};
