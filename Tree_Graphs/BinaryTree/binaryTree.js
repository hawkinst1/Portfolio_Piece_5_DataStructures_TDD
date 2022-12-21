const binarySearch = (input, target) => {

/**
 * process = find the middle, 
 * is target the middle? (base case) if so return
 * is it greater or lower, split up (slice) recusrsion that L or R array repeating unilt base case 
 */
    let left = 0;
    let right = input.length;

    while (left < right){

        const checking = Math.floor((left + right)/2)
        const indexvalue = input[checking]
        console.log(`Index to check: ${checking}`)

        if(indexvalue === target){
            return checking
        }
        if(target > indexvalue){
            left++
        } else {
           right--
        }
    }
    return null;
}

module.exports = binarySearch;