// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

const name = (noun) => {
    const answer = noun.split('')[0] === noun.split('')[noun.split('').length - 1] ? true : false
    if (answer) {
        return `${ noun.split('')[0].toUpperCase() }${ noun.split('').splice(1).join('') }${ noun }`
    } else {
        return `The ${ noun.split('')[0].toUpperCase() }${ noun.split('').splice(1).join('') }`
    }
}
