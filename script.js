function manipulateArray() {
    // Step 1: Create an initial promise that resolves after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        // Step 2: Filter out odd numbers (only keep even numbers)
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Step 3: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").textContent = multipliedNumbers.join(",");
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

// Call the function when the script loads
manipulateArray();
