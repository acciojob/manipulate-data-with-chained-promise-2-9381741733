//your JS code here. If required.
// Initialize the promise with a 3-second delay
new Promise((resolve) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
})
.then((array) => {
    // Filter out the odd numbers after 1-second delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000);
    });
})
.then((evenNumbers) => {
    // Multiply even numbers by 2 after a 2-second delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubledNumbers = evenNumbers.map(num => num * 2);
            document.getElementById('output').textContent = doubledNumbers.join(', ');
            resolve(doubledNumbers);
        }, 2000);
    });
})
.catch((error) => {
    console.error('An error occurred:', error);
});


