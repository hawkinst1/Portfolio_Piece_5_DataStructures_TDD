
let counter = 0
const mergeSort = input => {
    /**
     with an arr we need to /2 and rounding down find the middle and split there.
     repeat until we have single arrays? and then add back in sequentially
     
     */
const length = input.length;

if(length === 1){
    return input;
}

const mid = Math.floor(length/2);
const leftArr = input.slice(0, mid);
const rightArr = input.slice(mid, length);
return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr[0]);
            leftArr.shift()
        } else {
            sortedArr.push(rightArr[0]);
            rightArr.shift()
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
module.exports = mergeSort