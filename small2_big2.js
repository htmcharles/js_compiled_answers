function findSecondLowestAndGreatest(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Get the second lowest number (index 1)
    const secondLowest = arr[1];

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Get the second greatest number (index 1)
    const secondGreatest = arr[1];

    // Return the second lowest and second greatest numbers as a string
    return `${secondLowest},${secondGreatest}`;
}

// Test the function
console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5])); // Output: "2,4"