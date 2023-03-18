const os = require('os');

// Get the network interfaces of the machine
const networkInterfaces = os.networkInterfaces();

// Loop through the interfaces to find the IPv4 address
let ipAddress;
Object.keys(networkInterfaces).forEach((interfaceName) => {
  networkInterfaces[interfaceName].forEach((interfaceInfo) => {
    if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
      ipAddress = interfaceInfo.address;
    }
  });
});

console.log('IP address:', ipAddress);