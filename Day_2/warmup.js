//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any
// numbers in the returned list.)

//You can trust that this function will never be called with n < 0 or n > 10.

//For example:


//let n = Math.floor(Math.random() * 10);
//console.log(n)
//luckyNumbers(2)
// returns (3, 7)
//luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

function lucky_numbers(n) {
    let lucky_set = new Set();
    while(lucky_set.size < n) {
        lucky_set.add(Math.floor(Math.random() * 10) + 1)
    }
    return Array.from(lucky_set);
}
console.log(lucky_numbers(10));