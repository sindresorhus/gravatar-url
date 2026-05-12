import md5Hex from 'md5-hex';

export default function gravatarUrl(identifier, options) {
	if (!identifier) {
		throw new Error('Please specify an identifier, such as an email address');
	}

	if (identifier.includes('@')) {
		identifier = identifier.toLowerCase().trim();
	}

	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(options)) {
		if (value !== null && value !== undefined) {
			search.set(key, value);
		}
	}

	const baseUrl = new URL('https://gravatar.com/avatar/');
	baseUrl.pathname += md5Hex(identifier);
	baseUrl.search = search;

	return baseUrl.toString();
}
