fs = require('fs');
path = require('path')

path_var = process.argv[2];
ext = '.'+ process.argv[3] ;

fs.readdir(path_var,(err,list)=>{
	if(!err){
		for(var i = 0;i<list.length;i++){
			if (path.extname(list[i])===ext){
				console.log(list[i]);
			}
		}

	}
})