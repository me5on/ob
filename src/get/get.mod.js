const get = (

    _ => get

);


const ko = (

    (key, object) => (

        // difference from ?. is this one will return null for null object
        null === object
            ? null
            : object?.[key]
    )

);


const ok = (

    (object, key) => (

        // difference from ?. is this one will return null for null object
        null === object
            ? null
            : object?.[key]
    )

);


Object.assign(
    get,
    {
        ko,
        ok,
    },
);


export default get;
