import test from 'ava';
import gravatarUrl from './index.js';

test('main', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {size: 200}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200');
});

test('no undefined size', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {size: undefined}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9');
});

test('no undefined rating', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {rating: undefined}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9');
});

test('no undefined default', t => {
	t.is(gravatarUrl('sindresorhus@gmail.com', {default: undefined}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9');
});
