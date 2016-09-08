//be hardcore, hard code (but don't do that)
/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
})

deltaX = 10 - 1
deltaY = 15 - 3
X = Math.pow(deltaX, 2)
Y = Math.pow(deltaY, 2)
console.log(Math.sqrt((X+Y)))
*/


//more elegant solution
/*

var PointOne = [1,3];
var PointTwo = [10,15];

function equation{
	var deltaX = pointTwo[0] - pointOne[0];
	var deltaY = pointTwo[1] - pointOne[1];
	var sumOfSquares = Math.pow(deltaX, 2) + Math.pow(deltaY, 2);
	var answer = Math.sqrt(sumOfSquares);
}


*/

//trying to figure out argv, but no success :(
/*
var myArgs = process.argv;
console.log(myArgs)
var arr = Object.keys(myArgs).map(function(k) { return Margs[k] });
console.log(typeof(myArgs))
console.log(typeof(arr))


// print process.argv
*/

//take user input
console.log(process.argv)

corr1 = process.argv[2].split(",")
corr2 = process.argv[2].split(",")


var x1 = parseInt(corr1[0])
var y1 = parseInt(corr1[1])
var x2 = parseInt(corr2[0])
var y2 = parseInt(corr2[1])

d = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)
console.log(d)

