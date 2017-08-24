function FlashCard(){}
FlashCard.prototype.can = function(methodName){
    return ((typeof this[methodName]) == "function");
}
module.exports = FlashCard;