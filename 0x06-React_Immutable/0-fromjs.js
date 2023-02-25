import { fromJS } from 'immutable.js';

export default getImmutableObject = (object) => {
    return fromJS(object);
}