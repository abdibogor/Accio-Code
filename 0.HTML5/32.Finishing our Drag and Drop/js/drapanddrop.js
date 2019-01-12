var DD = DD || {};

DD.initialize = function()
{
	//set initial variables
	dropTo  =$('#dropTo')[0];
	numItems =$('.boxItem').size();

	for(var i=0; i < numItems; i++)
	{
		$('.boxItem')[i].addEventListener("dragstart", DD.startDrag, false);
	};

	dropTo.addEventListener("dragenter", DD.preventDragDefault, false);
	dropTo.addEventListener("dragover", DD.preventDragDefault, false);
	dropTo.addEventListener("drop", DD.dropped, false);

}; 

/** 32. Finishing our Drag and Drop **/

DD.startDrag = function(e)
{
	var object = $(this).html();
	e.dataTransfer.setData('Text', object);
};

DD.preventDragDefault = function(e)
{
	e.preventDefault();
};

DD.dropped = function(e)
{
	e.preventDefault();
	$('#dropTo').append('<div class="boxItem">' + e.dataTransfer.getData('Text') + '</div>');

};