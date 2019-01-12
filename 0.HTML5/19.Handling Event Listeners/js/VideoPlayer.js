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

VP.updateScrubber = function()
{
	if(!videoPlayer.ended)
	{
		var size = parseInt(videoPlayer.currentTime * barSize/videoPlayer.duration);
		$('#scrubberBar').css('width', size + 'px');
	}
	else
	{
		$('#scrubberBar').css('width', '0px');
		$('#playPauseBtn').html('Play');
		window.clearInterval(updatePlayer);
	}
};

VP.scrubberClicked = function(e)
{
	if(!videoPlayer.paused && !videoPlayer.ended)
	{
		var mouseX = e.pageX - scrubberContainer.offsetLeft;
		var newTime = mouseX * videoPlayer.duration/barSize;
		videoPlayer.currentTime = newTime;
		$('#scrubberBar').css('width', mouseX + 'px');
	}
};