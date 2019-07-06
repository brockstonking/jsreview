// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

const toInitials = (name) => {
    return name.split(' ').reduce( (r, e, i) => {
        r.push(e.split('')[0].toUpperCase())
        return r
    }, []).join('.')
}