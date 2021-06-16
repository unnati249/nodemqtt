const mqtt = require('mqtt');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//online MQTT broker
var client = mqtt.connect("mqtt://broker.hivemq.com");

//local MQTT broker
var client = mqtt.connect("mqtt://127.0.0.1:1883");

let currentStatus = 'STOPPED';
let topic = "test/random/data";
var timer;


client.on('connect', function(){
  console.log("client is connected");

  let currentDate = new Date();
  let tt = currentDate.toLocaleString().split(' ')[2];
  let currentValue = parseInt((currentDate.getTime() / 1000).toFixed(0));
  let message = {"timestamp":tt, "currentValue":currentValue};

  //publish timestamp data to broker
  client.publish(topic, JSON.stringify(message));
});

//get route to get the status
app.get('/', (req, res) => {
    res.json({status: currentStatus, topic: topic});
});

//post route to change the status
app.post('/', (req, res) => {
    if(req.query.mode === 'start'){
        currentStatus = 'RUNNING';
        timer = setInterval(function(){
            var random = Math.random()*50;
            console.log(random);
            if(random < 30){
                // start publishing random values which is less than 30 to broker
                client.publish(topic, random.toString()); 
            }
        }, 1000)
        res.json({message: "RUNNING"})
    }else if(req.query.mode === 'stop'){
        currentStatus = 'STOPPED';
        // stop publishing values to broker
        client.end(); 
        clearTimeout(timer); 
        res.json({message: "STOPPED"})
    }
});


app.listen(3000);