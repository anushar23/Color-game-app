var numSquares=6;
var squares=document.querySelectorAll(".square");
var colors=generateRandomColors(numSquares);
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");

var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

function reset(){

	colors=generateRandomColors(numSquares);
	 pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="NEW COLORS";
	messageDisplay.textContent="";
	h1.style.background="steelblue";


	for(var i=0;i<squares.length;i++)
{
	if(colors[i]){
		squares[i].style.display="block";
	squares[i].style.background=colors[i];
	
}
else{

	squares[i].style.display="none";
}
}
}

//for easy and hard modess 
for(var j=0;j<modes.length;j++){


	modes[j].addEventListener("click",function()
	{

		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
	this.textContent==="Easy" ? numSquares=3 : numSquares=6;

	reset();


});
	// this.classList.remove("selected");
}



// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares=3;
	
// colors=generateRandomColors(numSquares);
// pickedColor=pickColor();
// colorDisplay.textContent=pickedColor;
// for(var i=0;i<squares.length;i++){
// 	if(colors[i]){
// 	squares[i].style.background=colors[i];
// }
// else{
// 	squares[i].style.display="none";
// }
// }
	
// })

// hardBtn.addEventListener("click",function(){

// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;

// colors=generateRandomColors(numSquares);
// pickedColor=pickColor();
// colorDisplay.textContent=pickedColor;
// for(var i=0;i<squares.length;i++){
	
// 	squares[i].style.background=colors[i];

// 	squares[i].style.display="block";
// }



// });

// var colors=["rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(255, 255, 0)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 0)",
// "rgb(255, 0, 255)"
// ];
resetButton.addEventListener("click",function(){

	 reset();


});


// var pickedColor=colors[3];

colorDisplay.textContent = pickedColor;

//using loop for every square coz every square has same function to perform
for(var i=0;i<squares.length;i++){
//add initial colrs to sqaures
	squares[i].style.background=colors[i];
//add event listeners t squares
	 squares[i].addEventListener("click", function(){
//grab color of clicked square 
var clickedColor=this.style.background;
//compare color of clicked and picked square
 if(clickedColor===pickedColor){
 	messageDisplay.textContent="Correct!";
 	changeColors(clickedColor);
 	h1.style.background=clickedColor;
 	resetButton.textContent="Play Again?";

 }
 else{
 	messageDisplay.textContent="Try Again";
 	this.style.background="#232323";
 }

	});

}

function changeColors(color){
	for(var i=0;i<squares.length;i++){

		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){

// create array for random colors
var arr=[];
//fill the array with random clors
for(var i=0;i<num;i++){
	//for red
	var r=Math.floor(Math.random()*256);
	//for green
	var g=Math.floor(Math.random()*256);
	//for blue
	var b=Math.floor(Math.random()*256);
	
	
	arr.push("rgb("+r+", "+g+", "+b+")");
}
//return the array
return arr;
}