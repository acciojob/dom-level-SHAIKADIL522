//your JS code here. If required.
const el = document.getElementById("level");

let level = 0;
let current = el;

while (current) {
  level++;
  current = current.parentElement;
}

alert(`The level of the element is: ${level}`);