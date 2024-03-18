function tribonacci(signature,n){
    const sequence = signature

    if (n === 0) {
        return []
    }

    if (n <= 3) {
        return sequence.slice(0, n)
    }

    for (let i = 0; i < n-3; i++) {
        sequence.push(sequence.slice(-3).reduce((acc, c) => acc + c))
    }
    return sequence
}

console.log(tribonacci([0,0,1], 10))