// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function test2(str) {
    let strArr = [...str]
    let nonRepeatedValues = new Set(strArr)
    return [...nonRepeatedValues].map(noRepeatedVal => {
        let repeatedTimes = strArr.filter(strVal => (strVal === noRepeatedVal)).length
        return [noRepeatedVal, repeatedTimes]
    }).sort((firstElement, secondElement) => {
        if (firstElement[1] < secondElement[1]) return 1
        if (firstElement[1] > secondElement[1]) return -1
        return 0
    })[0][0]
}

module.exports = test2;
