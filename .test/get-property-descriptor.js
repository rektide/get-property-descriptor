import tape from "tape"
import getPropertyDescriptor from "../get-property-descriptor.js"

import Base from "./fixture/base"
import Derived from "./fixture/base"

export function getPropertyDescriptorTests(){
	findBaseShoutOut()
	findDerivedShoutOut()
	findBaseHiFive()
	findDerivedHiFive()
}
export default getPropertyDescriptorTests

export function findBaseShoutOut(){
	tape("Get shout out on base", function( t){
		const
		  base= new Base(),
		  descriptor= getPropertyDescriptor( base, "shoutOut")
		t.equal( descriptor.value, Base.prototype.shoutOut, "shout out is from base")
		t.equal( descriptor.value, base.shoutOut, "found base shout out")
		t.end()
	})
}
export function findDerivedShoutOut(){
	tape("Get shout out on derived", function( t){
		const
		  derived= new Derived(),
		  descriptor= getPropertyDescriptor( derived, "shoutOut")
		t.equal( descriptor.value, Derived.prototype.shoutOut, "shout out is from derived")
		t.equal( descriptor.value, derived.shoutOut, "found derived shout-out")
		t.end()
	})
}
export function findBaseHiFive(){
	tape("Get hi five on base", function( t){
		const
		  base= new Base(),
		  descriptor= getPropertyDescriptor( base, "hiFive")
		t.equal( descriptor.value, Base.prototype.hiFive, "hi five is from base")
		t.equal( descriptor.value, base.hiFive, "found base hi five")
		t.end()
	})
}
export function findDerivedHiFive(){
	tape("Get hi five on derived", function( t){
		const
		  derived= new Derived(),
		  descriptor= getPropertyDescriptor( derived, "hiFive")
		t.equal( descriptor.value, Base.prototype.hiFive, "hi five is again from base - we recursed!")
		t.equal( descriptor.value, derived.hiFive, "found derived hi five")
		t.end()
	})
}

if( typeof require!== "undefined"&& require.main=== module){
	runGetDescriptorTests()
}
