"use strict"

export function getPropertyDescriptor(o, prop){
	var proto = o,
	  descriptor
	while (proto && !(descriptor = Object.getOwnPropertyDescriptor(proto, prop))) {
		proto = Object.getPrototypeOf(proto)
	}
	return descriptor
}
export defualt getPropertyDescriptor
