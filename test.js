import test from 'ava';
import gravatarUrl from './index.js';

test('main', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {size: 200}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200');
});

test('options are optional', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com'), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9');
});

test('filters out undefined options', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {size: undefined, default: '404'}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?default=404');
});
