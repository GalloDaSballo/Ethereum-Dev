/**
 * Include 2 modules
 */
const path = require('path')
const fs = require('fs')
const solc = require('solc')


//Path that works universally with any OS
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol')
const source = fs.readFileSync(lotteryPath, 'utf8')

// let contract = solc.compile(source,1).contracts[':lottery']
// console.log(contract)
// module.exports = contract
module.exports = solc.compile(source,1).contracts[':Lottery']
