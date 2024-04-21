// Define a function that takes another function as a parameter
function higherOrderFunction(callback) {
    // Call the provided callback function
    callback();
}

// Define a function that will be passed as a parameter
function myCallbackFunction() {
    console.log("This is my callback function!");
}

// Call the higher-order function and pass myCallbackFunction as a parameter
higherOrderFunction(myCallbackFunction);