var http = require('http');
var url_path = process.argv[2];
var full_data;
http.get(url_path,(res) =>{
	res.on("data",(data)=>{
		console.log(data.toString());
		full_data+= data;
	})
	// res.on("end",()=>console.log(full_data));
})