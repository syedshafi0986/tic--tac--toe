let btns=document.querySelectorAll(".button")//change from button to ".button"
let user0=true
let count=1
let drawcall=true
let winnercall=document.querySelector("#h1win")
let resettbn=document.querySelector(".reset")
//changes: declare the positions priorly
let pos1
let pos2
let pos3

let winning_match=[
    //retriving all the possible winning matches
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
btns.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(user0){
            e.textContent="O"
            user0=false
        }
        else{
            e.textContent="X"
            user0=true
        }
        e.disabled=true
        checkwin()
        count++;
    })
})
//disabling remainig buttons
function disablebtns(){
    btns.forEach((e)=>{
        e.disabled=true
    })
}

//check for the win 
function checkwin(){
    for(let pattern of winning_match){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(btns[pattern[0]].innerHTML,btns[pattern[1]].innerHTML,btns[pattern[2]].innerHTML)
        
         pos1=btns[pattern[0]].innerHTML;
         pos2=btns[pattern[1]].innerHTML;
         pos3=btns[pattern[2]].innerHTML;
        if(pos1!==""&& pos2!=="" && pos3!==""){

            if(pos1==pos2 && pos2==pos3){
        
                winnerIS(pos1)
                disablebtns()
                drawcall=false
                
            }
            
        }

    }
    if(count==9){
        drawfn()

    }

}
function drawfn(){
    if(drawcall){
        winnercall.innerHTML=` it is a draw `
    }
    else{
        winnerIS(pos1)
        //the reason why we have declared pos1,pos2,pos3 is to access the value of the variables outside the function
    }
}
function winnerIS(win){
    winnercall.innerHTML=` the winner is ${win} `
    //change
    resettbn.innerHTML="new game"
}
resettbn.addEventListener("click",()=>{
    btns.forEach((e)=>{
        //change
        resettbn.innerHTML="reset"
        e.disabled=false;
        e.innerHTML=""
        count=1//change
        winnercall.innerHTML=""//change
    })
})
