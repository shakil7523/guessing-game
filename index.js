//initializaing value

let totalAttempts=5;
let attempts=0;
let totalWons=0;
let totallost=0;


//finding elements
const form= document.querySelector("form");
const cardbody= document.querySelector(".card-body");
const guessingNumber= form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardbody.querySelector(".resultText");
const remaingAttempts=cardbody.querySelector(".remaingAttempts");
const lostWonsmessage=document.createElement("p");

form.addEventListener("submit", function(event){
event.preventDefault();    

attempts++;
if(attempts===5){
guessingNumber.disabled=true;
checkButton.disabled=true;
}if(attempts<6){
    let guessNumber=Number(guessingNumber.value);
    checkResult(guessNumber);
    remaingAttempts.innerHTML=`Reaming attempts:${totalAttempts-attempts}`
}
guessingNumber.value="";
});

function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5)
    if(guessingNumber===randomNumber){
    resultText.innerHTML=`You Have Won`;
    totalWons++;
    }else{
       resultText.innerHTML=`You Have Lost: Random Number Was:${randomNumber}`;
       totallost++;
    }
    lostWonsmessage.innerHTML=`Won:${totalWons},Lost:${totallost}`;
    lostWonsmessage.classList.add("large-text");
    cardbody.appendChild(lostWonsmessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}