function ClozeCard(text, cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = null;
    this.startIndexes = [];
    this.search(this.fullText, 0, this.cloze, "", 0);
    console.log(this.startIndexes);
}
ClozeCard.prototype.search = function(sent, index, cloze, builtCloze, searchIndex){
    if(builtCloze === cloze){
        return true;
    } else {
        if(cloze.length <= (sent.length - index)){
            if(sent[index] === cloze[searchIndex]){
                builtCloze = builtCloze + sent[index];
                if(this.search(sent,(index + 1), cloze, builtCloze, (searchIndex + 1))){
                    this.startIndexes.push(index - (cloze.length - 1));
                }
            }
        } else {
            return false;
        }
    }
    if(sent[(index + 1)] === cloze[0]){
        this.search(sent, (index + 1), cloze, sent[(index + 1)], 1);
    }
}
module.exports = ClozeCard;