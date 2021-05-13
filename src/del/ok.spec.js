import {describe, expect, it} from '@jest/globals';
import del from './del.mod.js';


describe(`OB.del.ok`, () => {

    const ok = del.ok;

    it(
        'is a function',
        () => void expect(ok).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            expect(ok(object, 'a')).not.toBe(object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['b', {a: 1, b: 2, c: 3}, {a: 1, c: 3}],
    ])(
        'removes %p from %p resulting %p',
        (key, object, expected) => expect(ok(object, key)).toEqual(expected),
    );

});
