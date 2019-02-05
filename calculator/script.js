/*
The program should function as a basic calculator; it should ask the user to input what type of arithmetic operation he would like, 
and then ask for the numbers on which the operation should be performed.
The calculator should then give the output of the operation.
*/

alert("SIMPLE CALCULATOR \n\ Choose an operator where: \n\  1 for DIVISION \n\  2 for MULTIPLICATION \n\  3 for ADDITION \n\  4 for SUBTRACTION");
var operator = parseInt(prompt('Please select an operator between: 1 for DIVISION, 2 for MULTIPLICATION, 3 for ADDITION, 4 for SUBTRACTION.'));

var firstNumber = parseInt(prompt('Please add a first number'));
var secondNumber = parseInt(prompt('Please add a second number'));
var result = 0;

switch(operator){
    case 1: 
        result = firstNumber / secondNumber;
        alert(firstNumber+' / '+ secondNumber+ ' = ' +result);
        break;
    
    case 2: 
        result = firstNumber * secondNumber;
        alert(firstNumber+' * '+ secondNumber+ ' = ' +result);
        break;

    case 3: 
        result = firstNumber + secondNumber;
        alert(firstNumber+' + '+ secondNumber+ ' = ' +result);
        break;

    case 4: 
        result = firstNumber - secondNumber;
        alert(firstNumber+' - '+ secondNumber+ ' = ' +result);
        break;
    
    default:
        alert('Wrong choice were indicated');
        break;
}

alert('GOODBYE');