var DS = DS || {};

var name;
var score;

DS.initialize = function()
{
	$('#button').click(function(){
		DS.saveScore();
	});
};