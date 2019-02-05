/* 
The program will act as a guessing game in which the user has eight tries to guess a randomly generated number. 
The program will tell the user each time whether he guessed high or low.
*/

var randomNumber =  Math.floor(Math.random() * 10);

alert('YOU HAVE A EIGHT CHANCES TO GUESS A NUMBER RIGHT bETWEEN 0 and 10 inclusive');
console.log(randomNumber);
i = 0;
while(i<8){
    var guessedNumber = parseInt(prompt('Please guess a number'));
    if(guessedNumber === randomNumber){
        alert('CONGRATS, YOU GUESSED RIGHT');
        break;
    }
    if (guessedNumber < randomNumber){
        alert('YOU GUESSED LOW, TRY AGAIN');
    }
    if (guessedNumber > randomNumber){
        alert('YOU GUESSED HIGH, TRY AGAIN');
    }
    i++;
}

if (i === 8){
    alert('OPPS! YOU LOST THE GAME. REFRESH THE BROWSER TO PLAY AGAIN');
}

