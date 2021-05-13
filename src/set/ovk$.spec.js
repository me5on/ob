import {describe, expect, it} from '@jest/globals';
import set from './set.mod.js';


describe('OB.set.ovk$', () => {

    const ovk$ = set.ovk$;

    it(
        'is a function',
        () => void expect(ovk$).toBeFun(),
    );

    it('modifies the provided object', () => {

            const object = {a: 1, b: 2};
            const expected = {a: 1, b: 2, c: 3};

            const actual = ovk$(object, 3, 'c');

            expect(actual).toBe(object);
            expect(actual).toEqual(expected);
        },
    );

    it.each([
        [3, 'c', {a: 1, b: 2}, {a: 1, b: 2, c: 3}],
        [4, 'b', {a: 1, b: 2}, {a: 1, b: 4}],
    ])(
        'sets value %p at key %p in object %p resulting %p',
        (val, key, obj, expected) => expect(ovk$(obj, val, key)).toEqual(expected),
    );

});
