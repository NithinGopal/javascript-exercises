const removeFromArray = function() {
    for (j=1; j<= arguments.length; j++){
       let compArray = arguments[j];
       let testArray = arguments[0];
          for (i=0; i<=testArray.length; i++){
          if (testArray[i] === compArray){
             testArray.splice(i,1);
             arguments[0] = testArray;
          }
       }
    }
    return arguments[0];
 };
 
// Do not edit below this line
module.exports = removeFromArray;
