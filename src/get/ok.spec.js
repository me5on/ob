import {describe, expect, it} from '@jest/globals';
import get from './get.mod.js';


describe(`OB.get.ok`, () => {

    const ok = get.ok;

    it(
        'is a function',
        () => void expect(ok).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            ok(object, 'a');
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['b', {a: 1, b: 2, c: 3}, 2],
    ])(
        'gets %p from %p resulting %p',
        (key, object, expected) => expect(ok(object, key)).toEqual(expected),
    );

});
