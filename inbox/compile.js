/**
 * Include 2 modules
 */
const path = require('path')
const fs = require('fs')

const solc = require('solc')


//Path that works universally with any OS
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

// let contract = solc.compile(source,1).contracts[':Inbox']
// console.log(contract)
// module.exports = contract
module.exports = solc.compile(source,1).contracts[':Inbox']
