const ftoc = function(f) {
  cTemp = (5/9)*(f - 32);
  if (cTemp === 0){
     return cTemp;
  }else {
     cTemp = +cTemp.toFixed(1);
  return cTemp;
  }
};

const ctof = function(c) {
  fTemp = ((9/5)* c) + 32;
  if (fTemp === 0){
     return fTemp;
  }else {
     fTemp = +fTemp.toFixed(1);
  return fTemp;
  }
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
