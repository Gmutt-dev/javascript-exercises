const removeFromArray = function(arr, ...restArgs) {
    const newArr = arr;
    
    //Outer loop to iterate over all items to be removed (restArgs)
    for (let i = 0; i < restArgs.length; i++) {
        //only run inner loop if the array containes at least one instance of the item to be removed
        if (newArr.includes(restArgs[i])) {
            //inner loop to iterate over the array to remove all items needed (newArr)
            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j] === restArgs[i]) {
                    newArr.splice(j,1);
                    j--; // reduce j by 1 because array length reduced by 1, otherwise would miss checking the next element
                }
            }
        }
    }
    return newArr; 
};

// Do not edit below this line
module.exports = removeFromArray;
