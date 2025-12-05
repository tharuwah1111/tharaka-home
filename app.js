let display=document.getElementById("display");
function press(value){
	display.value+=value;
}
function calculate(){
	try{
	display.value=eval(display.value);
	}
	catch{
		display.value="error";}
}
function cleardisplay(){
	display.value="";
}

