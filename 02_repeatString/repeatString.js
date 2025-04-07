const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let catString = "";
    for(let i = 0; i < num; i++) {
        catString += string;
    }
    return catString;
};

// Do not edit below this line
module.exports = repeatString;
