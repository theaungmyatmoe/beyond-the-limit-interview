# Inserting Sort

Inserting sort did not fit with this problem, but I decided to implement it anyway.

## Complexity

The complexity of this algorithm is O(n²).

## Code

```js
function sortWord(word) {
    let arr = word.split('');
    let n = arr.length;

    let targetArr = arr.slice().sort();

    let result = [];
    for (let i = 0; i < targetArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === targetArr[i]) {
                result.push(arr[j]);
                arr.splice(j, 1);
                break;
            }
        }
    }

    return result.join('');
}

let word = "Clean Architecture";
let sortedWord = sortWord(word);

console.log("Sorted word: " + sortedWord);  // ACacceeehilnrrttu

```

** So I decided to implement the Inserting Sort algorithm, but I did not use it in the solution because it did not fit
with the problem. **

## References

https://en.wikipedia.org/wiki/Insertion_sort