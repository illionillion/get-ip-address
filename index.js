import { networkInterfaces } from 'os'
import fs from 'fs'
import ip from 'ip'


const nets = networkInterfaces()
fs.writeFileSync('./ip.json', JSON.stringify(nets))

console.log(ip.address());