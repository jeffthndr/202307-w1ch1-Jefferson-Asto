let defaultCard;

const createDeck = () => {
  const cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardsSuits = ["♥", "♦️", "♣️", "♠️"];
  const cardsDeck = [];
  for (let suit = 0; suit < cardsSuits.length; suit++) {
    for (
      let numberOrLetter = 0;
      numberOrLetter < cardsNumbers.length;
      numberOrLetter++
    ) {
      cardsDeck.push({
        suitKind: cardsSuits[suit],
        number: cardsNumbers[numberOrLetter],
        value: numberOrLetter + 2,
      });
    }
  }
  return cardsDeck;
};

const defaultRandomCard = () => {
  const deck = createDeck();
  let randomCardIndex = Math.floor(Math.random() * deck.length);
  defaultCard = deck[randomCardIndex];

  document.querySelector(".defaultUpperSuit").textContent =
    defaultCard.suitKind;
  document.querySelector(".defaultCardNumber").textContent = defaultCard.number;
  document.querySelector(".defaultBottomSuit").textContent =
    defaultCard.suitKind;

  return defaultCard;
};

const selectBiggerRandomCard = () => {
  const deck = createDeck();
  const randomCardIndex = Math.floor(Math.random() * deck.length);
  let userRandomCard = deck[randomCardIndex];
  const youWinMessage = "Bigger😎";
  const youLostMessage = "Smaller😑";
  const tieGame = "Tie🤷";

  document.querySelector(".userUpperSuit").textContent =
    userRandomCard.suitKind;
  document.querySelector(".userCardNumber").textContent = userRandomCard.number;
  document.querySelector(".userBottomSuit").textContent =
    userRandomCard.suitKind;

  if (userRandomCard.value > defaultCard.value) {
    document.querySelector(".message").textContent = youWinMessage;
  }
  if (userRandomCard.value < defaultCard.value) {
    document.querySelector(".message").textContent = youLostMessage;
  }
  if (userRandomCard.value === defaultCard.value) {
    document.querySelector(".message").textContent = tieGame;
  }
  setTimeout(startGame, "2000");
};

const selectSmallerRandomCard = () => {
  const deck = createDeck();
  const randomCardIndex = Math.floor(Math.random() * deck.length);
  let userRandomCard = deck[randomCardIndex];
  const youWinMessage = "Smaller😎";
  const youLostMessage = "Bigger😑";
  const tieGame = "Tie🤷";

  document.querySelector(".userUpperSuit").textContent =
    userRandomCard.suitKind;
  document.querySelector(".userCardNumber").textContent = userRandomCard.number;
  document.querySelector(".userBottomSuit").textContent =
    userRandomCard.suitKind;

  if (userRandomCard.value < defaultCard.value) {
    document.querySelector(".message").textContent = youWinMessage;
  }
  if (userRandomCard.value > defaultCard.value) {
    document.querySelector(".message").textContent = youLostMessage;
  }
  if (userRandomCard.value === defaultCard.value) {
    document.querySelector(".message").textContent = tieGame;
  }

  setTimeout(startGame, "2000");
};

const startGame = () => {
  defaultRandomCard();
  buttonStartSection.classList.add("hidden");
  cardsSection.classList.remove("hidden");
  msgBox.classList.remove("hidden");
  buttonSection.classList.remove("hidden");
  document.querySelector(".userCardNumber").textContent = "❔";
  document.querySelector(".message").textContent = "";
};

const starButtonElement = document.querySelector(".start-button");
starButtonElement.addEventListener("click", startGame);

const buttonStartSection = document.querySelector(".buttonStart");

const cardsSection = document.querySelector(".cards-section");

const msgBox = document.querySelector(".message-box");

const buttonSection = document.querySelector(".button-section");

const biggerButtonElement = document.querySelector(".bigger");
biggerButtonElement.addEventListener("click", selectBiggerRandomCard);

const smallerButtonElement = document.querySelector(".smaller");
smallerButtonElement.addEventListener("click", selectSmallerRandomCard);
