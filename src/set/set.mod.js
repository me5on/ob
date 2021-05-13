// noinspection DuplicatedCode


const set = (

    _ => set

);


const kov = (

    (key, object, value) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const kov$ = (

    (key, object, value) => {
        object[key] = value;
        return object;
    }

);


const kvo = (

    (key, value, object) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const kvo$ = (

    (key, value, object) => {
        object[key] = value;
        return object;
    }

);


const okv = (

    (object, key, value) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const okv$ = (

    (object, key, value) => {
        object[key] = value;
        return object;
    }

);


const ovk = (

    (object, value, key) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const ovk$ = (

    (object, value, key) => {
        object[key] = value;
        return object;
    }

);


const vko = (

    (value, key, object) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const vko$ = (

    (value, key, object) => {
        object[key] = value;
        return object;
    }

);


const vok = (

    (value, object, key) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


const vok$ = (

    (value, object, key) => {
        object[key] = value;
        return object;
    }

);


Object.assign(
    set,
    {
        kvo, kvo$,
        vko, vko$,
        kov, kov$,
        okv, okv$,
        ovk, ovk$,
        vok, vok$,
    },
);


export default set;
