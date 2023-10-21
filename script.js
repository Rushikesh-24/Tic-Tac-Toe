let turn = "X"
let gameover =false;
console.log("hello world")
//function to change the turn
const changeTurn = ()=>
{
    return turn === "X"? "O":"X"
}
//function to check win
const checkWin =()=>{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
    {document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won "
gameover = true
document.querySelector('.imgbox').style.width= "13rem"; 
console.log("won")
}
})
}
//game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn of "+turn;
            }
        }
    })
}) 
//reset button
reset.addEventListener("click",(e)=>{
    let boxtext = document.querySelectorAll('.boxtext')
      Array.from(boxtext).forEach(element => {
        element.innerText=""
      })
      turn = "X";
      gameover= false
        document.getElementsByClassName("info")[0].innerText="Turn of "+turn;
        document.querySelector('.imgbox').style.width= "0rem";
})


// Rules
const showRulesButton = document.getElementById("showRulesButton");
const rulesModal = document.getElementById("rulesModal");
const close = document.getElementById("close");
const maingame=document.getElementById("mainpart");

showRulesButton.addEventListener("click", () => {
    rulesModal.classList.remove("hidden");
    rulesModal.classList.add("flex"); // Show the modal
    maingame.classList.add("filter", "blur-lg"); // Add a blur effect to the body
    showRulesButton.classList.add("hidden");
    reset.classList.add("hidden");
});

close.addEventListener("click", () => {
    rulesModal.classList.add("hidden"); // Hide the modal
    rulesModal.classList.remove("flex");
    maingame.classList.remove("filter", "blur-lg"); // Remove the blur effect
    showRulesButton.classList.remove("hidden");
    reset.classList.remove("hidden");
});

