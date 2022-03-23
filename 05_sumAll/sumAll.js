// const sumAll = function() {

// };

const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
       return 'ERROR';
       
    }else if (num1 > 0 || num2 > 0) {
       if (num1 < num2){
          sum = num2 * (num1 + ((num2-1)/2));
          return sum;
       }else if (num1>num2) {
          sum = num1 * (num2 + ((num1-1)/2));
          return sum;
       }
    }
 
 };

// Do not edit below this line
module.exports = sumAll;
