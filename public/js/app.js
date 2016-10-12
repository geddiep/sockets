var socket = io();
//var moment = require('/moment.js');

//console.log(timestampMoment.local().format('LT'));

socket.on('connect', function(){
	console.log('connected to socket.io server');
});

socket.on('message',function(message){
	var timestampMoment = moment().utc(message.timestamp);

	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' + timestampMoment.local().format('LT') + ': </strong>' + message.text + '</p>');

});

//handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event){
	event.preventDefault();
	$message = $form.find('input[name=message]');
	socket.emit('message',{
		text: $message.val()
	});

	//remove message
	$message.val('');

});