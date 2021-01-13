Plus i Node.js med Express
==========================

`plus.js` definerer en express server som svarer på endpoints:

 - `/`: "Dette er plus lavet i node.js med express!"
 - `/plus?left=0.1&right=0.2`: `{ "result": 0.30000000000000004 }`

`Dockerfile` definerer containeren med node:14-slim som base image.
Dette image er skubbet til https://hub.docker.com/r/nctbk/plus-node-js-express

`plus.yml` definerer kubenetes pod og service for ovenstående.

Installation
------------

1. `kubectl apply -f plus.yml`
 - Forvent svar:
   ```
   pod/plus-node-js-express-pod created
   service/plus-node-js-express-service created
   ```
2. Test forbindelsen: `curl "http://localhost:30007/plus?left=0.1&right=0.2"`
 - Port: 30007 er givet i service konfig: `nodePort: 30007`
 - Forvent svar:
   ```
   {"result":0.30000000000000004}
   ```

Benchmark
---------

Bruger "wrk" via. WSL https://github.com/wg/wrk 

$ wrk -t 4 -c 10 -d15s "http://localhost:30007/plus?left=13.36&right=0.1" --latency
Running 15s test @ http://localhost:30007/plus?left=13.36&right=0.1
  4 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.68ms   25.80ms  97.25ms   80.39%
    Req/Sec   234.18     64.36   393.00     66.67%
  Latency Distribution
     50%    2.77ms
     75%   35.16ms
     90%   65.52ms
     99%   82.22ms
  14000 requests in 15.01s, 3.52MB read
Requests/sec:    932.64
Transfer/sec:    240.45KB