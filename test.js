const content = document.querySelector(".content");

let gameNum = 0;

let triesNum = 1;

// для отрисовки
function render(gameNum) {
  let secretNum = Math.ceil(Math.random() * 100);
  console.log(secretNum);

  content.innerHTML = ` <h1 class="title">Угадай число</h1>
            <p class="subtitle">Я загадал число от 1 до 100, ты должен угадать это число</p>
            <div class="inputBox">
                <input type="text" class="input">
                <button class="btn">Угадать</button>
                <p class="underText">—</p>
                <p class="tries">Сыграно игр: ${
                  gameNum == undefined ? 0 : gameNum
                }</p>
            </div>
    `;
  let inputBox = content.querySelector(".inputBox");
  let input = content.querySelector(".input");
  let underText = content.querySelector(".underText");

  let btn = content.querySelector(".btn");
  btn.addEventListener("click", () =>
    guessNum(inputBox, input, underText, secretNum)
  );
}

function guessNum(inputBox, input, underText, secretNum) {
  let value = input.value;

  if (value < secretNum) {
    triesNum++;
    underText.textContent = "Больше";
  } else if (value > secretNum) {
    triesNum++;
    underText.textContent = "Меньше";
  } else if (value == secretNum) {
    gameNum++;
    inputBox.innerHTML = `<p class="subtitle">Угадал за ${triesNum} ходов</p>
   <button class="btnRepeat">Начать сначала</button>
   <p class="tries">Сыграно игр: ${gameNum}</p>`;
    let btnRepeat = inputBox.querySelector(".btnRepeat");
    btnRepeat.addEventListener("click", () => {
      triesNum = 1;
      render(gameNum);
    });
  }
}

render();
