const fibonacci = function(num) {
    let term1 = 1;
    let term2 = 1;
    let newTerm = 0;

    if (typeof num == "string") num = Number.parseInt(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    // first two terms are known to be 1
    if (num < 3) return 1;
    if (num >= 3) newTerm = term1 + term2;
    if (num > 3) {
        for (let i = 4; i <= num; i++) {
            term1 = term2;
            term2 = newTerm;
            newTerm = term1 + term2;
        }
    }
    return newTerm;
};

// Do not edit below this line
module.exports = fibonacci;
