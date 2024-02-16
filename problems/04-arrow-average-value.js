/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// Your code here
const arrowAvgValue = (array) => {
  let aveNum = 0;
  let result = 0;

  for ( let i = 0; i < array.length; i++ ) {
    aveNum += array[i];
  }

  result = aveNum / array.length;

  return result;

}

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
