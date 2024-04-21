function Longest_Country_Name(countryNames) {
    let longestName = '';

    for (let country of countryNames) {
        if (country.length > longestName.length) {
            longestName = country;
        }
    }

    return longestName;
}

// Test the function
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])); // Output: "United States of America"