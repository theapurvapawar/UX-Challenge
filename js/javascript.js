/*
By Apurva Pawar
Owner and Developer - synopsisstreet.com
*/

var tr;
var parentID;
var divTag;

function takeData(sender)
    {

		tr = sender.parentNode.parentNode;
		parentID = tr.id;
        divTag = document.createElement("div");		
		document.getElementById('taskCardInput').style.display = 'block';			
    }

function createStatusItem(sender)
    {
		var tr = sender.parentNode.parentNode.parentNode;
		var parentID = tr.id;
		var element = document.createElement("input");		
        var divTag = document.createElement("div");  
		var name=prompt("Please enter status","");

		if(name==null)
		{
			return(false);
		}
		
		divTag.id = "s_"+name;
		divTag.setAttribute("ondragenter","return dragEnter(event)");
		divTag.setAttribute("ondrop","return dragDrop(event)"); 
		divTag.setAttribute("ondragover","return dragOver(event)");              
        divTag.className ="statusDiv";        
        divTag.innerHTML = '<p align="center"><b style="font-size:20px;">'+name+'</b><br><br><input id="CC" type="button" value="create task card" onclick="takeData(this);" /><input id="DAC" type="button" value="Delete all cards" onclick="deleteAllTaskCards(this)" /><input type="button" id="DB" value="Delete block" onclick="deleteStatusBlock(this)" /></p>';
        
        document.getElementById(parentID).appendChild(divTag);
    }

	function createTaskCard()
	{
		var t_date = document.getElementById('date').value;
		var t_taskno = document.getElementById('taskno').value;
		var t_sub = document.getElementById('sub').value;
		var t_desc = document.getElementById('desc').value;
		var t_compl = document.getElementById('compl').value;	


        divTag.id = t_taskno;        
        divTag.className ="taskCardDiv";
		divTag.setAttribute("draggable","true"); 
        divTag.setAttribute("ondragstart","return dragStart(event)");        
        divTag.innerHTML = '<p align="center">Date Created:<b>'+t_date+'</b><br>Task No:<b>'+t_taskno+'</b><br>Subject:<b>'+t_sub+'</b><br>Description:<b>'+t_desc+'</b><br>Completion Date:<b>'+t_compl+'</b></p><p align="center"><input type="button" value="Delete Card" onclick="deleteTaskCard(this);" /></p>';
        
        document.getElementById(parentID).appendChild(divTag);

		document.getElementById('taskCardInput').style.display = 'none';

		document.getElementById('date').value = "";
		document.getElementById('taskno').value = "";
		document.getElementById('sub').value = "";
		document.getElementById('desc').value = "";
		document.getElementById('compl').value = "";
	}


function deleteTaskCard(taskId)
{
		anchor = taskId.parentNode.parentNode;
		anchor.parentNode.removeChild (anchor);
}

function deleteStatusBlock(blockId)
{

		anchor = blockId.parentNode.parentNode;
		anchor.parentNode.removeChild (anchor);
}

function deleteAllTaskCards(blockId)
{
	var container = blockId.parentNode.parentNode;
	//var container = document.getElementById('pendingStatus');
var elements = container.getElementsByClassName("taskCardDiv");

while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
}
}

function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
   ev.dataTransfer.setDragImage(ev.target,150,50);
   return true;
}

function dragEnter(ev) {
   event.preventDefault();
   return true;
}
function dragOver(ev) {
    return false;
}
function dragDrop(ev) {
   var src = ev.dataTransfer.getData("Text");
   ev.target.appendChild(document.getElementById(src));
   ev.stopPropagation();
   return false;
}



