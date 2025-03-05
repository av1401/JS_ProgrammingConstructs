function findMaxMin(a, b, c) {
    // Perform calculations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    // Store results in an array
    let results = [result1, result2, result3, result4];

    // Find maximum and minimum
    let max = Math.max(...results);
    let min = Math.min(...results);

    console.log("Results: ", results);
    console.log("Maximum: ", max);
    console.log("Minimum: ", min);
}

// Example usage
findMaxMin(3, 5, 2);
