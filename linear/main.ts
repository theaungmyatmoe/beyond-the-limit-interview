/*

 What is the formula of these arithmetic sequence
 0,1.5, 6,10.5,14,19.5,...,n
1,2,3, 4,  5,     6,7,8,...,n

n  = n-1
d = 1.5 (for first)
d = 1 (for second)

a = 0 (for common difference)
 */


function nthTerm(a, d, n) {
    return a + (n - 1) * d;
}

function sumOfNthTerm(a, d, n) {
    return (n / 2) * (2 * a + (n - 1) * d);
}

const a = 0;
const d = 1.5;
const n = 10;

console.log(nthTerm(a, d, n));
console.log(sumOfNthTerm(a, d, n));