function replaceAt(baseStr, index, replacement) {
    return baseStr.substr(0, index) + replacement + baseStr.substr(index + replacement.length);
}

function ClozeCard(text, cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = null;
    if(!this.search(this.fullText, 0, this.cloze, "", 0, this.fullText)){
        throw (this.cloze + " could not be found in " + this.fullText);
    }
}
ClozeCard.prototype.search = function(sent, index, cloze, builtCloze, searchIndex, partial){
    if(builtCloze === cloze){
        this.partial = partial;
        return true;
    } else {
        if(cloze.length <= (sent.length - (index - (cloze.length - 1)))){
            if(sent[index] === cloze[searchIndex]){
                builtCloze = builtCloze + sent[index];
                partial = replaceAt(partial, index, "_");
                return (this.search(sent,(index + 1), cloze, builtCloze, (searchIndex + 1), partial));
            } else {
                return (this.search(sent, ((index + 1) - builtCloze.length), cloze, "", 0, sent));
            }
        } else {
            this.partial = null;
            return false;
        }
    }
}
module.exports = ClozeCard;