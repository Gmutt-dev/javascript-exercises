const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"

    // get a new string containing only letters and numbers
    let newString = string
                        .toLowerCase()
                        .split("")
                        .filter((char) => alphanumeric.includes(char))
                        .join("");
    
    let reversedString = newString
                            .split("")
                            .reverse()
                            .join("");
    
    return newString === reversedString ;

};

// Do not edit below this line
module.exports = palindromes;
