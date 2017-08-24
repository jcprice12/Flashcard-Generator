var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var Deck = require("./Deck.js");

var clozeCard;
var basicCard;
var deck = new Deck("My Deck", []);

try{
    clozeCard = new ClozeCard("this guy (George) was the 1st president. (George) crossed the river", "George", true);
    basicCard = new BasicCard("2+2", "4");
    deck.addCard(clozeCard);
    deck.addCard(basicCard);
    deck.printCards();
    deck.removeCard(clozeCard);
    deck.printCards();
} catch(error){
    console.log(error);
}