var expect  = require('chai').expect;
var BasicCard = require("./../models/BasicCard.js");
var ClozeCard = require("./../models/ClozeCard.js");
var Deck = require("./../models/Deck.js");

describe("Basic Card Creation", function(){
    it('Should create a Basic Card', function() {
        var basicCard = new BasicCard("2+2","4");
        expect(basicCard.front).to.equal("2+2");
        expect(basicCard.back).to.equal("4");
    });
})

describe("Cloze Card Creation", function(){
    it('Should create a Cloze Card with only one cloze instance', function(){
        var clozeCard = new ClozeCard("George Washington was the first president of the United States", "George Washington", false);
        expect(clozeCard.fullText).to.equal("George Washington was the first president of the United States");
        expect(clozeCard.cloze).to.equal("George Washington");
        expect(clozeCard.partial).to.equal("_________________ was the first president of the United States");
    });
    it('Should create a Cloze Card with two cloze instances', function(){
        var clozeCard = new ClozeCard("George Washington was the first president of the United States. George Washington had wooden teeth", "George Washington", true);
        expect(clozeCard.fullText).to.equal("George Washington was the first president of the United States. George Washington had wooden teeth");
        expect(clozeCard.cloze).to.equal("George Washington");
        expect(clozeCard.partial).to.equal("_________________ was the first president of the United States. _________________ had wooden teeth");
    });
});

describe("Deck Testing", function(){
    it("Should create a deck with two cards", function(){
        var deck = new Deck(":D", []);
        var clozeCard = new ClozeCard("1+6", "1");
        var basicCard = new BasicCard("2+2", "4");
        deck.addCard(clozeCard);
        deck.addCard(basicCard);
        expect(deck.name).to.equal(":D");
        expect(deck.cards.length).to.equal(2);
        expect(deck.cards[0]).to.equal(clozeCard);
        expect(deck.cards[1]).to.equal(basicCard);
    });
    it("Should delete a cloze card from a deck", function(){
        var deck = new Deck(":D", []);
        var clozeCard = new ClozeCard("1+6", "1");
        var basicCard = new BasicCard("2+2", "4");
        deck.addCard(clozeCard);
        deck.addCard(basicCard);
        deck.removeCard(clozeCard);
        expect(deck.cards.length).to.equal(1);
        expect(deck.cards[0]).to.equal(basicCard);
    });
    it("Should delete a basic card from a deck", function(){
        var deck = new Deck(":D", []);
        var clozeCard = new ClozeCard("1+6", "1");
        var basicCard = new BasicCard("2+2", "4");
        deck.addCard(clozeCard);
        deck.addCard(basicCard);
        deck.removeCard(basicCard);
        expect(deck.cards.length).to.equal(1);
        expect(deck.cards[0]).to.equal(clozeCard);
    });
});