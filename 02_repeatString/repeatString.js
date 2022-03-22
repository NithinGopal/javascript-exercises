const repeatString = function(word, num) {
    let newString = '';
    for (let i=1; i<=num; i++){
        newString = word.concat('',newString);
      }
     return newString;
};

// Do not edit below this line
module.exports = repeatString;
