// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const addTwoArrays = (arr1, arr2) => {
    return arr1.reduce( (r, e, i) => {
        r += e
        return r
    }, 0) + arr2.reduce( (r, e, i) => {
        r += e
        return r
    }, 0)
}