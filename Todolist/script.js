const input_box= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const addTask=()=>{
    if(input_box.value===''){
        alert('hii')
    }else{
        let li = document.createElement("li");
        li.innerHTML=input_box.value;
        listContainer.appendChild(li)
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input_box.value=' ';
    saveData();

}
listContainer.addEventListener("click",function(e){  
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("classCheck");
        saveData()
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
const getData=()=>{
  listContainer.innerHTML= localStorage.getItem("data")
}
getData();