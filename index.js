let choises = ['Rock' , 'Paper' , 'Scissor'];
let scores = ['zero.jpg' , 'one.jpg' , 'two.jpg' , 'three.jpg' , 'four.jpg' , 'five.jpg'];
let Number_of_wins_of_user = 0;
let Number_of_wins_of_pc = 0;


// <========================================================================>
// <=====================RESET EVERY CHANGE TO NORMAL=======================>
let Allicons = document.getElementsByClassName("commoniconclass");
function resetallicons() {


		let ElementofChoise = document.getElementsByClassName("usericon_R");
	ElementofChoise[0].style.display = "none";
		ElementofChoise = document.getElementsByClassName("usericon_P");
	ElementofChoise[0].style.display = "none";
		ElementofChoise = document.getElementsByClassName("usericon_S");
	ElementofChoise[0].style.display = "none";
		ElementofChoise = document.getElementsByClassName("pcicon_R");
	ElementofChoise[0].style.display = "none";
		ElementofChoise = document.getElementsByClassName("pcicon_P");
	ElementofChoise[0].style.display = "none";
		ElementofChoise = document.getElementsByClassName("pcicon_S");
	ElementofChoise[0].style.display = "none";
}
function Resetscores(argument) {
		//RESET SCORES
		Number_of_wins_of_user = 0;
		Number_of_wins_of_pc = 0;
	let ScoreofUser = document.querySelector('.scoreofuser');
	let ScoreofPc = document.querySelector('.scoreofpc');
	ScoreofUser.setAttribute("src",scores[0]);
	ScoreofPc.setAttribute("src",scores[0]);
}

// <========================================================================>
// <=====================TO GET RANDOM NUMBER===============================>

function getrandomnum(number) {
	return Math.floor(Math.random() * number);
}
// <========================================================================>
// <=====================CHOSEROCK==========================================>
function choserock() {
	resetallicons();
	let ElementofChoise = document.getElementsByClassName("usericon_R");
	ElementofChoise[0].style.display = "block";
	console.log("got clicked");
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Scissor')
	{
		//Player Won;
		console.log('got clicked');
		let ScoreofUser = document.querySelector('.scoreofuser');
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);

	}
	else if(choises[pcchoise] === 'Paper')
	{
		//Pc won
		console.log('got clicked');
		let ScoreofPc = document.querySelector('.scoreofpc');
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_pc++;
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);

	}
	else{
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
	}
// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>

	if(Number_of_wins_of_user == 5){
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Lose This Round ';
		reset();
	}
}
// <========================================================================>
// <=====================CHOSEPAPER=========================================>
function chosepaper(argument) {
	resetallicons();
	let ElementofChoise = document.getElementsByClassName("usericon_P");
	ElementofChoise[0].style.display = "block";
	console.log("got clicked");
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Rock')
	{
		//Player Won;
		console.log("got clicked");
		let ScoreofUser = document.querySelector('.scoreofuser');
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);

	}
	else if(choises[pcchoise] === 'Scissor')
	{
		//Pc won
		let ScoreofPc = document.querySelector('.scoreofpc');
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_pc++;
		console.log("got clicked");
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
	}
	else
	{
		console.log("got clicked");
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
	}

// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>

	if(Number_of_wins_of_user == 5){
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		console.log("got clicked");
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = "You Lose This Round ";
		console.log("got clicked");
		reset();
	}
}
// <========================================================================>
// <=====================CHOSESCISSOR=======================================>
function chosescissor() {
	//First reset all icons to display none
	resetallicons();
	ElementofChoise = document.getElementsByClassName("usericon_S");
	console.log("got clicked");
	ElementofChoise[0].style.display = "block";
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Paper')
	{
		//Player Won;
		console.log("got clicked");
			let ScoreofUser = document.querySelector('.scoreofuser');
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);

	}
	else if(choises[pcchoise] === 'Rock')
	{
		console.log("got clicked");
		//Pc won
			let ScoreofPc = document.querySelector('.scoreofpc');
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_pc++;
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
	}
	else{
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
	}

// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>
	if(Number_of_wins_of_user == 5){
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Lose This Round';
		reset();
	}
}
function reset(argument) {
	resetallicons();
	Resetscores();
}