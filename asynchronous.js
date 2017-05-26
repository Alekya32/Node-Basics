function test(){
	console.log("You are testing callbacks")
}

function sample(callback,name){
	callback();
	console.log(name)
}
sample(test,"Hii");