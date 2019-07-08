// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

const whatToDrink = (age) => {
    return age < 14 ? 'drink toddy' 
    : age < 18 && age > 13 
    ? 'drink coke' 
    : age < 21 && age > 17 
    ? 'drink beer' 
    : age > 20 
    ? 'drink whisky' 
    : null
}
