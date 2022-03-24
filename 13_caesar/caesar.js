const caesar = function(text,n) {
    let code = [];
    let newChar = [];
    for (i=0; i<text.length; i++){
       if (text.charAt(i) === ',' || text.charAt(i) === '!' || text.charAt(i) === '?' || text.charAt(i) === ' '){
          newChar[i] = text.charAt(i);
       }else {
          code[i] = text.charCodeAt(i) + n;
       newChar[i] = String.fromCharCode(+code[i]);
       }
    }
       let newString = newChar.join('');
       return newString;
    };

// Do not edit below this line
module.exports = caesar;
