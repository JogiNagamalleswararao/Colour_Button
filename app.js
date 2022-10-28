const button=document.querySelector("button");
const body= document.querySelector("body");
const colors=["#C33764","#1D2671","#603813",'#B29F94','black','#9796F0',"#799F0C","#28C76F","#FDD819","#FFF5C3",'#C3CFE2',"#1F4037","#EBEDEE","#E3FDF5"];
//body.style.backgroundImage="linear-gradient("+colors[0]+","+colors[1]+")"
//body.style.backgroundRepeat="no-repeat"
button.addEventListener('click', fun)
function fun(){
	const a=parseInt(Math.random()*colors.length);
	const b=parseInt(Math.random()*colors.length);
	button.style.backgroundImage="linear-gradient("+colors[b]+","+colors[a]+")"
	button.style.color="white"
	body.style.backgroundImage="linear-gradient("+colors[a]+","+colors[b]+")"
}