/**
 * @version 1.0
 * @author akuankka128
*/

const Discord = require('discord.js'), {readFileSync} = require('fs'),
	  client = new Discord.Client(),
	  config = JSON.parse(readFileSync("./config.json"));

var disconnectHandler = function(){
	client.login(config.token)
	.catch(err => {
		client.emit('disconnect');
	});
}

var nop = function(){};

/**
 * @param regexOrString: {RegExp/String}
*/
String.prototype.match_safe = function(regexOrString){
	var res = this.match(regexOrString);
	if(!res) return []; // returning undefined or null instead of an array may cause errors normally, for example:
						/*
						  if("asdf".match("not asdf").length > 2){ ... } // => Uncaught TypeError: Cannot read property 'length' of null
						*/
	else return res;
}

/**
 * @param message: Discord.Message
*/
var messageHandler = function(message){
	var msg = message.content,
		msg_l = message.content.toLowerCase(),
		args = message.content.split(" "),
		args_l = message.content.toLowerCase().split(" ");
	// code here
}

client.on('error', nop);
client.on('warn', nop);
client.on('debug', nop);

client.on('disconnect', disconnectHandler);
client.on('message', messageHandler);
