let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

$(document).ready(function() {
	$('#message').focus();

	speechSynthesis.onvoiceschanged = function() {
		//var voiceList = speechSynthesis.getVoices();
		var voiceList = $('#voices');
		if (voiceList.find('option').length == 0) {
			speechSynthesis.getVoices().forEach(function(voice, index) {
				// var option = $('<option>').val(index).html(voice.name);
				// voiceList.append(option);
				$('#voices').append($('<option>').val(index).html(voice.name));
			});
		}
	}

  $('#go').click(function() {
  	var msg = $("#message").val();
		var talker = new SpeechSynthesisUtterance();
		var voices = speechSynthesis.getVoices();
		// talker.voice = $('#voices option:selected');
		talker.voice = voices[$('#voices').val()];
		talker.text = msg;
		window.speechSynthesis.speak(talker);
  });
});