import md5Hex from 'md5-hex';

export default function gravatarUrl(identifier, options) {
	if (!identifier) {
		throw new Error('Please specify an identifier, such as an email address');
	}

	if (identifier.includes('@')) {
		identifier = identifier.toLowerCase().trim();
	}

	const baseUrl = new URL('https://gravatar.com/avatar/');
	baseUrl.pathname += md5Hex(identifier);
	baseUrl.search = new URLSearchParams(options);

	return baseUrl.toString();
}
