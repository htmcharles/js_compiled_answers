function computePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage
const base = parseFloat(prompt("Enter the base (b):"));
const exponent = parseFloat(prompt("Enter the exponent (n):"));

if (!isNaN(base) && !isNaN(exponent)) {
    const result = computePower(base, exponent);
    console.log(`Result: ${result}`);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}