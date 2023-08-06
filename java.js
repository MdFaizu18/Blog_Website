// function for moving the car left side 
function moveLeft() {
let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
left-=100;
if(left>=0){
character.style.left=left+"px";
}
}


// function for moving the car right side 
function moveRight() {
let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
left+=100;
if(left<300){
character.style.left=left+"px";
}
}


// function for moving the car up side 
function moveUp() {
let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
top-=100;
if(top>=0){
character.style.top=top+"px";
}
}


// function for moving the car down side 
function moveDown() {
let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
top+=100;
if(top<400){
character.style.top=top+"px";
}
}


// for pressing key function of right and left arrow 
document.addEventListener("keydown", event=>{
    if (event.key === "ArrowLeft"){moveLeft()};
    if (event.key === "ArrowRight"){moveRight()};
    if (event.key === "ArrowUp"){moveUp()};
    if (event.key === "ArrowDown"){moveDown()};
})


// for randomly moving the top car 
let block = document.getElementById('block');
let counter =0;
var highScore =[];
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random()*3)
    left = random*100
    counter++;
    block.style.left = left+"px";
})




// to check whether the game is win or over 
setInterval (function () {
   var charLeft =  parseInt(window.getComputedStyle(character).getPropertyValue("left"))
   var blockLeft =  parseInt(window.getComputedStyle(block).getPropertyValue("left"))
   var blockTop =  parseInt(window.getComputedStyle(block).getPropertyValue("top"))
   var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
   
//    to calculate the both car blocks where they meet together 
   if(charLeft==blockLeft  && blockTop<400 && blockTop>320 ){
    
        

       alert("Game is Over, Score:" +counter)
       counter=0;

       block.style.animation=none;
    //    block.style.display=none;
    //    gameOver(charTop,blockTop);
    }
 },1)


// for moving the car in mobile screeen by touching either sides

document.getElementById('left').addEventListener('touchstart', moveLeft());
document.getElementById('right').addEventListener('touchstart', moveRight());


// to store the high score in the localhost

localStorage.setItem("High Score" , counter);