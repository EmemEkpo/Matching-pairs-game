const gridLength = 3;
let firstCard = null;
let secondCard = null;
let firstEmoticon = null;
let secondEmoticon = null;

function resetCards() {
  firstCard = null;
  secondCard = null;
  firstEmoticon = null;
  secondEmoticon = null;
}
function shuffleCards(emoticon, cardId) {
  const card = document.getElementById("cardId");
  card.innerHTML = emoticon;

  if (firstCard === null) {
    firstCard = cardId;
    firstEmoticon = emoticon;
  } else {
    secondCard = cardId;
    secondEmoticon = emoticon;
  }
  if (firstEmoticon === secondEmoticon) {
  } else {
    setTimeout(() => {
      document.getElementById(firstCard).innerHTML = "";
      document.getElementById(secondCard).innerHTML = "";
    }, 4000);
  }
}
