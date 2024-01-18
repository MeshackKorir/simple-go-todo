let todosContainer = document.querySelector('.todos')

let todos = []

let todoform = document.querySelector('#todoform')
let newtodo = document.getElementById("createtodo")
let checkedstatus = document.querySelector(".checkbox")
let btnClear = document.getElementById("Complition")

todoform.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(newtodo.value.trim() !== ""){
        let todo = {
            taskname: newtodo.value.trim(),
            status: checkedstatus.checked
        }

        todos.push(todo)

        console.log(todos);

        localStorage.setItem('todos', JSON.stringify(todos))

        displayTodos()

        // display items 
        const itemCount = document.createElement("div")
        itemCount.textContent = todos.length + " items left";
        const sector1Elements = document.querySelector(".section1");
        sector1Elements.innerHTML = '';  
        sector1Elements.appendChild(itemCount);

    }
})

// Display todos
let displayTodos = function(){

    

    let taskItems = localStorage.getItem("todos")

    taskItems = JSON.parse(taskItems)

    let tasks = document.querySelectorAll('.todos .todo')

    tasks.forEach(el=>{
        el.remove()
    })


    taskItems.forEach((el, index)=>{
        let todo = document.createElement('div')
        todo.className = "todo"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className ="checkbox"
        checkbox.checked = el.status

        let taskname = document.createElement('div')
        taskname.textContent = el.taskname

        todo.appendChild(checkbox)
        todo.appendChild(taskname)

        todosContainer.appendChild(todo)
    })
}

displayTodos();

// display all todos when all button is clicked

let allItemsButton = document.getElementById("AllItems");
allItemsButton.addEventListener("click", function() {
    displayTodos();
})

// Clearing all the completed tasks


btnClear.addEventListener("click", () => {
    const toRemove = todos.filter((obj) => obj.active === false);

    if (toRemove.length > 0 && confirm(`You are about to remove ${toRemove.length} completed task. Are you sure?`)){
        toRemove.forEach((el) => {
            removeEl(el.DOMele);
        });
    }
})



















