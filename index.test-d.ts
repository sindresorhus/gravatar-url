import {expectType, expectError} from 'tsd';
import gravatarUrl from './index.js';

expectType<string>(gravatarUrl('sindresorhus@gmail.com'));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {default: '404'}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {default: 'blank'}));
expectType<string>(
	gravatarUrl('sindresorhus@gmail.com', {default: 'identicon'})
);
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {default: 'mm'}));
expectType<string>(
	gravatarUrl('sindresorhus@gmail.com', {default: 'monsterid'})
);
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {default: 'retro'}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {default: 'wavatar'}));
expectType<string>(
	gravatarUrl('sindresorhus@gmail.com', {default: 'https://example.com'})
);
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {size: 200}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {rating: 'g'}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {rating: 'pg'}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {rating: 'r'}));
expectType<string>(gravatarUrl('sindresorhus@gmail.com', {rating: 'x'}));
expectError(gravatarUrl('sindresorhus@gmail.com', {rating: 'foo'}));
