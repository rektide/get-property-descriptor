export class Base{
	static get ShoutOut(){
		return "You are the way to go!"
	}
	shoutOut(){
		console.log(this.prototype.ShoutOut)
		return this.prototype.ShoutOut
	}
	hiFive(){
		return "^5"
	}
}
export default Base
