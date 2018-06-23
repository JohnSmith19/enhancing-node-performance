# Node Performance

Node Performance Test - Benchmark Server Performance

## Thread Pool

<pre><code>
process.env.UV_THREADPOOL_SIZE = 4;
</code></pre>

## Cluster

<pre><code>
const cluster = require("cluster");

if (cluster.isMaster) {
    cluster.fork();
}
</code></pre>

## PM2

https://github.com/Unitech/pm2

$ sudo npm install -g pm2

pm2 start index.js -i 0

pm2 list

pm2 show index

pm2 monit

pm2 delete index

## Performance Test

$ sudo apt install apache2-utils

ab -c 50 -n 500 localhost:3000/fast

ab -c 1 -n 1 localhost:3000/

ab -c 2 -n 2 localhost:3000/

## Web Worker Threads

https://www.npmjs.com/package/webworker-threads

npm install --save webworker-threads

<img src="http://aosabook.org/en/posa/ethercalc-images/scaling-threads.png"></img>
