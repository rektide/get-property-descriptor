"use strict"

export function *getAllDescriptors( o, {onlyVisible, omitSymbols, omitDescriptors}= {}){
	let cursor= o
	const seen = new Set()
	while( cursor&& cursor!== Object.prototype&& cursor!== Function.prototype){
		if( !omitDescriptors){
			let names= Object.getOwnPropertyNames( cursor)
			for(let name of names){
				if( seen.has( name)){
					continue
				}
				seen.add( name)
				let descriptor= Object.getOwnPropertyDescriptor( cursor, name)
				if( !onlyVisible|| descriptor.enumerable){
					descriptor.name = name
					yield descriptor
				}
			}
		}
		if( !omitSymbols){
			let symbols= Object.getOwnPropertySymbols( cursor)
			for(let symbol of symbols){
				if( seen.has( symbol)){
					continue
				}
				seen.add( symbol)
				let descriptor= Object.getOwnPropertyDescriptor( cursor, symbol)
				if( !onlyVisible|| descriptor.enumerable){
					descriptor.symbol = symbol
					yield descriptor
				}
			}
		}
		cursor= Object.getPrototypeOf(cursor)
	}

}
export default getAllDescriptors
