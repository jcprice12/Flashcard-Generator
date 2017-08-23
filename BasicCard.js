var FlashCard = require("./FlashCard.js");

function BasicCard(front, back){
    this.front = front;
    this.back = back;
}
BasicCard.prototype.checkCard = function(guess){
    if(guess === this.back){
        return true;
    }
    return false;
}
BasicCard.prototype.printInfo = function(){
    console.log("Basic Card");
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
}
module.exports = BasicCard;