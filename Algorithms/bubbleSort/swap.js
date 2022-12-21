const swap = (arr, indexOne, indexTwo) => {

    const temporaryValue = arr[indexTwo];

    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temporaryValue;
}

module.exports = swap;