// Minecraft Bedrock WebSocket Server

const WebSocket = require('ws');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wss = new WebSocket.Server({ port: 8000 });
try {
  console.log("Server is running on your_ip:8000");

  wss.on('connection', socket => {
    console.log("A client is opening a connection");

    const command = () => {
      return new Promise((resolve) => {
        rl.question(`Command: /`, (cmd) => {

          // log user details
          //console.log(`\nYour INPUT: /${cmd}`);

          // Send command
          socket.send(JSON.stringify(
            {
              "body": {
                "origin": {
                  "type": "player"
                },
                "commandLine": `${cmd}`,
                "version": 1
              },
              "header": {
                "requestId": "00000000-0000-0000-0000-000000000000",
                "messagePurpose": "commandRequest",
                "version": 1,
                "messageType": "commandRequest"
              }
            }
          ));

          console.log("Command sent\n\n");

          resolve();
        });
      });
    }

    async function askCommands() {
      while (true) {
        await command();
      }
    }
    
    // Run async function
    askCommands();

    socket.on('message', function incoming(message) {
      console.log('\nreceived: %s', message);
    });

    process.on('SIGINT', function() {
      console.log("\nInterrupt Ctrl-C");
      process.exit();
    });
  });

  wss.off;
} catch(E) {
  console.log(E);
}