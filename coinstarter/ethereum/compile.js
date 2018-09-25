/**
 * A better compile file that will compile the file and then save it to a file
 */

//We will have 2 files: The factory and the campaign

/**
 * Steps to be taken
 * 1- Delete the build folder contents
 * 2- Read the src file
 * 3- Compile it
 * 4- Write the output to the folder
 */

const path = require('path')
const solc = require('solc')
const fs = require('fs-extra') //Community made fs with some more extras

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath) //delete all of the folder and all the files

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
const output = solc.compile(source, 1).contracts //output will contain the two contracts

//Create the build directory
fs.ensureDirSync(buildPath)

console.log("Output ", output)
for(let contract in output) {
  //We are iterating over the keys of the output, the 2 contracts in this case
  console.log("Contract ", contract)
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  )
}
