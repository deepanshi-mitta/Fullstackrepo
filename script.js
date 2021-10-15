const inputBox=document.querySelector(".inputfield input")
const addbtn=document.querySelector(".inputfield button")
const todoList=document.querySelector(".todolist")
inputBox.onkeyup=()=>{
    let userData=inputBox.value;
    if(userData.trim()!=0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
}

addbtn.onclick=()=>{
    let userData=inputBox.value;
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    let newLiTag='';
    listArr.array.forEach((element,index) => {
        newLiTag+=`<li> ${element}<span><i class="fa fa-trash"></i></span></li>`;
        
    });
    todoList.innerHTML=newLiTag;

}
