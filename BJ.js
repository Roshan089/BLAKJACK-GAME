var player = {
    name: "roshi",
    money: 200
}

var card = [];
var message = "";
var hasbalckjack=false;
var isAlive=true;
let sum = 0;


var cardEl = document.getElementById("cardsel");
var sumEl = document.getElementById("sumel");
var messageEl = document.getElementById("message-el")
var startBtn = document.getElementById("strt-btn");
var newCardel= document.getElementById("new-card");
var playerEL=document.getElementById("nam-mon");


function newRandom() {
    let randomnumber = Math.floor(Math.random()*13)+1;
    if (randomnumber>10){
    return 10
}
    else if(randomnumber===1){
        return 11
    }
    else
    return randomnumber;    
}


function startGame(){
    isAlive=true;
    var fristCard=newRandom();
    var secondCard= newRandom();
    card = [fristCard, secondCard];
    sum= fristCard + secondCard;
    render();
}

function render(){
    cardEl.textContent= "cards:"
    for(let i =0;i<card.length;i++){
        cardEl.textContent+=card[i]+ " ";
    }

   
    sumEl.innerText = "sum: "  + sum; 
if (sum<21) {
    message = "do you want to drew a new card"; 
    
}
else if(sum===21){
    message="wooo! you gat a balckjack";
    hasbalckjack=true;   
}
else{
    message = "you are out of the game"
    isAlive = false;
}
messageEl.innerText = message;
}




startBtn.addEventListener("click", () => {
    
    startGame();

})


newCardel.addEventListener("click", () => {
    if(hasbalckjack===false && isAlive===true){
    let newCard = newRandom()
    card.push(newCard);
    sum += newCard;
    
        render();
    }
    
        
})

