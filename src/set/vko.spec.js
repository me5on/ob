import {describe, expect, it} from '@jest/globals';
import set from './set.mod.js';


describe('OB.set.vko', () => {

    const vko = set.vko;

    it(
        'is a function',
        () => void expect(vko).toBeFun(),
    );

    it('does not modify the provided object', () => {

            const object = {a: 1, b: 2};
            const expected = {a: 1, b: 2, c: 3};

            const actual = vko(3, 'c', object);

            expect(actual).not.toBe(object);
            expect(actual).toEqual(expected);
        },
    );

    it.each([
        [3, 'c', {a: 1, b: 2}, {a: 1, b: 2, c: 3}],
        [4, 'b', {a: 1, b: 2}, {a: 1, b: 4}],
    ])(
        'sets value %p at key %p in object %p resulting %p',
        (val, key, obj, expected) => expect(vko(val, key, obj)).toEqual(expected),
    );

});
