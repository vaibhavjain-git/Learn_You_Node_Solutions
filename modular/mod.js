// var fs = require('fs')

// module.exports = function(dirname, filter, callback) {
// var regex = new RegExp('\\.' + filter + '$')    

// var filelist = new Array()
// var i = 0

// fs.readdir(dirname, function (err, list) {

//     if (err) {
//     return callback(err);
//     }
//     else list.forEach(function (file) {
//     if (regex.test(file))
//         filelist[i] = file;
//         i += 1;
//     })
//     return callback(null, filelist)

// })

// };

var fs = require('fs');
var path = require('path');
var j = 0;
var filelist = [];
module.exports = function(dirname,filter,callback){
	filter = '.'+filter;
	// console.log(dirname)
	// console.log(filter)
	
	// 	else{
	// 	console.log(list);
	// 	for (var i = 0; i < list.length; i++) {
	// 		// console.log(path.extname(list[i]))
	// 		if(path.extname(list[i])===filter){
	// 			console.log(list[i]);
	// 			filelist[j] = list[i];
	// 			j++;
	// 		}
	// 	}
	// }})
	// return callback(null,filelist);
	fs.readdir(dirname,(err,list)=>{
		if(err){
			return callback(err);
		}
		else{
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i])===filter) { 
					filelist[j] = list[i];
					j++;
				};
			};
		}
		return callback(null,filelist);
	})
}

	// console.log(filelist);
				









