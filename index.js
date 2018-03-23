let choises = ['Rock' , 'Paper' , 'Scissor'];
let Number_of_wins_of_user = 0;
let Number_of_wins_of_pc = 0;
let Number_of_rounds = 0;
let Userwin = 0;
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
// function Modify_the_page() {
// 	if(Userwin){
// 	switch(Number_of_wins_of_user) {
//     case 0:
        
//         break;
//     case 1:
//         break;
//     case 2:
//         code block
//         break;
//     case 3:
//         code block
//         break;
//     case 4:
//         code block
//         break;
//     case 5:
//         code block
//         break;
// 	} }
// 	else{
// 			switch(Number_of_wins_of_user) {
//     case 0:
//         code block
//         break;
//     case 1:
//         code block
//         break;
//     case 2:
//         code block
//         break;
//     case 3:
//         code block
//         break;
//     case 4:
//         code block
//         break;
//     case 5:
//         code block
//         break;
// 	}
// }
function getrandomnum(number) {
	return Math.floor(Math.random() * number);
}
function choserock(argument) {
	resetallicons();
	let ElementofChoise = document.getElementsByClassName("usericon_R");
	ElementofChoise[0].style.display = "block";
	console.log("got clicked");
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Scissor')
	{
		//Player Won;
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_user++;
		Number_of_rounds++;
		Userwin = 1;
	}
	else if(choises[pcchoise] === 'Paper')
	{
		//Pc won
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		Number_of_wins_of_pc++;
		Number_of_rounds++;
		Userwin = 0;
	}
	else{
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
	}

}
function chosepaper(argument) {
	resetallicons();
	let ElementofChoise = document.getElementsByClassName("usericon_P");
	ElementofChoise[0].style.display = "block";
	console.log("got clicked");
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Rock')
	{
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
		//Player Won;
		Number_of_wins_of_user++;
		Number_of_rounds++;
		Userwin = 1;
	}
	else if(choises[pcchoise] === 'Scissor')
	{
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
		//Pc won
		Number_of_wins_of_pc++;
		Number_of_rounds++;
		Userwin = 0;
	}
	else
	{
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
	}
}
function chosescissor(argument) {
	//First reset all icons to display none
	resetallicons();
	ElementofChoise = document.getElementsByClassName("usericon_S");
	ElementofChoise[0].style.display = "block";
	console.log("got clicked");
	let pcchoise = getrandomnum(3);
	if(choises[pcchoise] === 'Paper')
	{
		ElementofChoise = document.getElementsByClassName("pcicon_P");
		ElementofChoise[0].style.display = "block";
		//Player Won;
		Number_of_wins_of_user++;
		Number_of_rounds++;
		Userwin = 1;
	}
	else if(choises[pcchoise] === 'Rock')
	{
		ElementofChoise = document.getElementsByClassName("pcicon_R");
		ElementofChoise[0].style.display = "block";
		//Pc won
		Number_of_wins_of_pc++;
		Number_of_rounds++;
		Userwin = 0;
	}
	else{
		ElementofChoise = document.getElementsByClassName("pcicon_S");
		ElementofChoise[0].style.display = "block";
	}
}
function reset(argument) {
	resetallicons();
}