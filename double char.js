// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

const doubles = (str) => {
    return str.split('').reduce( (r, e) => {
        r.push(e);
        r.push(e);
        return r;
    }, []).join('')
}