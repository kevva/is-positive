import test from 'ava';
import m from './';

test(t => {
	t.true(m(1));
	t.false(m(0));
	t.false(m(-1));
	t.false(m('1'));
	t.true(m(new Number(1)));
	t.false(m(NaN));
	t.false(m(true));
	t.false(m());
});
