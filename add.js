cla = process.argv;
var result = 0
for (var i = 2;i<cla.length;i++){
	result = Number(cla[i]) + result 
}
console.log(result)