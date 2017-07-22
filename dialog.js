
function keyPressListener(e) {
        if (e.keyCode == 13) {
                 // do something
    }
}



function CustomPrompt(){
	this.render = function(dialog,func){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = "0px";
	    dialogbox.style.top = "0px";
	    dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
	    
		document.getElementById('dialogboxbody').innerHTML += '<br><input style="width: 95%;  height: 10px; -webkit-app-region: no-drag" id="prompt_value1"/>';
document.getElementById('prompt_value1').focus();
		document.getElementById('dialogboxfoot').innerHTML = '<button class="button button1" id="button_ok" style="-webkit-app-region: no-drag; font-size:10px" onclick="Prompt.ok(\''+func+'\')">Tamam</button> <button class="button button3" id="button_cancel" style="-webkit-app-region: no-drag; font-size:10px" onclick="Prompt.cancel()">&nbspİptal&nbsp&nbsp&nbsp&nbsp&nbsp</button>';
// document.getElementById('button_ok').focus();
document.getElementById('prompt_value1')
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button_ok").click();
    }
});

	}
	this.cancel = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.ok = function(func){

var prompt_value1 = document.getElementById('prompt_value1').value;
		window[func](prompt_value1);
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";


	}
}
var Prompt = new CustomPrompt();
