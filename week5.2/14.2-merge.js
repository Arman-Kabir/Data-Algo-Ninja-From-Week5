
// Merge Sort
// Breakdown Merge sort
// Single item is always sorted

// MERGE
/**
      i
 [1,3,5] [2,4,6,9]
              j
[1,2,3,4,5,6,9]



 [1,2,3,4,5,6,9]


 */
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

console.log(merge([1, 3, 5], [2, 4, 6, 9]));