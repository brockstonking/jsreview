// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
//
// Example
//
// getSumOfDigits(123) // -> 6

const getSumOfDigits = (num) => {
    return num.toString().split('').reduce( (r, e, i) => {
        r += Number(e)
        return r
    }, 0)
}