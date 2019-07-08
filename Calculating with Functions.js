// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
//


const isOp = (num, op) => {
    return op ? op(num) : num
}

const zero = (op) => {
    return isOp(0, op)
}
const one = (op) => {
    return isOp(1, op)
}
const two = (op) => {
    return isOp(2, op)
}
const three = (op) => {
    return isOp(3, op)
}
const four = (op) => {
    return isOp(4, op)
}
const five = (op) => {
    return isOp(5, op)
}
const six = (op) => {
    return isOp(6, op)
}
const seven = (op) => {
    return isOp(7, op)
}
const eight = (op) => {
    return isOp(8, op)
}
const nine = (op) => {
    return isOp(9, op)
}

const plus = (num) => {
    return (res) => {
        return res + num
    }
}

const multiply = (num) => {
    return (res) => {
        return res * num
    }
}

const subtract = (num) => {
    return (res) => {
        res - num
    }
}

const divide = (num) => {
    return (res) => {
        return res/num
    }
}