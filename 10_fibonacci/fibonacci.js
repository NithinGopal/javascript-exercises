const fibonacci = function(num) {
    if (num <= 0){
       return 'OOPS';
    }else{
       let fib = [0,1];
       num = +num;
    for (i=fib.length; i<=num; i++){
       fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
    }
 };

// Do not edit below this line
module.exports = fibonacci;
