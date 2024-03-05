Application to attempt to reproduce https://github.com/newrelic/node-newrelic/issues/2011

Please enable trace logging for APM agent

## To setup

```sh
npm i
cp node_modules/newrelic/newrelic.js . 
# Fill out app_name and license_key within newrelic.js
# Start application
npm start
```


## To test
Make a request to the application

```sh
 curl -X POST http://localhost:3004/api/v1/logs -H 'Content-Type: 13876479237409238' -d '{"id": 1,"data": "Sample log data"}'
```
