// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const noVowels = (str) => {
    return str.split('').reduce( (r, e) => {
        if (e.toLowerCase() !== 'a' && e.toLowerCase() !== 'e' && e.toLowerCase() !== 'i' && e.toLowerCase() !== 'o' && e.toLowerCase() !== 'u') {
            r.push(e)
        }
        return r
    }, []).join('')
}
