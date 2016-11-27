"use strict"

module.exports= function getPropertyDescriptor(o){
	var cursor= o,
	  descriptors= {}
	while (cursor){
		var
		  names= Object.getOwnPropertyNames(cursor),
		  symbols= Object.getOwnPropertySymbols(cursor)
		for(var name of names){
			if(descriptors[name] === undefined){
				descriptors[name]= Object.getOwnPropertyDescriptor(cursor, name)
			}
		}
		for(var symbol of symbols){
			if(descriptors[symbol] === undefined){
				descriptors[symbol]= Object.getOwnPropertyDescriptor(cursor, symbol)
			}
		}
		cursor= Object.getPrototypeOf(cursor)
	}
	return descriptors
}
