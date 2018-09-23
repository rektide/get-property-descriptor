"use strict"

const _cache= new WeakMap()

export function getPropertyDescriptor(o, prop){
	let
	  had= _cache.get( o),
	  proto= o,
	  descriptor
	if( had){
		descriptor= had[ prop]
		if( descriptor!== undefined){
			//return {...descriptor}
			return descriptor
		}
	}else{
		had= {}
		_cache.set( o, prop, had)
	}
	while (proto && !(descriptor = Object.getOwnPropertyDescriptor(proto, prop))) {
		proto = Object.getPrototypeOf(proto)
	}
	had[ prop]= descriptor
	return descriptor
}
export default getPropertyDescriptor
