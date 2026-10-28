const sumAll = function(a,b) {
    let sum = 0;
    if(Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0){
        for (let i=Math.min(a,b); i<=Math.max(a,b); i++){
            sum += i;
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
