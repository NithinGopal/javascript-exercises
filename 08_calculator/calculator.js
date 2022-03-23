const add = function(num1, num2) {
  let sum2 = num1 + num2;
  return sum2;
};

const subtract = function(num1, num2) {
  let diff2 = num1 - num2;
  return diff2;
};

const sum = function(testArray) {
  if (testArray[0] === undefined){
     return 0;
  }else if (testArray.length === 1){
     return testArray[0];
  }else{
     let sumAll = testArray[0];
     for (i=0; i <= testArray.length - 2; i++){
        sumAll += testArray[i+1];
     }
     return sumAll;
  }
};

const multiply = function(multArray) {
  if (multArray[0] === undefined){
     return 0;
  }else if (multArray.length === 1){
     return multArray[0];
  }else{
     let product = multArray[0];
     for (i=0; i <= multArray.length -2; i++){
        product *= multArray[i+1];
     }
     return product;
  }
};

const power = function(p1, p2) {
  pproduct = 1;
  for (i = 1; i <= p2; i++){
     pproduct *= p1;
  }
  return pproduct;
};

const factorial = function(fact) {
   fproduct = 1;
   if (fact === 0 && fact === 1){
      return 1;
   }else {
      for (i = fact; i>= 1; i--) {
         fproduct *= i;
      }
      return fproduct;
   }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
