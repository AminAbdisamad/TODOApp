//Global variables
let newTask = document.getElementById("new-task"); // adding new task
let incompleteTaskHolder = document.getElementById("incomplete-tasks"); // listing tasks that are not complete 
let addButton = document.getElementsByTagName("button")[0];// adding task button
let completedTaskHolder = document.getElementById("completed-tasks"); // listing completed task

//create new task elements 
const newTaskElements = function(task){
    //create List Item
    let listItem = document.createElement("li");
    //create checkbox input
    let checkbox = document.createElement("input");
    // create label
    let label = document.createElement("label");
    //create input field
    let input = document.createElement("input");
    // edit button
    let editButton = document.createElement("button");
    // delete button
    let deleteButton = document.createElement("button");

    // list item properties 
    checkbox.type="checkbox";
    input.type="text";
    editButton.className = "edit";
    editButton.innerText = "Edit";
    deleteButton.className = "delete";
    deleteButton.innerText = "Delete";  
    label.innerText = task;


    // appending the above variables to listItem
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    

    return listItem;
}

// Adding Tasks to the App
const addTask = function(){
    if(newTask.value === null || newTask.value === ""){
        let err = document.getElementById("validate");
        err.innerText = "Empty tasks cannot be added";
        setTimeout(()=> err.style.display="none",3000);
        
        
    } else{
        // calling newTaskElements function
        let listItem = newTaskElements(newTask.value);  
        incompleteTaskHolder.appendChild(listItem);
        bindEvents(listItem,completedTask);
        
        newTask.value = "";
        //err.innerText = "successfuuly added";

    }
    
   

    

}
// Editing Tasks 
const editTask = function(){
    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");

    if(listItem.classList.contains("editMode")){
        label.innerText = editInput.value;
    }else{
        editInput.value = label.innerText;
    }

listItem.classList.toggle("editMode");
}
//Deleting Tasks
const deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    //removing items
    ul.removeChild(listItem);

}

//Incomplete Tasks 
const taskIncomplete = function(){
    
    let list = this.parentNode;
    incompleteTaskHolder.appendChild(list);
    bindEvents(list,completedTask);
}
//Completed taks
const completedTask = function (){

    
    let list = this.parentNode;
    completedTaskHolder.appendChild(list);
    bindEvents(list,taskIncomplete);
    
}

// Event handling
//newTask.addEventListener("enter",addTask);
addButton.addEventListener("click",addTask);

//remove Items


// binding task events
const bindEvents = function(taskEventItem,checkboxEventHandler){
    let checkbox = taskEventItem.querySelector("input[type=checkbox]");
    let editButton = taskEventItem.querySelector("button.edit");
    let deleteButton = taskEventItem.querySelector("button.delete"); 

    // edit taks 
    editButton.onclick = editTask;
    // delete task
    deleteButton.onclick = deleteTask;
    //
    checkbox.onchange = checkboxEventHandler;

}

//
for (let i = 0; i<incompleteTaskHolder.children.length; i++){
    bindEvents(incompleteTaskHolder.children[i],completedTask);
}

//
for (let i = 0; i<completedTaskHolder.children.length; i++){
    bindEvents(completedTaskHolder.children[i],taskIncomplete);
}