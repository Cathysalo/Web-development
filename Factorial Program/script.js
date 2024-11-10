function calcFactorial() {
    const n = parseInt(document.getElementById('factorialInput').value);
    let result = 1;

    if (n < 0) {
        document.getElementById('factorialResult').textContent = 'Answer: Unspecified';
        return;
    }

    
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    document.getElementById('factorialResult').textContent = `Answer: ${result}`;
}


function calcSum() {
    const n = parseInt(document.getElementById('sumInput').value);
    let sum = 0;
    let i = 1;

    if (n < 1) {
        document.getElementById('sumResult').textContent = 'Answer: Enter a number greater than 0';
        return;
    }

    
    while (i <= n) {
        sum += i;
        i++;
    }

    document.getElementById('sumResult').textContent = `Answer: ${sum}`;
}


function calcOddEven() {
    const n = parseInt(document.getElementById('oddEvenInput').value);
    let oddSum = 0, evenSum = 0;
    let i = 1;

    if (n < 1) {
        document.getElementById('oddEvenResult').textContent = 'Answer: Enter a number greater than 0';
        return;
    }

    
    do {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
        i++;
    } while (i <= n);

    document.getElementById('oddEvenResult').textContent = `Odd Sum: ${oddSum}, Even Sum: ${evenSum}`;
}
