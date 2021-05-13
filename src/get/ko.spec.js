import {describe, expect, it} from '@jest/globals';
import get from './get.mod.js';


describe(`OB.get.ko`, () => {

    const ko = get.ko;

    it(
        'is a function',
        () => void expect(ko).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            ko('a', object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['b', {a: 1, b: 2, c: 3}, 2],
    ])(
        'gets %p from %p resulting %p',
        (key, object, expected) => expect(ko(key, object)).toEqual(expected),
    );

});
