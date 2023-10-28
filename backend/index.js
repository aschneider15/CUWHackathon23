// imports nostr-tools from the node_modules folder.
// "tools" is the object through which we can interact with
// nostr-tools' functions.
const tools = require('nostr-tools')

let sk = tools.generatePrivateKey() // `sk` is a hex string
let pk = tools.getPublicKey(sk) // `pk` is a hex string

console.log(sk)
console.log(pk)