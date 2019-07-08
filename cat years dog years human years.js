// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const years = (years) => {
    let cat = null;
    let dog = null;
    for (let i = 0; i <= years; i++) {
        if (i === 0) {
            cat += 15
        } else if (i === 2) {
            cat += 9
        } else if (i > 2) {
            cat += 4
        }
    }
    for (let d = 0; d <= years; d++) {
        if (d === 0) {
            dog += 15
        } else if (d === 2) {
            dog += 9
        } else if (d > 2) {
            dog += 5
        }
    }
    return [years, cat, dog]
}