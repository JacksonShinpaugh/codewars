// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// row + row - 1

function towerBuilder(nFloors) {
    const pyramid = []
    const maxStars = nFloors + nFloors - 1
    for (let i = 1; i <= nFloors; i++) {
        let row = ""
        const stars = i + i - 1
        const spaces = maxStars - stars
        if (spaces === 0) {
            for (let k = 0; k < stars; k++) {
                row += "*"
            }
        }
        for (let j = 1; j <= spaces; j++) {
            row += " "
            if (j === spaces / 2) {
                for (let k = 0; k < stars; k++) {
                    row += "*"
                }
            }
        }
        pyramid.push(row)
    }
    return pyramid
}
console.log(towerBuilder(5))