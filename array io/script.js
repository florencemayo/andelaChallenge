/* 
When completed, the program should first fill in (by asking the user for input) and then list all the elements in an array.
*/

var numberOfElements = parseInt(prompt('Please specify the number to be added in an array'));
var elements = [];
for(i=0; i<numberOfElements; i++){
    var elem = parseInt(prompt('Please add a value to an array'));
    elements.push(elem);
}
console.log(elements);