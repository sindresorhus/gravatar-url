import querystring from 'node:querystring';
import md5Hex from 'md5-hex';

const BASE_URL = 'https://gravatar.com/avatar/';

export default function gravatarUrl(identifier, options) {
	if (!identifier) {
		throw new Error('Please specify an identifier, such as an email address');
	}

	if (identifier.includes('@')) {
		identifier = identifier.toLowerCase().trim();
	}

	const query = querystring.stringify(options);

	return BASE_URL + md5Hex(identifier) + (query ? `?${query}` : '');
}
