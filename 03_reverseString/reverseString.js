const reverseString = function(text) {
    splitText = text.split('');
    //console.log(splitText);
    reverseText = splitText.reverse();
    //console.log(reverseText);
    newString = reverseText.join('');
    //console.log(newString);
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
