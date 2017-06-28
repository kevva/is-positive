/* eslint no-new-wrappers: 0 */
import test from 'ava';
import m from './';

test(t => {
	t.true(m(1));
	t.true(m(new Number(1)));
	t.false(m(0));
	t.false(m(-1));
	t.true(m('1'));
	t.false(m(NaN));
	t.true(m(true));
	t.false(m());
});
