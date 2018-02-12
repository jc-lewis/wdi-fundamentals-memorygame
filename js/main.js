var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			//alert("You found a match!");
		}
		else {
			console.log("Sorry, try again.");
			//alert("Sorry, try again.");
		}
};

var flipCard = function(cardId){
	var flippedCard = cards[cardId];
	console.log("User flipped " + flippedCard);
	cardsInPlay.push(flippedCard);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
