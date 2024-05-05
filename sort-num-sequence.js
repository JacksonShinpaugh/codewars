// Description
// You are given a number sequence (an array) that contains some positive integer and zero.

// [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
// It can be split to some zero-terminated sub sequence, such as [3,2,1,0], [5,6,4,0] ..

// Your task is: First, sort each sub sequence according to the ascending order (don't sort the zero, 
// it always at the end); Second, sort all sub sequence according to their sum value (ascending order too).

// Arguments:

// sequence: The number sequence.
// Results & Note:

// The result is the sorted number sequence.
// If some sub sequences have the same sum value, sort them according to their original order.
// Some Examples
// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
//              [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
// [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

// sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
// [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]

function sortSequence(sequence) {
    const sortedSequence = []
    // find index of all 0's
    const zeroIndices = []
    sequence.forEach((num, i) => {
        if (num === 0) {
            zeroIndices.push(i)
        }
    })

    // create a subarray for every set of numbers split by a zero
    const subArrays = []
    let subArray = []
    for (let i = 0; i < sequence.length; i++) {
        // how do I split into subarrays?
        if (zeroIndices.includes(i)) {
            // sort sub array, find sum and push object to subArrays
            subArrays.push({
                array: subArray.sort((a, b) => a - b),
                sum: subArray.reduce((acc, c) => acc + c)
            })
            subArray = []
        } else {
            subArray.push(sequence[i])
        }
    }

    // sort list of subarrays by sum of their numbers
    subArrays.sort((a, b) => a.sum - b.sum).forEach(sub => {
        sub.array.forEach(num => sortedSequence.push(num))
        sortedSequence.push(0)
    })

    return sortedSequence
}

console.log(sortSequence([ 886, 239, 551, 925, 911, 862, 388, 0, 185, 432, 101, 462, 0, 239, 940, 470, 130, 102, 910, 0, 273, 278, 0, 252, 633, 564, 707, 548, 837, 250, 719, 259, 971, 916, 0, 340, 221, 500, 800, 234, 0, 784, 891, 583, 547, 415, 344, 588, 27, 434, 280, 316, 959, 942, 73, 141, 504, 874, 318, 0, 923, 803, 15, 201, 655, 675, 822, 462, 807, 368, 465, 769, 715, 551, 919, 403, 0 ]))