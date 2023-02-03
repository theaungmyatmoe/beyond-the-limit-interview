function sortWord(word: string, target: string) {
    let arr = word.split('');
    let n = arr.length;

    let targetArr = target.split('');

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
let sortedWord = sortWord(word, 'ArchitLean Ctecture');

console.log("Sorted word: " + sortedWord);
