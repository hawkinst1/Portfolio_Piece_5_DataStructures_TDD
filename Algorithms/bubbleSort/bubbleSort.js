const swap = require("./swap");

const bubbleSort = input => {
    let swapping = true

    while(swapping){
        swapping = false
        for(let i = 0; i < input.length -1; i++){
            if(input[i] > input[i+1]){
                console.log(`Swapping ${input[i]} with ${input[i+1]}`)
                swap(input, i, i+1);
                swapping = true;
            }
        }
        console.log(input);
    }
    return input
}

module.exports = bubbleSort;