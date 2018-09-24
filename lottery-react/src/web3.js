/**
 * Manager the web3 library
 */

import Web3 from 'web3'

//the new instance of web3 gets created by the class Web3 while using the currentProvider from the metamask injected instance of web3
const web3 = new Web3(window.web3.currentProvider);

export default web3
