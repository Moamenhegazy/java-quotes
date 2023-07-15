
var getQuote= [
    "Be yourself; everyone else is already taken.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "If you tell the truth, you don't have to remember anything."
]

    var getName=[
        "― Oscar Wilde",
        "― Marcus Tullius Cicero",
        "― Mae West",
        "― Mahatma Gandhi",
        "― Mark Twain" ] 

function myFunction() {
var randomQuote =getQuote[Math.floor(Math.random()*getQuote.length)];
var randomName =getName[Math.floor(Math.random()*getName.length)];
    document.getElementById("result").innerHTML = randomQuote ;     
    document.getElementById("result2").innerHTML = randomName ;
}