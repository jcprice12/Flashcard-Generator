var FlashCard = require("./FlashCard.js");

function Deck(name, cards){
    this.name = name + "";
    this.cards = [];
    if(Array.isArray(cards)){
        if(cards.length > 0){
            this.cards = cards;
        }
    }  else {
        this.errorCodes["101"]();
    }
}
Deck.prototype.printCards = function(){
    for(var i = 0; i < this.cards.length; i++){
        if(this.cards[i].can("printInfo")){
            this.cards[i].printInfo();
        }
    }
}
Deck.prototype.addCard = function(card){
    if(card instanceof FlashCard){
        this.cards.push(card);
    }
}
Deck.prototype.errorCodes = {
    "101" : function(){
        throw ("the cards argument provided is not an array");
    }
}

module.exports = Deck;