let choises = ['Rock' , 'Paper' , 'Scissor'];
let scores = ['zero.jpg' , 'one.jpg' , 'two.jpg' , 'three.jpg'];
let Number_of_wins_of_user = 0;
let Number_of_wins_of_pc = 0;
let Stateofbutton = 1;

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
function resetFotter() {
	document.querySelector('.playersname').innerHTML = sessionStorage.PlayerName + "  " + "VS" +"  " + "PC";
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
	if(Stateofbutton !== 0){
	let volume = document.querySelector('.song');
	volume.setAttribute("src","winsong.wav");}
}
function Playlosesong() {
	if(Stateofbutton !== 0){
	let volume = document.querySelector('.song');
	volume.setAttribute("src","losesound.wav#t=,3");}
}
function Playdrawsong(argument) {
	if(Stateofbutton !== 0){
	let volume = document.querySelector('.song');
	volume.setAttribute("src","Drawsong.mp3");}
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
		let ScoreofPc = document.querySelector('.scoreofpc');
		let ScoreofUser = document.querySelector('.scoreofuser');
		Number_of_wins_of_pc++;
		Number_of_wins_of_user++;
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);
	}
// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>

	if(Number_of_wins_of_user == 3 && Number_of_wins_of_pc == 3){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW!';
		Playdrawsong();
		reset();
	}
	else if(Number_of_wins_of_user == 3){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 3)
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
		let ScoreofPc = document.querySelector('.scoreofpc');
		let ScoreofUser = document.querySelector('.scoreofuser');
		Number_of_wins_of_pc++;
		Number_of_wins_of_user++;
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);
	}

// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>
	if(Number_of_wins_of_user == 3 && Number_of_wins_of_pc == 3){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW!';
		Playdrawsong();
		reset();
	}
	else if(Number_of_wins_of_user == 3){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		console.log("got clicked");
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 3)
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
		let ScoreofPc = document.querySelector('.scoreofpc');
		let ScoreofUser = document.querySelector('.scoreofuser');
		Number_of_wins_of_pc++;
		Number_of_wins_of_user++;
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		ScoreofPc.setAttribute("src",scores[Number_of_wins_of_pc]);
		ScoreofUser.setAttribute("src",scores[Number_of_wins_of_user]);
	}

// <=========================================================>
// <=====================DISPLAY THE RESULTS=================>

	if(Number_of_wins_of_user == 3 && Number_of_wins_of_pc == 3){
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'DRAW!';
		Playdrawsong();
		reset();
	}
	else if(Number_of_wins_of_user == 3){
		console.log("got clicked");
		let MessToUser = document.querySelector(".playersname");
		MessToUser.innerHTML = 'You Won This Round!';
		Playwinsong();
		reset();
	}
	else if(Number_of_wins_of_pc == 3)
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
	resetFotter();
	let volume = document.querySelector('.song');
	volume.setAttribute("src","Gamesong.wav");
}
function reset(argument) {
	// resetallicons();
	Resetscores();
}
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
function CheckPlayerInfo()
{
	let PlayersName = sessionStorage.PlayerName;
	console.log(PlayersName);
	let GenderofPlayer = sessionStorage.PlayerGender;
	// let ISplayerfemale = localStorage.PlayerGenderfemale;
	console.log(GenderofPlayer);
	document.querySelector('.playersname').innerHTML = sessionStorage.PlayerName + "  " + "VS" +"  " + "PC";
	if(GenderofPlayer === "false")
	{
		document.querySelector('.user').setAttribute("src","girl.png");
	}
}
