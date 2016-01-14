var net = require('net')  
var strftime = require('strftime')
     var server = net.createServer((socket)=> {  
       // socket handling logic 
       var date = new Date();
       socket.end((strftime('%F %R', date)))
       


     })  
     server.listen(process.argv[2])


     // "2016-01-13 16:39"