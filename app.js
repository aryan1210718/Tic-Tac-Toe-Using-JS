let boxes=document.querySelectorAll(".boxs");

let resetbtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let newgamebtn=document.querySelector("#newgame");
let msg=document.querySelector("#msg")

let turn0=true; //turnX ,turn0;

//here 2D arrays i used to store winning patterns

let winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clickjeds");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled="true";//to prevent more than one time changes of x and o alternately

        checkwinner();
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations,The Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes(); //this func for not disabling btn fun after a winner is declared
}

const checkwinner= () =>{
    for(let patterns of winningpatterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                // console.log("winner",pos1val); ----- //any postion can return the true winner cause it is connected through innertext condition
                showwinner(pos1val);
            }
     }
  }
}


resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click",resetgame);