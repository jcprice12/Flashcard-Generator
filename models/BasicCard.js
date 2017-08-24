var FlashCard = require("./FlashCard.js");

function BasicCard(front, back){
    this.front = front;
    this.back = back;
}
BasicCard.prototype = new FlashCard();
BasicCard.prototype.checkCard = function(guess){
    if(guess === this.back){
        return true;
    }
    return false;
}
BasicCard.prototype.isEqual = function(card){
    if(card instanceof BasicCard
    && card.front === this.front
    && card.back === this.back){
        return true;
    }
    return false;
}
BasicCard.prototype.printInfo = function(){
    console.log("");
    console.log("*************************************************");
    console.log("Basic Card");
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
    console.log("*************************************************");
}
module.exports = BasicCard;