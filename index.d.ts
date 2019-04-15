import {LiteralUnion} from 'type-fest';

declare namespace GravatarUrl {
	interface Options {
		/**
		[Size](https://en.gravatar.com/site/implement/images/#size) of the image. Values: `1..2048`.

		@default 80
		*/
		readonly size?: number;

		/**
		[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the email didn't match any Gravatar profile. Default: [This image](http://www.gravatar.com/avatar/00000000000000000000000000000000).
		*/
		readonly default?: LiteralUnion<
			'404' | 'mm' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'blank',
			string
		>;

		/**
		Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.

		@default 'g'
		*/
		readonly rating?: 'g' | 'pg' | 'r' | 'x';
	}
}

/**
Get the URL to a Gravatar image from an email.

@param email - Email matching a Gravatar profile.

@example
```
import gravatarUrl = require('gravatar-url');

gravatarUrl('sindresorhus@gmail.com', {size: 200});
//=> 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200'
```
*/
declare function gravatarUrls(
	email: string,
	options?: GravatarUrl.Options
): string;

export = gravatarUrls;
