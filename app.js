var fs=require("fs") //require a file system

var filepath="./sample.txt"//getting file path

//console.log("Start Reading File !!!!!")//

/*var data=fs.readFileSync(filepath)*/
/*var data=fs.readFile(filepath,function(err,data){ //reads file async
	if(err){
	
		console.log(err)
	}
	console.log(data.toString())
})*/


//console.log("Done Reading File !!!!")
//console.log("start writing to a file..........")

fs.readFile(filepath,function(err,data){ //reads file async
	if(err){
	
		console.log(err)
	}
fs.writeFile('./output.txt',data,function(err,data){
	if(err){
		throw err;
		console.log(err)
	}

})

})
console.log("done writing to a file!!!!!!!!!!!!!!!!")