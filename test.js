import test from 'ava';
import m from './';

test(t => {
	t.is(m('sindresorhus@gmail.com', {size: 200}), 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200');
});
