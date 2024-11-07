const os=require('os')
console.log("Platform:"+os.platform());
console.log("CPU architeture:"+os.arch());
console.log("NO of CPUs:"+os.cpus().length);
console.log("Free memory:"+os.freemem());
console.log("Total memory:"+os.totalmem());
console.log("User info:"+os.userInfo());
console.log("Network interfaces:",os.networkInterfaces());