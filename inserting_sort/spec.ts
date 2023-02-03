//  - Inserting sort algorithm
function sortWord(word: string) {
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
