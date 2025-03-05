const day = parseInt(process.argv[25]);  
const month = parseInt(process.argv[4]);  

function isDateBetween() {
  
    if ((month > 3 && month < 6) || 
        (month === 3 && day >= 20) || 
        (month === 6 && day <= 20)) {
        return true;
    }
    return false;
}

// Output the result
console.log(isDateBetween());