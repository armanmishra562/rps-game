//CODE FOR GAME PLAY
let youscore=0;
function Game(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('result').style.display = 'block';
    document.getElementById('game').style.display = 'none';

    switch (userChoice) {
        case 'rock':
            copyCircle('rock','plyerpick');
            if (computerChoice === 'rock') {
                copyCircle('rock','comppick');
                showResult('Tied Up');
            } else if (computerChoice === 'paper') {
                copyCircle('paper','comppick');
                showResult('You lose');
                winShadow('comppick');
            } else {
                copyCircle('scissors','comppick');
                showResult('You win');
                winShadow('plyerpick');
                youscore++;
                updateScore();
            }
            break;
        case 'paper':
            copyCircle('paper','plyerpick');
            if (computerChoice === 'paper') {
                copyCircle('paper','comppick');
                showResult('Tied Up');
            } else if (computerChoice === 'scissors') {
                copyCircle('scissors','comppick');
                showResult('You lose');
                winShadow('comppick');
            } else {
                copyCircle('rock','comppick');
                showResult('You win');
                winShadow('plyerpick');
                youscore++;
                updateScore();
            }
            break;
        case 'scissors':
            copyCircle('scissors','plyerpick');
            if (computerChoice === 'scissors') {
                copyCircle('scissors','comppick');
                showResult('Tied Up');
            } else if (computerChoice === 'rock') {
                copyCircle('rock','comppick');
                showResult('You lose');
                winShadow('comppick');
            } else {
                copyCircle('paper','comppick');
                showResult('You win');
                winShadow('plyerpick');
                youscore++;
                updateScore();
            }
            break;
    }
}
// code to copy circles 
function copyCircle(picked,togive) {
    let circle1=document.getElementById(picked);
    let circle2=document.getElementById(togive);
    let transfer=circle1.innerHTML;  
    circle2.innerHTML=transfer;      
}
// winner circle shadow
function winShadow(winner) {
    document.getElementById(winner).style.boxShadow='0 0 100px rgb(47, 228, 10, 1)';
}
//  play again button  
function playAgain() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('plyerpick').style.boxShadow= 'none';
    document.getElementById('comppick').style.boxShadow= 'none';
}
// Code to show result 
function showResult(message) {
    document.getElementById('restext').innerText = message;
}
// code to update Score
function updateScore() {
    let a=document.getElementById('playerscore');
    a.innerText=youscore;    
}

// Code for rules section

var isOpen = false;
function openPopup() {
    if (isOpen){
        closePopup();
    }else{
        document.getElementById('rulepopup').style.display = 'block';
        isOpen=true;
    }
}
function closePopup() {
    document.getElementById('rulepopup').style.display = 'none';
    isOpen=false;
}
document.getElementById('rules').addEventListener('click', openPopup);