module.exports= function getPropertyDescriptor(o, prop){
	var proto = o,
	  descriptor
	while (proto && !(descriptor = getOwnPropertyDescriptor(proto, name))) {
		proto = Object.getPrototypeOf(proto)
	}
	return descriptor
}
