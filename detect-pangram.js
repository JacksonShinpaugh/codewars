// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, t
// he sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const lettersUsed = []
    const letters = string.replace(/[^a-zA-Z ]/g, "").split('')

    for (let i = 0; i < letters.length; i++) {
        if (lettersUsed.includes(letters[i].toLowerCase()) || letters[i] === ' ') {
            continue
        } else {
            lettersUsed.push(letters[i].toLowerCase())
        }
    }
    
    if (lettersUsed.length === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))