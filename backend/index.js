const NDK = require('ndk');

ndkInstance = new NDK({
    explicitRelayUrls: ["wss://relay.nostrss.re", "wss://nostr.lnproxy.org"],
});

console.log('Hello ');

