//Gettting elemets from the DOM
let form=document.querySelector("form");
let input=document.querySelector("input");
let todos=document.querySelector('.todos');

function getTodo(value){
    //Creating new elements
    let todo=document.createElement("div");
    let textEl=document.createElement("span");
    //Setting values & styles
textEl.innerHTML=value;
//append our element to the DOM
todo.appendChild(textEl);
let closeEl=document.createElement("span");

closeEl.innerHTML="&times";
closeEl.classList.add("delete");

//Attach Events
closeEl.addEventListener('click',function(e){
    todos.removeChild(todo);
}
)
todo.appendChild(closeEl);
todo.classList.add("todo");
return todo;

}
form.addEventListener('submit',e=>{
    e.preventDefault();
    let value=input.value;
    if(!value.trim())return;
    todos.appendChild(getTodo(value));
    input.value="";
})