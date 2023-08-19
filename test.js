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
  } else if (value > secretNum) {
    underText.textContent = "Меньше";
    triesNum++;
  } else if (value == secretNum) {
    inputBox.innerHTML = `<p class="subtitle">Угадал за ${triesNum} ходов</p>
                <button class="btnRepeat">Начать сначала</button>`;
    underText.classList.add("hide");
  }
}

function guessRepeat() {
  // Восстановление исходных условий для новой игры
  secretNum = Math.ceil(Math.random() * 100);
  console.log(secretNum);
  triesNum = 1;
  content.innerHTML = `
                <h1 class="title">Угадай число</h1>
                <p class="subtitle">Я загадал число от 1 до 100, ты должен угадать это число</p>
                <div class="inputBox">
                    <input type="text" class="input">
                    <button class="btn">Угадать</button>
                </div>
                <p class="underText">—</p>
                <p class="tries">Сыграно игр: ${gameNum}</p>`;

  // Добавляем обработчик для кнопки btn снова
  btn.addEventListener("click", guessNum);
}

btn.addEventListener("click", guessNum);

content.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnRepeat")) {
    gameNum++;
    tries.innerHTML = `Сыграно игр: ${gameNum}`;
    guessRepeat();
  }
});
