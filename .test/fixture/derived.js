import Base from "./base.js"

export class Derived extends Base{
	static get ShoutOut(){
		return "You are the newly derived way to go!"
	}
	shoutOut(){
		console.log(this.prototype.ShoutOut)
		return this.prototype.ShoutOut
	}
}
export default Derived
