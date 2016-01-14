var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var full_data1 = "";
var full_data2 = "";
var full_data3 = "";
// var arr = [];

// http.get(url1,(res) =>{
// 	res.on("data",(data)=>{
// 		// console.log(data.toString());
// 		full_data1+= data;
// 	})
// 	res.on("end",()=>arr[0] = full_data1);
// })

// http.get(url2,(res) =>{
// 	res.on("data",(data)=>{
// 		// console.log(data.toString());
// 		full_data2+= data;
// 	})
// res.on("end",()=>arr[1] = full_data2);
// })

// http.get(url3,(res) =>{
// 	res.on("data",(data)=>{
// 		// console.log(data.toString());
// 		full_data3+= data;
// 	})
// res.on("end",()=>arr[2] = full_data3);
// })



http.get(url1,(res)=>{
	res.on("data",(data)=>{
		full_data1+=data
	})
	res.on("end",()=>{
		console.log(full_data1);
		//2nd get
		http.get(url2,(res)=>{
			res.on("data",(data)=>{
				full_data2+=data;
			})
			res.on("end",()=>{
				console.log(full_data2);
				http.get(url3,(res)=>{
					res.on("data",(data)=>{
						full_data3+=data;
					})
					res.on("end",()=>{
						console.log(full_data3);
					})
				})
			})
		})

	})
})












