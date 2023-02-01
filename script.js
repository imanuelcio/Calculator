function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  const i = document.getElementById("result").value;
  const j = eval(i);
  document.getElementById("result").value = j;
}
