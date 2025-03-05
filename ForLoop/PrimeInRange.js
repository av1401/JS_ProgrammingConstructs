function printPrimes(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

// Example usage
printPrimes(10, 30);
