function getWeekDay(num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log("Please enter a number between 1 and 7.");
    }
}

// Example usage
getWeekDay(3); // Output: Tuesday
