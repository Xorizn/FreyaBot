console.log("Starting . . .");
require("dotenv").config(),
  require("rootpath")(),
  require("./src/event/event.server"),
  require("./config");
const { spawn: spawn } = require("child_process"),
  path = require("path"),
  colors = require("@colors/colors/safe"),
  CFonts = require("cfonts");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
process.on("uncaughtException", console.error);

function start() {
  let args = [path.join(__dirname, "/src/xorizn.js"), ...process.argv.slice(2)];
  let chill = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  })
    .on("message", (data) => {
      if (data == "reset") {
        console.log("Restarting...");
        chill.kill();
        delete chill;
      }
    })
    .on("exit", (code) => {
      console.error("Exited with code:", code);
      start();
    });
}

function json(){
  require("./src/event/event.server").server({
    owner: owner,
    owner_name: owner_name,
    botname: botname,
    online: true,
  });
}

CFonts.say(botname, {
  font: "block",
  align: "center",
  colors: ["system"],
  letterSpacing: 1,
  lineHeight: 1,
}),
  CFonts.say("Github : https://github.com/Xorizn/FreyaBot", {
    colors: ["system"],
    font: "console",
    align: "center",
  }),
  start(),
  json();
