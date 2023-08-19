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
      <button class="btnRepeat" onclick="guessRepeat()">Начать сначала</button>`;
    underText.className = "hide";
  }
}

function guessRepeat() {
  // Восстановление исходных условий для новой игры
  secretNum = Math.ceil(Math.random() * 100);
  console.log(secretNum);
  triesNum = 1;
  content.innerHTML = ` <h1 class="title">Угадай число</h1>
            <p class="subtitle">Я загадал число от 1 до 100, ты должен угадать это число</p>
            <div class="inputBox">
                <input type="text" class="input">
                <button class="btn">Угадать</button>
            </div>
            <p class="underText">—</p>
            <p class="tries">Сыграно игр: 0</p>`;
}

btn.addEventListener("click", guessNum);



