// server.js or token.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/get-zego-token", (req, res) => {
  //   const { roomID, userID, userName } = req.body;
  const apiKeys = {
    appID: 190455042,
    serverSecret: "d4dbf607dc7c2695aecea490902c6458",
  };

  //   if (!roomID || !userID || !userName) {
  //     return res.status(400).json({ error: "Missing required fields" });
  // }
  //   const appID = 190455042;
  //   const serverSecret = "d4dbf607dc7c2695aecea490902c6458";
  //   const { ZegoUIKitPrebuilt } = require("@zegocloud/zego-uikit-prebuilt");

  //   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //     appID,
  //     serverSecret,
  //     roomID,
  //     userID,
  //     userName
  //   );

  res.send(apiKeys);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
