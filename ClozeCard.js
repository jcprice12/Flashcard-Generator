function ClozeCard(text, cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = null;
    this.startIndexes = [];
    this.search(this.fullText, 0, this.cloze, "", 0);
    console.log(this.startIndexes);
}
ClozeCard.prototype.search = function(sent, index, cloze, builtCloze, searchIndex){
    console.log("start of function (" + sent + "," + index + "," + cloze + "," + builtCloze + "," + searchIndex + ")");
    if(builtCloze === cloze){
        console.log("found");
        return true;
    } else {
        if(cloze.length <= (sent.length - (index - (cloze.length - 1)))){
            console.log("not found yet");
            if(sent[index] === cloze[searchIndex]){
                console.log("sent[" + index + "] === cloze[" + searchIndex + "]");
                builtCloze = builtCloze + sent[index];
                console.log("builtCloze: " + builtCloze);
                if(this.search(sent,(index + 1), cloze, builtCloze, (searchIndex + 1))){
                    console.log("found and pushing");
                    this.startIndexes.push(index - (cloze.length - 1));
                }
            } else {
                this.search(sent, ((index + 1) - builtCloze.length), cloze, "", 0);
            }
        } else {
            console.log("not found at all");
            return false;
        }
    }
    // if((index + 1) < sent.length){
    //     if(sent[index] === cloze[0]){
    //         this.search(sent, (index + 1), cloze, sent[index], 1);
    //     }
    // }
}
module.exports = ClozeCard;