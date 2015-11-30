import Immutable from 'immutable';
import isObject from 'lodash/lang/isObject';

export function deepConvert(val) {
	val = Immutable.fromJS(val);
	return (isObject(val) && val['toJSON']) ? Immutable.fromJS(val.toJSON()) : val;
}