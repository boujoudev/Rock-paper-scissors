let you=0;
let cmp=0;
let drawCount=0;


const Scissors=document.querySelector("#scissors-btn")
const Rock=document.querySelector("#rock-btn")
const Paper=document.querySelector("#paper-btn")
const player_score=document.querySelector("#ur_score")
const cmp_score=document.querySelector("#cmp_score")
const result=document.querySelector("#result")
const easterEgg=document.querySelector("#easterEgg")
const easterEgg_btn=document.querySelector("#easterEgg_btn");


const options=["Rock","Paper","Scissors"];
function get_random_option(){
    const index=Math.floor(Math.random()*3)
    return options[index];
  
}
function win(){
    result.innerText="Congrats you have won +1pts to player"
    you+=1;
    player_score.innerText=you.toString();
    easterEgg.innerHTML=""


}
function loose(){
     result.innerText="Computer won try again +1pts to Computer"
    cmp+=1;
    cmp_score.innerText=cmp.toString();
    easterEgg.innerHTML=""
}
function draw(){
     result.innerText="tie no one get a point "
    drawCount++;
    easterEgg.innerHTML=""
    if (drawCount === 3) {
        easterEgg.innerHTML = "<button id=\"easterEgg_btn\">Why!!!!</button>";
        const easterEgg_btn = document.querySelector("#easterEgg_btn");
        easterEgg_btn.onclick = () => {
            alert("Easter Egg Activated! Why are you drawing so much?");
        };
        drawCount = 0;
    }
    
}
function RPS(str1){
    const cmpChoice = get_random_option(); 
   if(str1==="Rock"){
    switch (cmpChoice) {
        case "Rock":
        return draw();
            
        case "Paper":
        return loose();
        
        case"Scissors" :
        return win()
    
        default:
            break;
    }
   }else if(str1==="Paper"){
    switch (cmpChoice) {
        case"Rock":
        return win();
            
        case "Paper":
        return draw();
        
        case"Scissors" :
        return loose()
    
        default:
            break;
    }
   }else if(str1==="Scissors"){
    switch (cmpChoice) {
        case "Rock":
        return loose();
            
        case "Paper":
        return win();
        
        case "Scissors":
        return draw()
    
        default:
            break;
    }
   }
    
}
Rock.onclick = () => RPS("Rock");
Paper.onclick = () => RPS("Paper");
Scissors.onclick = () => RPS("Scissors");



