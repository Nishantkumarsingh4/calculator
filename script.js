function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace('×', '*').replace('÷', '/'));
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const value = eval(display.value.replace('×', '*').replace('÷', '/'));
        const percentage = value / 100;
        display.value = percentage;
    } catch {
        display.value = 'Error';
    }
}
