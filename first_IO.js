var fs = require('fs');
var data = fs.readFileSync(process.argv[2])
a = data.toString()
arr_length = a.split('\n').length;
console.log(arr_length-1);

