function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

// Test the function
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr.slice())); // Using slice to avoid modifying the original array