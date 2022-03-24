const getTheTitles = function(list) {
    let x = list;
    let titles = [];
    for (i=0; i<x.length; i++){
       titles[i] = x[i].title;
    }
    return titles;
 
 };

// Do not edit below this line
module.exports = getTheTitles;
