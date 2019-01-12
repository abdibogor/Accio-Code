var DD = DD || {};

DD.initialize = function()
{
	//set initial variables
	dropTo  		=$('#dropTo')[0];
	numItems 		=$('.boxItem').size();

	for(var i=0; i < numItems; i++)
	{
		$('.boxItem')[i].addEventListener("dragstart", DD.startDrag, false);
	};

	dropTo.addEventListener("dragenter", DD.preventDragDefault, false);
	dropTo.addEventListener("dragover", DD.preventDragDefault, false);
	dropTo.addEventListener("drop", DD.dropped, false);

}; 