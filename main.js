// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const painting = document.querySelector('#palette').style.background
document.querySelectorAll('#palette').forEach(div => {
  div.addEventListener('click', pickColor => {
    document.querySelector('#current-color').style.background = pickColor.target.style.background;
  })
});

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', section => {
    section.target.style.background = document.querySelector('#current-color').style.background;
  })
});