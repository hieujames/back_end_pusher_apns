var apn = require("apn");
const {v4: uuidv4 } = require("uuid");
var options = {
  token: {
    key: "aserts/path",
    keyId: "keyId",
    teamId: "teamId"
  },
  production: false
};

const payload = {
  "aps": {
    "provider": "apns",
    "call-name": "8007",
    "uuid": uuidv4,
    "deviceid": "DEV"
  }
};

var apnProvider = new apn.Provider(options);
let deviceToken =
  "deviceToken";

var note = new apn.Notification();

note.body = payload;
note.payload = { payload };
note.priority = 10;
note.topic = "topic";
note.pushType = "type";


apnProvider.send(note, deviceToken).then((result) => {
  console.log(result);
  console.log(JSON.stringify(result));
});
