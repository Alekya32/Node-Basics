var fs=require('fs');

//Direct way of reading a file
var content=fs.readFile("read.txt",function(err,content){
	if(err){
		console.log(err);
	}
	console.log(content.toString());
})


//Indirect way of reading file
var filepath='reads.txt'
var indirectfile=fs.readFile(filepath,function(err,indirectfile){
		if(err){
			console.log(err);
		}
		console.log(indirectfile.toString());
})


//Sync of reading file

var filepath='reads.txt'
var syncfile=fs.readFileSync(filepath)
console.log("Sync call................")
console.log(syncfile.toString()); 


//writing to file
fs.writeFile('out.txt',filepath,function(err,indirectfile){
	if(err){
		console.log(err)
	}
}) 

//WritingSync to file
var outwrite="outwrite.txt"
fs.writeFileSync('outwrite.txt',outwrite)
console.log(outwrite.toString())

//Delete file

/*fs.unlink('outwrite.txt',function(err){
	if(err){
		throw err;
		console.log("File deleted");
	}
}) 
*/
//Delete file unlinkSync
fs.unlinkSync('outwrite.txt',outwrite)
console.log("Deleting file....")