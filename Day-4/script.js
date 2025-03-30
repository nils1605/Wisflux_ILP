function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    if (operation === 'multiply') {
        result = `Multiplication: ${num1 * num2}`;
    } else if (operation === 'divide') {
        result = num2 !== 0 ? `Division: ${num1 / num2}` : "Undefined (cannot divide by zero)";
    }

    document.getElementById("result").innerHTML = result;
}
