"use strict"

module.exports= function getPropertyDescriptor(o, visibleOnly){
	var cursor= o,
	  descriptors= {}
	while (cursor){
		var
		  names= Object.getOwnPropertyNames(cursor),
		  symbols= Object.getOwnPropertySymbols(cursor)
		for(var name of names){
			if(descriptors[name] === undefined){
				var descriptor= Object.getOwnPropertyDescriptor(cursor, name)
				if(!visibleOnly || descriptor.enumerable){
					descriptors[name]= descriptor
				}
			}
		}
		for(var symbol of symbols){
			if(descriptors[symbol] === undefined){
				var descriptor= Object.getOwnPropertyDescriptor(cursor, name)
				if(!visibleOnly || descriptor.enumerable){
					descriptors[name]= descriptor
				}
			}
		}
		cursor= Object.getPrototypeOf(cursor)
	}
	return descriptors
}
