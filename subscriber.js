const mqtt = require('mqtt');

//online MQTT broker
var client = mqtt.connect("mqtt://broker.hivemq.com");

//local MQTT broker
//var client = mqtt.connect("mqtt://127.0.0.1:1883");


client.on('connect',function(){
    // Subscribe data from broker
    client.subscribe('test/random/data');
    console.log("client has subscribed successfully");
});

client.on('message',function(topic, message){
    console.log(JSON.parse(message.toString()));
});
