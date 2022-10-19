const form = document.querySelector('form');
const ul = document.querySelector('#tasks');


form.onsubmit = (event) => {
  event.preventDefault();

  const input = document.querySelector('#get-text');
  const inputValue = input.value;
  
  if(inputValue == "") return;

  const newLi = document.createElement('li');

  newLi.innerHTML = `
    <span>${inputValue}</span>
    <button class="delete">X</button>
  `;
  newLi.classList.add('task');

  ul.appendChild(newLi);
  inputValue = " ";
};

ul.onclick = (event) => {
  if(event.target.classList.contains('delete')) {
    event.target.parentElement.remove()
  }
}