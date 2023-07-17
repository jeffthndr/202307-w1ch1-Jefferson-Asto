const calculatorScreen = document.querySelector("#screenNumber");
const symbolsButtons = document.querySelectorAll(".symbol");
const resetButton = document.querySelector("#reset");
const numbersButtons = document.querySelectorAll(".number");
const iqualButton = document.querySelector("#iqual");

let operator;

const reset = () => {
  calculatorScreen.innerHTML = 0;
};

const addNumber = (number) => {
  if (number === ".") {
    if (calculatorScreen.textContent.includes(".") === false) {
      calculatorScreen.textContent = calculatorScreen.textContent + number;
      return;
    }
    if (
      operator !== undefined &&
      calculatorScreen.textContent.indexOf(operator) !==
        calculatorScreen.textContent.length - 1
    ) {
      if (
        calculatorScreen.textContent.includes(
          ".",
          calculatorScreen.textContent.indexOf(operator)
        ) === false
      ) {
        calculatorScreen.textContent = calculatorScreen.textContent + number;
      }
    }
  } else {
    if (calculatorScreen.textContent === "0") {
      calculatorScreen.innerHTML = number;
    } else {
      calculatorScreen.textContent = calculatorScreen.innerHTML + number;
    }
  }
};

const addSymbol = (symbol) => {
  if (Number(calculatorScreen.innerHTML)) {
    if (symbol === "√") {
      calculatorScreen.innerHTML =
        (Math.sqrt(Number(calculatorScreen.innerHTML)).toFixed(3) * 1000) /
        1000;
      return;
    }
    if (symbol === "±") {
      calculatorScreen.textContent = calculatorScreen.textContent * -1;
      return;
    } else {
      calculatorScreen.innerHTML = calculatorScreen.textContent + symbol;
      operator = symbol;
      return;
    }
  }
  if (!Number(calculatorScreen.innerHTML)) {
    result();
    if (symbol === "√") {
      if (!Number(calculatorScreen.textContent)) {
        calculatorScreen.innerHTML =
          (Math.sqrt(
            Number(
              calculatorScreen.innerHTML.substring(
                0,
                calculatorScreen.textContent.indexOf(operator)
              )
            )
          ).toFixed(3) *
            1000) /
          1000;
      } else {
        calculatorScreen.innerHTML =
          (Math.sqrt(Number(calculatorScreen.innerHTML)).toFixed(3) * 1000) /
          1000;
      }
      return;
    }
    if (symbol === "±") {
      if (!Number(calculatorScreen.textContent)) {
        calculatorScreen.textContent =
          calculatorScreen.textContent.substring(
            0,
            calculatorScreen.textContent.indexOf(operator)
          ) * -1;
      } else {
        calculatorScreen.textContent = calculatorScreen.textContent * -1;
      }
      return;
    }
    if (Number(calculatorScreen.textContent)) {
      calculatorScreen.textContent += symbol;
      operator = symbol;
    } else {
      calculatorScreen.textContent = calculatorScreen.textContent.substring(
        0,
        calculatorScreen.textContent.indexOf(operator)
      );
      calculatorScreen.textContent += symbol;
      operator = symbol;
    }
  }
};

const result = () => {
  if (
    calculatorScreen.textContent.indexOf(operator) !==
    calculatorScreen.textContent.length - 1
  ) {
    if (calculatorScreen.textContent.includes("+")) {
      calculatorScreen.innerHTML =
        ((
          Number(
            calculatorScreen.textContent.substring(
              0,
              calculatorScreen.textContent.indexOf("+")
            )
          ) +
          Number(
            calculatorScreen.textContent.substring(
              calculatorScreen.textContent.indexOf("+") + 1,
              calculatorScreen.textContent.length
            )
          )
        ).toFixed(3) *
          1000) /
        1000;
    }
    if (calculatorScreen.textContent.includes("-")) {
      calculatorScreen.textContent =
        ((
          Number(
            calculatorScreen.textContent.substring(
              0,
              calculatorScreen.textContent.indexOf("-")
            )
          ) -
          Number(
            calculatorScreen.textContent.substring(
              calculatorScreen.textContent.indexOf("-") + 1,
              calculatorScreen.textContent.length
            )
          )
        ).toFixed(3) *
          1000) /
        1000;
    }
    if (calculatorScreen.textContent.includes("x")) {
      calculatorScreen.innerHTML =
        ((
          Number(
            calculatorScreen.textContent.substring(
              0,
              calculatorScreen.textContent.indexOf("x")
            )
          ) *
          Number(
            calculatorScreen.textContent.substring(
              calculatorScreen.textContent.indexOf("x") + 1,
              calculatorScreen.textContent.length
            )
          )
        ).toFixed(3) *
          1000) /
        1000;
    }
    if (calculatorScreen.textContent.includes("÷")) {
      calculatorScreen.innerHTML =
        ((
          Number(
            calculatorScreen.textContent.substring(
              0,
              calculatorScreen.textContent.indexOf("÷")
            )
          ) /
          Number(
            calculatorScreen.textContent.substring(
              calculatorScreen.textContent.indexOf("÷") + 1,
              calculatorScreen.textContent.length
            )
          )
        ).toFixed(3) *
          1000) /
        1000;
    }
  }
};

resetButton.addEventListener("click", reset);
numbersButtons.forEach((number) =>
  number.addEventListener("click", () => addNumber(number.textContent))
);
symbolsButtons.forEach((symbol) =>
  symbol.addEventListener("click", () => addSymbol(symbol.textContent))
);
iqualButton.addEventListener("click", result);
