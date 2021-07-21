var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares=document.querySelectorAll(".square");
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttona event listeners
	setupModeBottons();
	setupSquares();
	reset();
}

function setupModeBottons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares=3 : numberOfSquares=6;
			reset();
		})
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++)
	{
		//add click listeners to  squares
		squares[i].addEventListener("click",function()
		{
			//grab color of pickedcolor
			var clickedColor = this.style.background;
			//compare color to pickedcolor
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent ="Correct !!!";
				colorsChange(clickedColor);
				h1.style.background = clickedColor ;
				resetButton.innerHTML="PLAY AGAIN?"
			}else{
				this.style.background="#232323";
				
				messageDisplay.textContent = "Try Again !!!";
			}
		});
	}
}

function reset(){
	messageDisplay.textContent="";
	colors = generateRandomColors(numberOfSquares);
	//picked new random color from array
	pickedColor=pickcolor();
	//change the color display to match picked
	colorDisplay.innerHTML=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		squares[i].style.background=colors[i];
	}
	resetButton.innerHTML= "New Colors";
	h1.style.background="#232323";	
}
//easyBtn.addEventListener("click",function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//
//	messageDisplay.textContent="";
//	h1.style.background="steelblue"
//	numberOfSquares = 3;
//	colors = generateRandomColors(numberOfSquares);
//	pickedColor=pickcolor();
//	colorDisplay.innerHTML=pickedColor;
//	for (var i = 0; i < squares.length; i++) {
//		if(colors[i]){
//			squares[i].style.background=colors[i];
//		}
//		else{
//			squares[i].style.display="none";
//		}
//	}
//})

/*hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	messageDisplay.textContent="";
	h1.style.background="steelblue"
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor=pickcolor();
	colorDisplay.innerHTML=pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
})
*/

resetButton.addEventListener("click", function(){
	reset();
})


function colorsChange(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background=color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}