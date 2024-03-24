 let boxes = document.querySelectorAll(".Box")
let congrats= document.querySelector(".congrats")
let game=document.querySelector(".game");
const position = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let turn = true;
let resetgame=()=>{
  turn = true;
  enableboxes()
  congrats.style.display="none"
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  if(turn === true){
    box.innerText="X"
    turn = false;
  } else {
    box.innerText="O"
    turn = true
  }
  box.disabled=true;
  check()
  
  })
})
const disableboxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}
const enableboxes=()=>{
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
let check=()=> {
  for(let pattern of position){
   let pat1= boxes[pattern[0]].innerText
   let pat2= boxes[pattern[1]].innerText
   let pat3= boxes[pattern[2]].innerText
   if (pat1 != "" && pat2 != "" && pat3!= ""){
     if(pat1===pat2 && pat2===pat3 && pat3===pat1){
      congrats.style.display="flex"
      disableboxes()
     }
   }
  }
}
let reset = document.querySelector(".reset")
let newgame = document.querySelector(".newgame")
reset.addEventListener("click", resetgame)
newgame.addEventListener("click", resetgame)
