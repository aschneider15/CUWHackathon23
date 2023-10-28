// imports nostr-tools from the node_modules folder.
// "tools" is the object through which we can interact with
// nostr-tools' functions.
const tools = require('nostr-tools')
const eventCreator = require('./eventCreator')

privKey = 0x3de315e757169d493073245ebb92d7053b3b608cb43f4ddcf43e8a40029ffbb1


help = eventCreator.createEvent(privKey, 1, "hello.")

console.log('event ID: ', help.id)
console.log('event signature: ', help.sig)