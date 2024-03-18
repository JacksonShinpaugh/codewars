function digPow(n, p){
    // find total of digits to the power of p ascending
    const digits = n.toString().split('')

    let total = 0
    let acc = p
    
    for (let i = 0; i < digits.length; i++) {
        total += Number(digits[i]) ** acc
        acc++
    }

    if (total % n === 0) {
        return total / n
    } else {
        return -1
    }

}

console.log(digPow(46288, 3))