/* eslint-disable new-cap */


import {describe, expect, it} from '@jest/globals';
import OB from './index.js';


describe('library OB', () => {

    it(
        'OB returns itself for trivial call',
        () => void expect(OB()).toBe(OB),
    );

    const names = ['get', 'set', 'del'];

    describe.each(names)('module', name => { // eslint-disable-line no-shadow

        describe(`OB.${name}`, () => {

            const mod = OB[name];

            it(
                'is a function',
                () => void expect(mod).toBeFun(name),
            );


            it(
                `${name} returns itself for trivial call`,
                () => void expect(mod()).toBe(mod),
            );


        });
    });

    describe('nav', () => {

        it(
            'is a function',
            () => void expect(OB.nav).toBeFun('nav'),
        );

    });

});
