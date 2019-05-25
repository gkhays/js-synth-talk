let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

$(document).ready(function() {
	$('#message').focus();

	speechSynthesis.onvoiceschanged = function() {
		var voiceList = speechSynthesis.getVoices();
		if (voiceList.length == 0) {
			$('#dropdown').hide();
		} else {
			var voiceChoices = $('#voices');
			if (voiceChoices.find('option').length == 0) {
				voiceList.forEach(function(voice, index) {
					$('#voices').append($('<option>').val(index).html(voice.name));
				});
			}
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