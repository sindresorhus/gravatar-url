# gravatar-url

> Get the URL to a [Gravatar](https://en.gravatar.com) image from an identifier, such as an email

## Install

```
$ npm install gravatar-url
```

## Usage

```js
import gravatarUrl from 'gravatar-url';

gravatarUrl('sindresorhus@gmail.com', {size: 200});
//=> 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200'
```

## API

### gravatarUrl(identifier, options?)

#### identifier

Type: `string`

Identifier for which to get the Gravatar image.

This will typically be an email matching a Gravatar profile, but can technically be any string.

The Gravatar service only sees a hash of the identifier, so you could actually use this to get pseudo-random avatars for any entity, e.g. based on its ID.

Note that if the identifier contains an `@`, it is assumed to be an email, and will therefore be lower-cased and trimmed before hashing, as per the Gravatar instructions - otherwise it will be hashed as-is.

#### options

Type: `object`

##### size

Type: `number`\
Default: `80`\
Values: `1..2048`

[Size](https://en.gravatar.com/site/implement/images/#size) of the image.

##### default

Type: `string`\
Default: [This image](https://gravatar.com/avatar/00000000000000000000000000000000)\
Values: Custom URL or [`404`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=404), [`mm`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=mm), [`identicon`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=identicon), [`monsterid`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=monsterid), [`wavatar`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=wavatar), [`retro`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=retro), [`blank`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=blank)

[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the identifier didn't match any Gravatar profile.

##### rating

Type: `string`\
Default: `g`\
Values: `g` `pg` `r` `x`

Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.

## Related

- [get-gravatar](https://github.com/sindresorhus/get-gravatar) - Get a Gravatar image
