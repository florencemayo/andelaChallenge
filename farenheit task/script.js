/* 
In this challenge, write a program that takes in three arguments, a start temperature (in Celsius), 
an end temperature (in Celsius) and a step size. Print out a table that goes from the start temperature 
to the end temperature, in steps of the step size; you do not actually need to print the final end temperature
 if the step size does not exactly match. You should perform input validation: 
 do not accept start temperatures less than a lower limit (which your code should specify as a constant) or 
 higher than an upper limit (which your code should also specify). 
You should not allow a step size greater than the difference in temperatures.
*/

function printTemperatures($startTemp, $endTemp, $stepSize){
    $temp = $startTemp;
    $table = [];
    while($temp<=$endTemp){
        $table.push($temp);
        $temp+=$stepSize;
    }
    console.log($table);
}

const $lowerLimit = 0;
const $upperLimit = 100;

$startTemp = parseInt(prompt("Write start temperature in degree celsious"));
while($startTemp < $lowerLimit){
    alert('Opps! Too low, go above 0 please');
    $startTemp = parseInt(prompt("Write start temperature in degree celsious"));   
}

$endTemp = parseInt(prompt("Write end temperature in degree celsious"));
while($endTemp > $upperLimit){
    alert('Opps! Too high, go below 100 please');
    $endTemp = parseInt(prompt("Write end temperature in degree celsious"));
}

$tempDifference = $endTemp - $startTemp;
$stepSize = parseInt(prompt("Write step size for temperature to jump"));
while ($stepSize > $tempDifference) {
    alert('Opps! Step size bigger than difference of the specified limits')
    $stepSize = parseInt(prompt("Write step size for temperature to jump"));
}


printTemperatures($startTemp, $endTemp, $stepSize);