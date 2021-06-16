# Node Mqtt Demo

This git repository should be used for reviewing code for the test given by LTTS.

<br/>

## TEST #3- NodeJS/Express Framework
### Objectives:
- Create a NodeJS micro-service that implements a simple REST API embedding the Express server 
- Posts random JSON formatted data to a local MQTT broker (ex: { “timestamp”: tt, “currentValue”: nnn.nnn }
- Create two REST API routes, a GET and a POST. 
- GET route- respond with a JSON message, providing the status (RUNNING or STOPPED) and message topic that the random data is being published too (ex: { “status”: “RUNNING”, “topic”: “xxx/xxx/xxx” }), where “xxx/xxx/xxx” is whatever MQTT topic you have chosen to publish your random data to (ex: “test/random/data”).
- POST route- Accepts a query variable “mode=xxxx”, where xxxx is either “start” or “stop”, and either starts sending random data to the broker, or stops sending random data to the broker.

## TEST #6- Angular UI app
### Objectives: 
- Create an Angular 2+ app that uses REST API created in TEST #3 .
- GET Button click should get result from test app created in test #3.
- Similarly POST button click should fire post request created in test #3.

<br/>

## Command to run the project
```
npm i
npm start
```

## MQTT Broker Details
- MQTT Broker's Hostname: <b>mqtt://broker.hivemq.com</b>
- Topic name for publisher and subscriber: <b>test/random/data</b>

<br/>

## Additional Details
- Two micro services publisher.js and subscriber.js are created.
- Initial status is "STOPPED".
- By entering mode 'start' in input control and hitting the post button will start the service. 
- Similarly, by entering mode 'stop' in input control and hitting the post button will stop the service.
- Also, Current status can be obtained by clicking the get button.
- publisher micro service is publishing random data which is less than 30 to the broker and it can be received in subscriber micro service from the broker.
- log is also displayed in console.

