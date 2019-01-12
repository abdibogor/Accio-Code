var VP = VP || {};

var barSize = new Number(500);
var scrubberContainer = $('#scrubberContainer')[0];
var scrubberBar = $('#scrubberBar')[0];
var playPauseBtn = $('#playPauseBtn')[0];
var videoPlayer = $('#videoPlayer')[0];
var updatePlayer;
var udpateTimer;

/* part 17 Video Player Event Listener */

VP.init = function()
{
	playPauseBtn.addEventListener('click', VP.togglePlayPause, false);
	scrubberContainer.addEventListener('click', VP.scrubberCliked, false);
	videoPlayer.addEventListener('timeupdate', VP.updateTimer);
	
}

/* Part 18: Play Pause and Intervals */
VP.togglePlayPause = function()
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

VP.updateTimer = function()
{
   var eTime;
   var tTime;

   //calculate elapsed time
   var eSeconds = Math.round(videoPlayer.currentTime);
   var eMinutes = Math.round(eSeconds/60);
   eMinutes = (eMinutes >= 10) ? eMinutes : "0" + eMinutes;
   eSeconds = Math.floor(eSeconds % 60);
   eSeconds = (eSeconds >= 10) ? eSeconds : "0" + eSeconds;

   //calculate total time
   var tSeconds = Math.round(videoPlayer.duration);
   var tMinutes = Math.round(tSeconds/60);
   tMinutes = (tMinutes >= 10) ? tMinutes : "0" + tMinutes;
   tSeconds = Math.floor(tSeconds % 60);
   tSeconds = (tSeconds >= 10) ? tSeconds : "0" + tSeconds;

   //assign these values to our variables
   eTime = '' + eMinutes + ':' + eSeconds;
   tTime = '' + tMinutes + ':' + tSeconds;

   //display in timer
   $('#timer').html('' + eTime + ' / ' + tTime);

};