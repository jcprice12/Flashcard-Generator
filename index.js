var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

try {
    var clozeCard1 = new ClozeCard("Cool Geor George Washington was the first president", "George Washington");
    console.log(clozeCard1);
} catch(error){
    console.log(error);
}

try{
    var clozeCard2 = new ClozeCard("iiiiiiiiiiiiii", "im");
    console.log(clozeCard2);
} catch(error){
    console.log(error);
}