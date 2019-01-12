var CV = CV || {};

CV.initialize = function()
{
		console.log('start');
		cv = $('#canvas')[0];
		canvas = cv.getContext('2d');

		canvas.strokeRect(10, 10, 100, 150);
		canvas.fillRect(10, 200, 100, 150);
		canvas.clearRect(20, 250, 50, 50);
};