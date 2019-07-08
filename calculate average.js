// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.reduce( (r, e, i) => {
    r += e
    return r
  }, 0)/array.length;
}
