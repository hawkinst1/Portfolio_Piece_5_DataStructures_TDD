function quickSort(arr){

    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length -1] //last index pivot
    let left = []
    let right = []

    for (let a = 0; a < arr.length - 1; a++) {
        if(arr[a] < pivot){
            left.push(arr[a])
        } else {
            right.push(arr[a])
        }        
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = quickSort;