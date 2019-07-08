// When provided with a String, capitalize all vowels

// For example:

// Input: "Hello World!"

// Output: "HEllO WOrld!"

const vowels = (str) => {
    return str.split('').reduce( (r, e, i) => {
        if ( e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' ) {
            r.push(e.toUpperCase())
        } else {
            r.push(e)
        }
        return r
    }, []).join('')
}