let buttonDelete = document.getElementById("btn-delete");
let buttonInput = document.getElementById("btn-input");
let kalimat = document.getElementById("kalimat");
let input = document.getElementById("input");
let buttonRandom = document.getElementById("btn-random");
let hasil = document.getElementById("hasil");

//array
let array = [];

// Input Nama
buttonInput.addEventListener("click", () => {
  inputValue = input.value;
  array.push(inputValue);
  input.value = "";
  kalimat.innerText = array.join(" | ");
});

// Delete Nama
buttonDelete.addEventListener("click", () => {
  array.pop();
  kalimat.innerText = array.join(" | ");
});

// Acak Nama
buttonRandom.addEventListener("click", () => {
  if (array.length > 0) {
    let randomName = Math.floor(Math.random() * array.length);
    let outputName = array[randomName];
    hasil.innerText = outputName;
  }
});
