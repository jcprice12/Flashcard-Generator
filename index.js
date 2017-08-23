var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// try {
//     var clozeCard1 = new ClozeCard("Cool Geor George Washington was the first president", "George Washington", false);
//     console.log(clozeCard1);
// } catch(error){
//     console.log(error);
// }

// try{
//     var clozeCard2 = new ClozeCard("iiiiiiiiiiiiii", "im", false);
//     console.log(clozeCard2);
// } catch(error){
//     console.log(error);
// }

try {
    var clozeCard3 = new ClozeCard("Cool Geor George Washington was the first president", "George Washington", true);
    console.log(clozeCard3);
} catch(error){
    console.log(error);
}

try{
    var clozeCard4 = new ClozeCard("iiiiiiiiiiiiii", "im", true);
    console.log(clozeCard4);
} catch(error){
    console.log(error);
}

try{
    var clozeCard5 = new ClozeCard("he George was the 1st president. he George crossed the river", "George", false);
    console.log(clozeCard5);
} catch(error){
    console.log(error);
}