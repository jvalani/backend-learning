const os = require("os");

console.log(os.platform());      // Operating system (win32, linux, darwin)
console.log(os.arch());          // CPU architecture (x64)
console.log(os.hostname());      // Computer name
console.log(os.userInfo());      // Current user info
console.log(os.homedir());       // Home directory
console.log(os.tmpdir());        // Temp folder

console.log(os.type());          // OS type
console.log(os.release());       // OS version
console.log(os.uptime());        // System uptime in seconds

console.log(os.totalmem());      // Total RAM (bytes)
console.log(os.freemem());       // Free RAM (bytes)

console.log(os.cpus());          // CPU details
console.log(os.networkInterfaces()); // Network info