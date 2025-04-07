const leapYears = function(year) {
    //use truthy and falsy results (mods) to determite if a leap year or not
    if (!(year % 4) && (!(year % 400) || (year % 100))) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
