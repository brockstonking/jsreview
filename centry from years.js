// Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Let's see some examples:

// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20
// Hope you enjoy it .. Awaiting for Best Practice Codes hahaha ..

// Enjoy Learning !!!

// NOTE: for C++, cmath (i.e. math.h) is disallowed in this Kata, in particular the ceil function; otherwise, what is the fun of this Kata? ;)

const cent = (year) => {
    const period = [('' + year).split('')[('' + year).split('').length - 2], ('' + year).split('')[('' + year).split('').length - 2]].join('')
    if (period > 0) {
        return Number([('' + year).split('')[0], ('' + year).split('')[1]].join('')) + 1
    } else {
        return Number([('' + year).split('')[0], ('' + year).split('')[1]].join(''))
    }
}