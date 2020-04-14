const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1111 });
try{
  console.log("Server is ready...");

  wss.on('connection', function connection(ws) {
  console.log("New connection with a client:");

  ws.send(JSON.stringify(
    {
      "body": {
        "origin": {
          "type": "player"
        },
        "commandLine": "title @a subtitle connection was successfully",
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
    ws.send(JSON.stringify(
    {
      "body": {
        "origin": {
          "type": "player"
        },
        "commandLine": "title @a title WEBSOCKET",
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
      ws.send(JSON.stringify(
        {
          "body": {
            "origin": {
              "type": "player"
            },
            "commandLine": "execute @a ~ ~ ~ summon tnt",
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
        ws.send(JSON.stringify(
          {
            "body": {
              "origin": {
                "type": "player"
              },
              "commandLine": "execute @a ~ ~ ~ summon tnt",
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
          ws.send(JSON.stringify(
            {
              "body": {
                "origin": {
                  "type": "player"
                },
                "commandLine": "execute @a ~ ~ ~ summon tnt",
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
            ws.send(JSON.stringify(
              {
                "body": {
                  "origin": {
                    "type": "player"
                  },
                  "commandLine": "execute @a ~ ~ ~ summon tnt",
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

    console.log("Sent all commands to the client");
    ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.off;
  });
});
}catch(E){
  console.log(E);
}