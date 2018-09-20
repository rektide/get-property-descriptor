"use strict"

export function *getAllDescriptors( o, {onlyVisible, omitSymbols, omitDescriptors}= {}){
	let cursor= o
	while( cursor){
		if( !omitDescriptors){
			let names= Object.getOwnPropertyNames( cursor)
			for(let name of names){
				if(descriptors[name] === undefined){
					let descriptor= Object.getOwnPropertyDescriptor(cursor, name)
					if(!visibleOnly || descriptor.enumerable){
						yield descriptor
					}
				}
			}
		}
		if( !symbols){
			let symbols= Object.getOwnPropertySymbols( cursor)
			for(let symbol of symbols){
				if(descriptors[symbol] === undefined){
					let descriptor= Object.getOwnPropertyDescriptor(cursor, name)
					if(!visibleOnly || descriptor.enumerable){
						yield descriptor
					}
				}
			}
		}
		cursor= Object.getPrototypeOf(cursor)
	}

}
export default getAllDescriptors
