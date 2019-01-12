var VP = VP || {};

var barSize = new Number(500);
var scrubberContainer = $('#scrubberContainer')[0];
var scrubberBar = $('#scrubberBar')[0];
var playPlauseBtn = $('#playPauseBtn')[0];
var videoPlayer = $('#videoPlayer')[0];
var updatePlayer;
var udpateTimer;

/* part 17 Video Player Event Listener */

VP.init = function()
{
	PlayPauseBtn.addEventListener('click', VP.togglePlayPause, false);
	scrubberContainer.addEventListener('click', VP.scrubberCliked, false);
	videoPlayer.addEventListener('timeupdate', VP.updateTimer);
	
}

/* Part 18: Play Pause and Intervals */
VP.togglePlayPause += function()
{
	 if(!videoPlayer.paused && !videoPlayer.ended)
	 {
	 	videoPlayer.pause();
	 	$('#playPauseBtn').html('Play');
	 	window.clearInterval(updatePlayer);
	 	window.clearInterval(updateTimer);
	 }
	  else
	  {
	  	 videoPlayer.play();
	  	 $('#playPauseBtn').html('Pause');
	  	 updatePlayer = setInterval(function()
	  	 {
	  	 	VP.updateScrubber();
	  	 }, 100);
	  }
}