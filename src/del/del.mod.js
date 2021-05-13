const del = (

    _ => del

);


const ko = (

    (key, object) => {
        object = {...object};
        delete object[key];
        return object;
    }

);


const ko$ = (

    (key, object) => {
        delete object[key];
        return object;
    }

);


const ok = (

    (object, key) => {
        object = {...object};
        delete object[key];
        return object;
    }

);


const ok$ = (

    (object, key) => {
        delete object[key];
        return object;
    }

);


Object.assign(
    del,
    {
        ok,
        ko,
        ko$,
        ok$,
    },
);


export default del;
