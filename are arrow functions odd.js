// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]


const odds = (list) => {
    return list.reduce( (r, e, i) => {
        if (e % 2 !== 0) {
            r.push(e)
        }
        return r
    }, [])
}