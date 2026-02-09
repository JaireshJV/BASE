const os = require("os") ;

console.log(os.type(),'type') ;
console.log(os.homedir(),'home_directory');
console.log(os.version(),'version');
console.log(os.userInfo(),'user_info');
console.log(os.arch(),'arch');
console.log(os.cpus(),'cpus');
console.log(os.platform(),'platform');
console.log(os.freemem(),"freemem");
console.log(os.totalmem(),'totalmem');
console.log(Math.round(os.freemem() / (1024 * 1024 * 1024 )),'gb' );
console.log(Math.round(os.totalmem() / (1024 * 1024 * 1024 )),'gb' );
console.log(os.hostname(),'hostname');
console.log(os.uptime()/60,'uptime');












