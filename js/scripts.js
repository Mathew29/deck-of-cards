$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var cards = []
    var card;
    for (var i=1; i<=52; i++) {

    console.log(card);

    if(i % 13 === 12) {
      card = "king of";
    } else if(i % 13 === 11) {
      card = "queen of"
    } else if(i % 13 === 10) {
      card = "jack of"
    } else if(i % 13 === 0) {
      card = "ace of"
    } else {
      return i;
    }
    console.log(card);

    if(i < 13) {
      card += " hearts"
    } else if(i < 26) {
      card += " spades"
    } else if (i < 39) {
      card += " diamonds"
    } else {
      card += " clubs"
    }
    console.log(card);

    cards.push();
  };
});
});
