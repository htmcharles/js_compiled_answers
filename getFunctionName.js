function getFunctionName(func) {
    // Wrap the function in a function expression
    const wrapper = function() {
        return func.apply(this, arguments);
    };

    // Return the name of the wrapper function
    return wrapper.name;
}

// Example function
function myFunction() {
    // Function logic
}

// Test the function
console.log(getFunctionName(myFunction)); // Output: "myFunction"