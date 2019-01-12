var CV = CV || {};

CV.initialize = function()
{
		console.log('start');
		cv = $('#canvas')[0];
		canvas = cv.getContext('2d');

		/** draw line shapes **/
		canvas.beginPath();
		canvas.moveTo(100,100);
		canvas.lineTo(50,150);
		canvas.lineTo(100,300);
		canvas.lineTo(150,150);
		canvas.closePath();
		canvas.stroke();

		/* draw gradients */
		/*
		var gradient = canvas.createLinearGradient(10, 10, 100, 150);
		gradient.addColorStop(.0, "orange");
		gradient.addColorStop(.8, "blue");
		gradient.addColorStop(1, "black");
		canvas.fillStyle = gradient;
		canvas.fillRect(10, 10, 100, 150);
		*/

		/*
		// Part 23: Gradients with 
		canvas.fillStyle = "blue";
		canvas.strokeStyle = "red";
		// the end part 23
		canvas.strokeRect(10, 10, 100, 150);
		canvas.fillRect(10, 200, 100, 150);
		canvas.clearRect(20, 250, 50, 50);
		*/
};