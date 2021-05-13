import get from '../get/get.mod.js';


const DOT = '.';

const {isArray} = Array;
const isString = $ => String($) === $;


const navigate = (

    (path, object) => (

        isArray(path)
            ? path.reduce(get.ok, object)
            : (
                isString(path) && path.includes(DOT)
                    ? navigate(path.split(DOT), object)
                    : get.ok(object, path)
            )

    )

);


export default navigate;
