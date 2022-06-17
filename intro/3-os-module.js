const os=require('os');

//info about current user
const user =os.userInfo()
console.log(user)


//method return the system uptime in seconds 
console.log(`the system uptime is ${os.uptime()} seconds`)
console.log(5/2)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:(((os.totalmem()/1024)/1024)/1024),
    freeMem:(((os.freemem()/1024)/1024)/1024)
}

//! Note:
/*
const total_memory = os.totalmem();
const total_mem_in_kb = total_memory/1024;
const total_mem_in_mb = total_mem_in_kb/1024;
const total_mem_in_gb = total_mem_in_mb/1024;

*/
console.log(currentOS)

