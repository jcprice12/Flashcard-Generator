var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var Deck = require("./Deck.js");

var clozeCard;
var deck = new Deck("My Deck", []);

try {
    clozeCard = new ClozeCard("Cool Geor George Washington was the first president", "George Washington", true);
    console.log(clozeCard);
} catch(error){
    console.log(error);
}

try{
    clozeCard = new ClozeCard("iiiiiiiiiiiiii", "im", true);
    console.log(clozeCard);
} catch(error){
    console.log(error);
}

try{
    clozeCard = new ClozeCard("he George was the 1st president. he George crossed the river", "George", false);
    console.log(clozeCard);
} catch(error){
    console.log(error);
}

try{
    clozeCard = new ClozeCard("he George was the 1st president. he George crossed the river", "George", true);
    console.log(clozeCard);
    deck.addCard(clozeCard);
    deck.printCards();
} catch(error){
    console.log(error);
}