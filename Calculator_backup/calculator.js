function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return 'Invalid operator';
    }
}

// Calculator 1
document.getElementById('calc1Btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc1FirstNum').value);
    const num2 = parseFloat(document.getElementById('calc1SecondNum').value);
    const operator = document.getElementById('calc1Operator').value;
    const result = calculate(num1, num2, operator);
    document.getElementById('calc1Result').value = result;
});

// Calculator 2
document.getElementById('calc2Btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc2FirstNum').value);
    const num2 = parseFloat(document.getElementById('calc2SecondNum').value);
    const operator = document.querySelector('input[name="operation"]:checked').value;
    const result = calculate(num1, num2, operator);
    document.getElementById('calc2Result').value = result;
});

// Calculator 3
document.getElementById('calc3Btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc3FirstNum').value);
    const num2 = parseFloat(document.getElementById('calc3SecondNum').value);
    const operator = document.getElementById('calc3Operator').value;
    const result = calculate(num1, num2, operator);
    document.getElementById('calc3Result').value = result;
});

// Increment/Decrement adjustment logic
function adjustValue(id, step) {
    const input = document.getElementById(id);
    input.value = parseFloat(input.value) + step;
}
