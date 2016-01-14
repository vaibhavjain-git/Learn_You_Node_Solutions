// var mymodule = require('./mod.js')

// var dir = process.argv[2]
// var ext = process.argv[3]

// mymodule(dir, ext, function(err, list) {
//   if (err) {
//    throw err;
//   }
//   else list.forEach(function (file) {
//    console.log(file);
//   })
// });

var mymodule = require('./mod');
var dir = process.argv[2];
var ext = process.argv[3];
mymodule(dir,ext,(err,list)=>{
	if(!err){
		for (var i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
	}
	else{
		throw err;
	}
})