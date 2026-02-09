let tasks = [];

let editInd=-1;
// Adding Function
function Add1() {
  let inp1 = document.querySelector(".inp1");
let sel1 = document.querySelector(".sel1");
  if(inp1.value===""){
    alert("Plz Enter task");
    return;
  }
  let obj = {
    Task: inp1.value,
    priority: sel1.value
  };
  if(editInd==-1){
   tasks.push(obj);
  }
  else{
    tasks[editInd]=obj;
    editInd=-1;
  }
 
  display()
  inp1.value="";
  sel1.value="High"
}
// Editing function

function edit1(i){
  let inp1 = document.querySelector(".inp1");
  let sel1 = document.querySelector(".sel1");
    let task=tasks[i].Task;
    let priority=tasks[i].priority;
    inp1.value=task;
    sel1.value=priority;
    editInd=i;
    
}

// Deleting function
function delete1(i){
 tasks.splice(i,1);
 display();
}

// Displaying function
function display(){
   let maindiv=document.querySelector(".cards");
    maindiv.innerHTML="";
  if(tasks.length==0){
    let h1=document.createElement("h1");
    h1.classList.add("notasks")
    h1.textContent="You've completed All Tasks";
    maindiv.appendChild(h1);
    return;
  }  
   for(let i=0;i<tasks.length;i++){
    // card info div(mini card)
     let div=document.createElement("div");
     div.classList.add("card-info");
   //todo in p tag  
      let p=document.createElement("p");
      p.classList.add("card-p1");
      p.textContent=`${i+1}.${tasks[i].Task}`;
      let edit=document.createElement('button');
      edit.textContent="Edit"
      edit.classList.add("Edit");
      edit.addEventListener("click",()=>{
        edit1(i);
      })
   //btn div 
      let div1=document.createElement("div");
      div1.classList.add("btns");
   // btn element creation 
    let btn1=document.createElement("button")
    let btn2=document.createElement("button")
    // btn color based on priority
    if(tasks[i].priority==="High"){
      btn1.classList.add("card-red");
    }
     if(tasks[i].priority==="Low"){
      btn1.classList.add("card-green");
    }
     if(tasks[i].priority==="Medium"){
      btn1.classList.add("card-yellow");
    }
    btn2.classList.add("card-del");
    btn1.textContent=tasks[i].priority;
    btn2.textContent="Completed";
    btn2.addEventListener("click",()=>{
      delete1(i)
   });
  // btn pushing in btns div
    div1.appendChild(btn1);
    div1.appendChild(btn2);
    div1.appendChild(edit);
  // appending and div in card-info
    div.appendChild(p);
    div.appendChild(div1);
  // final append sind main div
   maindiv.appendChild(div);
   }
}

display();