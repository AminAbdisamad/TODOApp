//Global variables
let newTask = document.getElementById("new-task"); // adding new task
let taskList = document.getElementById("incomplete-tasks"); // listing tasks that are not complete 
let addButton = document.getElementsByTagName("button")[0]; // adding task button
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
    //console.log(listItem);

    return listItem;
}

// Adding Tasks to the App
const addTask = function(){
    console.log("Add taks ...");
    // calling newTaskElements function
    let listItem = newTaskElements(newTask.value); // TODO: 
    taskList.appendChild(listItem);
    bindEvents(listItem,completedTask);

    

}
// Editing Tasks 
const editTask = function(){
    console.log("Edit taks ...");

}
//Deleting Tasks
const deleteTask = function(){

    console.log("Delete taks ...");
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    //removing items
    ul.removeChild(listItem);

}

//Incomplete Tasks 
const taskIncomplete = function(){
    console.log("task Incomplete ...");
    let list = this.parentNode;
    taskList.appendChild(list);
    bindEvents(list,completedTask);
}
//Completed taks
const completedTask = function (){

    console.log("Complete Task...");
    let list = this.parentNode;
    completedTaskHolder.appendChild(list);
    bindEvents(list,taskIncomplete);
    
}

// Event handling
addButton.onclick = addTask;
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
for (let i = 0; i<taskList.children.length; i++){
    bindEvents(taskList.children[i],completedTask);
}

//
for (let i = 0; i<completedTaskHolder.children.length; i++){
    bindEvents(completedTaskHolder.children[i],taskIncomplete);
}