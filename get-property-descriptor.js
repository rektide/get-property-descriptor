"use strict"

export function getPropertyDescriptor(o, prop){
	let
	  proto= o,
	  descriptor
	while (proto && !(descriptor = Object.getOwnPropertyDescriptor(proto, prop))) {
		proto = Object.getPrototypeOf(proto)
	}
	return descriptor
}
export default getPropertyDescriptor
