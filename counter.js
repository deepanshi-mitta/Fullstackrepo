let counterDisplayElem = document.querySelector('.para');
let counterMinusElem = document.querySelector('.b2');
let counterPlusElem = document.querySelector('.b1');
let count = 0;
updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    document.getElementById("btn").disabled=false;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    if(count==0){
        document.getElementById("btn").disabled=true;
    }

    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};