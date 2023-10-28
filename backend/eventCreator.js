const tools = require('nostr-tools')

exports.createEvent = function(priv_key, kind, mssg) {
    let event = {
        kind: kind,
        created_at: Math.floor(Date.now() / 1000),
        tags: [],
        content: mssg,
        pubkey: tools.getPublicKey(priv_key),
      }
    
    event.id = tools.getEventHash(event)
    event.sig = tools.getSignature(event, pk)

    let ok = tools.validateEvent(event)
    let veryOk = tools.verifySignature(event)
    
    if(ok && veryOk) {
        return event
    }
}