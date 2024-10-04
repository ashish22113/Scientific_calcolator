let display = document.getElementById("display");

function appendCharacter(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('^', '**'));
  } catch (error) {
    display.value = "Error";
  }
}
