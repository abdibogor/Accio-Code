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