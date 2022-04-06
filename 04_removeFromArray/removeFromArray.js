const removeFromArray = function(arr, ...args) {
    let newArr = []
    let arrLength = arr.length
    let arrToCompare = [...args]
    for (let i = 0; i < arrLength; i++) {
        if (!arrToCompare.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
