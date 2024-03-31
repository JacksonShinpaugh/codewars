// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    stringArray = string.split('')
    comparison = string.toUpperCase().split('')
    finalString = ""

    stringArray.forEach((letter, i) => {
        if (letter === comparison[i]) {
            finalString += " "
        }
        finalString += letter
    })
    return finalString
}

console.log(solution("camelCasingTest"))
console.log(typeof 1)