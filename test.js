const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const underText = document.querySelector(".underText");
const tries = document.querySelector(".tries");
const inputBox = document.querySelector(".inputBox");
const content = document.querySelector(".content");

let secretNum = Math.ceil(Math.random() * 100);
console.log(secretNum);
let triesNum = 1;
let gameNum = 0;

function guessNum() {
  let value = input.value;
  if (value < secretNum) {
    underText.textContent = "Больше";
    triesNum++;
  }
  if (value > secretNum) {
    underText.textContent = "Меньше";
    triesNum++;
  }
  if (value == secretNum) {
    inputBox.innerHTML = `<p class="subtitle">Угадал за ${triesNum} ходов</p>
      <button class="btnRepeat">Начать сначала</button>`;
    underText.className = "hide";
  }
}

btn.addEventListener("click", guessNum);

content.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnRepeat")) {
    gameNum++;
    tries.innerHTML = `Сыграно игр: ${gameNum}`;

    // Восстановление исходных условий для новой игры
    secretNum = Math.ceil(Math.random() * 100);
    console.log(secretNum);
    triesNum = 1;
    underText.textContent = "";
    input.value = "";
    let value = input.value;
    if (value < secretNum) {
      underText.textContent = "Больше";
      triesNum++;
    }
    if (value > secretNum) {
      underText.textContent = "Меньше";
      triesNum++;
    }
    inputBox.innerHTML = `
      <input type="text" class="input">
      <button class="btn" onclick="guessNum()">Угадать</button>`;
  }
});
