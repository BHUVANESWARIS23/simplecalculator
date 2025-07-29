let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function square() {
  let num = parseInt(display.value);
  if (!isNaN(num)) {
    display.value = num * num;
  }
}

function cube() {
  let num = parseInt(display.value);
  if (!isNaN(num)) {
    display.value = num * num * num;
  }
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = parseInt(result);
  } catch {
    display.value = 'Error';
  }
}


