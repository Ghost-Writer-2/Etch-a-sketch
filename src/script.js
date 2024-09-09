const container = document.querySelector(".container");

const div = document.createElement("div");
const text = document.createTextNode("Testing the damn shit");

div.addEventListener('mouseover', () => {
  div.classList.add('bg-blue');
});

div.addEventListener('mouseout', () => {
  div.classList.add('bg-red');
  div.classList.toggle('bg-blue');
})
div.classList.add('bg-red');
div.style.cssText = "height: 100px; transition: background-color 1s;"
container.appendChild(div);
container.appendChild(div);


