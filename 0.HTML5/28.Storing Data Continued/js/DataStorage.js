var DS = DS || {};

var name;
var score;

DS.initialize = function()
{
	var theData = sessionStorage.getItem(name);
	//$('#rightBox').html('Get initial value: ' + name);
	$('#rightBox').html('Get initial value: ' + theData);
	$('#button').click(function(){
		DS.saveScore();
	});
};

/** 28. Storing Data Continued **/

DS.saveScore = function()
{
	name = $('#name').val();
	score = $('#score').val();
	sessionStorage.setItem(name,score);
	DS.display(name);
};

DS.display = function(name)
{
	var theData = sessionStorage.getItem(name);
	$('#rightBox').html('The user has a name which is: ' + name + '<br/>Value: ' + theData);
};