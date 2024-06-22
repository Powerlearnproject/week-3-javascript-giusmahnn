// Declare variables of different data types
var stringVariable = "Hello, World!";
var numberVariable = 42;
var booleanVariable = true;

// Log variables to the console
console.log("String Variable:", stringVariable);
console.log("Number Variable:", numberVariable);
console.log("Boolean Variable:", booleanVariable);

// Define and call functions to perform simple operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Error: Division by zero");
        return null;
    }
}

function multiply(a, b) {
    return a * b;
}

// Call the functions and log the results
console.log("Addition (10 + 5):", add(10, 5));
console.log("Subtraction (10 - 5):", subtract(10, 5));
console.log("Division (10 / 2):", divide(10, 2));
console.log("Division (10 / 0):", divide(10, 0)); // This should log an error
console.log("Multiplication (10 * 5):", multiply(10, 5));

// DOM Manipulation

// Function to update the result paragraph
function updateResult(result) {
    document.getElementById('result').textContent = "Result: " + result;
}

// Event listeners for arithmetic operations
document.getElementById('addBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    updateResult(add(num1, num2));
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    updateResult(subtract(num1, num2));
});

document.getElementById('divideBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = divide(num1, num2);
    if (result !== null) {
        updateResult(result);
    }
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    updateResult(multiply(num1, num2));
});

// Event listener to change text content
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textToChange').textContent = "The text has been changed!";
});

// Event listener to change style
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.getElementById('textToChange').style.color = 'blue';
    document.getElementById('textToChange').style.fontWeight = 'bold';
});

// Chart.js example
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
