
var cards = document.querySelectorAll("img");
cards.forEach(function (card) {
    card.addEventListener("click",function(show) {
       for(let i of cards) {
        i.classList.remove("active");
       }
        show.target.classList.add("active");
    })
})
