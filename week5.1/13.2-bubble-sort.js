// bubble sort
// move largest element to the end



// time complexity - O(n^2) || best -- O(n)
// space complexity - O(n)
// when nearly sorted - bubble sort far far better.
function swapVal(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {

            console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                swapVal(arr, j, j + 1);
                // swap
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                swap = true
            }
        }
        if (!swap) break;
    }
    console.log(arr);
    return arr;
}

console.log(bubbleSort([1, 10, 2, 20, 6, 30, 9]));
