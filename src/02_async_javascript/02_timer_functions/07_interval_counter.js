/*
Create a function called startCounter that takes an integer n and a delay in milliseconds. 
The function should print integers starting from 1 up to n at each delay interval.

Requirements:
The function should use setInterval to print integers.
If n is less than 1, the function should immediately print "Invalid input".
*/
function startCounter(n, delay) {
    if (n < 1) console.log("Invalid input");

    setInterval(() => {
        for (let i = 1; i = n; i++) {
            console.log(i);
        }
    }, delay);
}

module.exports = startCounter;
