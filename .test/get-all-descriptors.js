import tape from "tape"
import getAllDescriptors from "../get-all-descriptors.js"

import Base from "./fixture/base"
import Derived from "./fixture/derived"

export function getAllDescriptorsTests(){
	walkDerived()
}
export default getAllDescriptorsTests

export function walkDerived(){
	tape( "Walk all derived's properties", function( t){
		const
		  derived= new Derived(),
		  expect = new Set([
			Derived.prototype.shoutOut,
			Base.prototype.hiFive
		])
		for( const el of getAllDescriptors( derived)){
			expect.delete( el.value)
		}
		t.equal( expect.size, 0, "we have seen shoutOut & hiFive")
		t.end()
	})
}

if( typeof require!== "undefined"&& require.main=== module){
	getAllDescriptorsTests()
}
