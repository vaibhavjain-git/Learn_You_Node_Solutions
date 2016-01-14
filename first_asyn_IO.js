var fs = require('fs');
fs.readFile(process.argv[2],(err,data)=>{
	if(!err){
		stringdata = data.toString()
		arraydata = stringdata.split('\n');
	console.log(arraydata.length-1);
}
})