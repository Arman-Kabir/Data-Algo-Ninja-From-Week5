function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length <= 1) return arr;

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);

    // upper 3 lines in 1 line ->
    // return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
}



console.log(mergeSort([7, 3, 9, 8, 10]));

// console.log(merge([1, 3, 5], [2, 4, 6, 9]));

// The Slice() method returns selected elements in an array, as a new array
// The Slice() method selects from a given start, up to a(not inclusive) given end.
// The slice() method does not change the original array.