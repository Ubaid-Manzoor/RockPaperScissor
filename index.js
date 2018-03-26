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

function Playwinsong() {
	let volume = document.querySelector('.song');
	volume.setAttribute("src","winsong.wav");
}
function Playlosesong() {
	let volume = document.querySelector('.song');
	volume.setAttribute("src","losesound.wav#t=,3");
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
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Scissor')
	{
		//Player Won;
		let ScoreofUser = document.querySelector('.scoreofuser');
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);

	}
	else if(choises[pcchoise] === 'Paper')
	{
		//Pc won
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
	if(Number_of_wins_of_pc == 5 && Number_of_wins_of_user == 5)
	{
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW';
	}
	else if(Number_of_wins_of_user == 5){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Lose This Round ';
		Playlosesong();
		reset();
	}
}
// <========================================================================>
// <=====================CHOSEPAPER=========================================>
function chosepaper(argument) {
	resetallicons();
	let ElementofChoise = document.getElementsByClassName("usericon_P");
	ElementofChoise[0].style.display = "block";
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Rock')
	{
		//Player Won;
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
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
	}
	else
	{
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
	}

// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>
	
	if(Number_of_wins_of_pc == 5 && Number_of_wins_of_user == 5)
	{
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW';
	}
	else if(Number_of_wins_of_user == 5){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		console.log("got clicked");
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = "You Lose This Round ";
		Playlosesong();
		reset();
	}
}
// <========================================================================>
// <=====================CHOSESCISSOR=======================================>
function chosescissor() {
	//First reset all icons to display none
	resetallicons();
	ElementofChoise = document.getElementsByClassName("usericon_S");
	ElementofChoise[0].style.display = "block";
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Paper')
	{
		//Player Won;
			let ScoreofUser = document.querySelector('.scoreofuser');
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);

	}
	else if(choises[pcchoise] === 'Rock')
	{
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

	if(Number_of_wins_of_pc == 5 && Number_of_wins_of_user == 5)
	{
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW';
	}
	else if(Number_of_wins_of_user == 5){
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 5)
	{
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Lose This Round';
		Playlosesong();
		reset();
	}
}
function resetall(argument) {
	resetallicons();
	Resetscores();
	let volume = document.querySelector('.song');
	volume.setAttribute("src","Gamesong.wav");
}
function reset(argument) {
	resetallicons();
	Resetscores();
}
let Stateofbutton = 1;
function ChangeStateOfSong() {
	let volume = document.querySelector('.song');
	let VolumeButton = document.querySelector('.volumebutton');
	if(Stateofbutton == 1){
	volume.pause();
	Stateofbutton = 0;
	VolumeButton.setAttribute("src","RPS.png");
}
	else{
		VolumeButton.setAttribute("src","RPSon.png");
		Stateofbutton = 1;
		volume.play();
	}
}