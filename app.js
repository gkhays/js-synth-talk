let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

$(document).ready(function() {
	$('#message').focus();
  $('#go').click(function() {
  	var msg = $("#message").val();
  	var talker = new SpeechSynthesisUtterance(msg);
  	window.speechSynthesis.speak(talker);
  	console.log("button was pushed");
  });
  // Looks like we don't need this.
  /*$('#go').on(touchEvent, function() {
  	var msg = $("#message").val();
  	var talker = new SpeechSynthesisUtterance(msg);
  	window.speechSynthesis.speak(talker);
  	console.log("button was pushed");
  });*/
});