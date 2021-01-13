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
 - Forvent svar:
   ```
   {"result":0.30000000000000004}
   ```
