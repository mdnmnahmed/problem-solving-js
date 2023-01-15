// Find repeated number in the 
var array = [4, 6, 46, 56, 84, 2, 46];
var positionsData = [];
for (let dataHolder = 0; dataHolder < array.length; dataHolder++) {
    let positions = [];
    for (let dataChecker = 0; dataChecker < array.length; dataChecker++) {

        debugger
        if (array[dataHolder] === array[dataChecker]) {
            positions.push(dataChecker);
        }
        console.log('next');
    }

    positionsData.push({
        value: array[dataHolder],
        positions
    });
}

console.log("positions: ", positionsData);