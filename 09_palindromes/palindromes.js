const palindromes = function (text) {
    smallText = text.toLowerCase();
    //console.log(smallText);
    inputText = smallText.replace(/ /g, '');
    //console.log(inputText);
    splitText = inputText.split('');
     //console.log(splitText);
    for (i=0; i<=splitText.length; i++){
       if (splitText[i] === ' ' || splitText[i] === '.' || splitText[i] === ',' || splitText[i] === '?' || splitText[i] === '!'){
          splitText.splice(i,1);
       }
    }
    //console.log(splitText);
    splitString = splitText.join('');
    //console.log(splitString);
     reverseText = splitText.reverse();
     //console.log(reverseText);
    reverseString = reverseText.join('');
    //console.log(reverseString);
   if (splitString === reverseString){
      return true;
   }else{
      return false;
   }
    
 };
// Do not edit below this line
module.exports = palindromes;
