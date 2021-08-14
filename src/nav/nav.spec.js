/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import nav from './nav.fn.js';


describe('OB.nav', () => {

    it(
        'is a function',
        () => void expect(nav).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            nav('a', object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['b', {a: 1, b: 2, c: 3}, 2],
        ['a.b.c', {a: {b: {c: 'result'}}}, 'result'],
        [['a', 'b', 'c'], {a: {b: {c: 'result'}}}, 'result'],
        [[0, 0, 0], [[[0]]], 0],
        ['a.b.c', {a: {}}, void (1)],
        ['a.b.c', {a: {b: null}}, null],
    ])(
        'gets %p from %p resulting %p',
        (key, object, expected) => expect(nav(key, object)).toEqual(expected),
    );

});
