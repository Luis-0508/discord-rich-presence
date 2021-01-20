const presence = require("discord-rpc");
const client = new presence.Client({
    transport: 'ipc'
});
const config = require("./config.json")

// Tells you when the client is online
console.log("Ready!")

// Function to display the RPC
function customRPC() {
    client.on('ready', () => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: config.details,
                buttons: [{
                    label: config.label,
                    url: config.url
                }, {
                    label: config.label2,
                    url: config.url2
                }],
                assets: {
                    large_image: config.large_image,
                    large_text: config.large_text
                }
            }
        })
    })
    client.login({
        clientId: config.clientId
    }).catch(console.error);
}

// Executes the function
customRPC()