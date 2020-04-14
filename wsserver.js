const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1111 });
try{
  console.log("Server is running on your_ip:1111");

  wss.on('connection', function connection(ws) {
  console.log("A client is opening a connection");

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