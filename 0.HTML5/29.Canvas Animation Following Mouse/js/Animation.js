var AN = AN || {};

pic = new Image();

AN.initialize = function()
{
	window.addEventListener("mousemove", AN.moveMouse, false);

	cv = $('#canvas')[0];
	canvas = cv.getContext('2d');

	pic.src = "images/default.png";
};

AN.moveMouse = function(e)
{
	canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;
	var yPos = e.clientY;

	canvas.drawImage(pic, xPos, yPos, pic.width, pic.height);
};