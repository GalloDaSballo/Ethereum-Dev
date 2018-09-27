import Web3 from 'web3'

//We assume that metamask has already injected a instance
// const web3 = new Web3(window.web3.currentProvider)
//Next.js will throw an error because of server side rendering
//In ssr you don't have access to the window variable

let web3

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //We are in the browser & metamsk is running
  web3 = new Web3(window.web3.currentProvider)
} else {
  //We are on the server or the user is not running metamask
  //Via infura we are going to use our own provider
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/79f047cd8b7e45a894ecd94adc4bc678'
  )
  web3 = new Web3(provider)
}

export default web3
