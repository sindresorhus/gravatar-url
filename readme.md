# gravatar-url [![Build Status](https://travis-ci.org/sindresorhus/gravatar-url.svg?branch=master)](https://travis-ci.org/sindresorhus/gravatar-url)

> Get the URL to a Gravatar image from an email


## Install

```
$ npm install gravatar-url
```


## Usage

```js
const gravatarUrl = require('gravatar-url');

gravatarUrl('sindresorhus@gmail.com', {size: 200});
//=> 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200'
```


## API

### gravatarUrl(email, [options])

#### email

Type: `string`

Email matching a Gravatar profile.

#### options

Type: `Object`

##### size

Type: `number`<br>
Default: `80`<br>
Values: `1..2048`

[Size](https://en.gravatar.com/site/implement/images/#size) of the image.

##### default

Type: `string`<br>
Default: [This image](https://gravatar.com/avatar/00000000000000000000000000000000)<br>
Values: Custom URL or [`404`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=404), [`mm`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=mm), [`identicon`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=identicon), [`monsterid`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=monsterid), [`wavatar`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=wavatar), [`retro`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=retro), [`blank`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=blank)

[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the email didn't match any Gravatar profile.

##### rating

Type: `string`<br>
Default: `g`<br>
Values: `g`, `pg`, `r`, `x`

Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.


## Related

- [get-gravatar](https://github.com/sindresorhus/get-gravatar) - Get a Gravatar image


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
