const express = require("express");
const crypto = require("crypto");
const app = express();
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    };
  });

  worker.onmessage = function(myCounter) {
    console.log(myCounter);
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);

// https://github.com/Unitech/pm2
// pm2 start index.js -i 0
// pm2 list
// pm2 show index
// pm2 monit
// pm2 delete index
