var CV = CV || {};

pic = new Image();

CV.loadImage = function()
{
	canvas.drawImage(pic, 0, 0, cv.width, cv.height);
};

CV.initialize = function()
{
		console.log('start');
		cv = $('#canvas')[0];
		canvas = cv.getContext('2d');

		/** load Image  **/
		pic.src = "images/default.png";
		pic.addEventListener("load", CV.loadImage, false);


};