function replaceAt(baseStr, index, replacement) {
    return baseStr.substr(0, index) + replacement + baseStr.substr(index + replacement.length);
}

function ClozeCard(text, cloze, multi){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = null;
    if(this.fullText && this.cloze){
        if(!multi){
            if(!this.search(this.fullText, 0, this.cloze, "", 0, this.fullText)){
                this.errorCodes["101"](this.cloze, this.fullText);
            }
        } else {
            this.multiSearch(this.fullText, this.cloze, this.fullText);
            if(this.partial === this.fullText){
                this.partial = null;
                this.errorCodes["101"](this.cloze, this.fullText);
            }
        }
    } else {
        this.errorCodes["102"]();
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
ClozeCard.prototype.multiSearch = function(sent, cloze, partial){
    for(var i = 0; i < sent.length; i++){
        if(cloze.length <= (sent.length - (i - (cloze.length - 1)))){
            var j = 0;
            var oldPartial = partial;
            for(j; j < cloze.length; j++){
                if(cloze[j] !== sent[(i+j)]){
                    partial = oldPartial;
                    j = 0;
                    break;
                } else {
                    partial = replaceAt(partial, (i+j), "_")
                }
            }
            i = i + j;
        } else {
            break;
        }
    }
    this.partial = partial;
}
ClozeCard.prototype.errorCodes = {
    "101": function(cloze, fullText){
        throw ("\"" + cloze + "\" could not be found in \"" + fullText + "\"");
    },
    "102": function(){
        throw ("Full Text and Cloze cannot be empty, null, or undefined");
    }
}
module.exports = ClozeCard;