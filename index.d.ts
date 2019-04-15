import {LiteralUnion} from 'type-fest';

declare namespace gravatarUrl {
	interface Options {
		/**
		[Size](https://en.gravatar.com/site/implement/images/#size) of the image. Values: `1..2048`.

		@default 80
		*/
		readonly size?: number;

		/**
		[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the email didn't match any Gravatar profile. Either a ustom URL or [`404`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=404), [`mm`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=mm), [`identicon`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=identicon), [`monsterid`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=monsterid), [`wavatar`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=wavatar), [`retro`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=retro), [`blank`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=blank).

		@default 'https://gravatar.com/avatar/00000000000000000000000000000000'
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
declare function gravatarUrl(
	email: string,
	options?: gravatarUrl.Options
): string;

export = gravatarUrl;
