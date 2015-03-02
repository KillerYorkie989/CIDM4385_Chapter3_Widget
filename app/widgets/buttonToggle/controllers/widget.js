/* widgets/toggleButton/widget.js */

//create an event-handler for when the user clicks the button
$.container.addEventListener("click", function(_event)
	{
		//hide the clicked item, show the unclicked one
		toggleButtonByIdClicked(_event.source.id);		
	}
); //book bug: missing semi

//_buttonId name of the id of the UI control clicked
function toggleButtonByIdClicked(_buttonId)
{
	//a refresher/primer on === vs. == in JS
	//http://www.w3schools.com/js/js_comparisons.asp
	if(_buttonId === "on")
	{
		//remember the $ accesses controls in the view
		$.on.hide();
		$.off.show();
	}else if(_buttonId === "off")
	{
		$.on.show();
		$.off.hide();
	}
}
