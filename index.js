let todosContainer = document.querySelector('.todos')

let todos = []

let todoform = document.querySelector('#todoform')
let newtodo = document.getElementById("createtodo")
let checkedstatus = document.querySelector(".checkbox")
let btnClear = document.getElementById("Complition")
let clearCompletedButton = document.getElementById("clearCompleted")

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

// Display all todos when "All" button is clicked
let allItemsButton = document.getElementById("AllItems");
allItemsButton.addEventListener("click", function() {
    displayTodos();
})

// Display active todos when "Active" button is clicked
let activeItemsButton = document.getElementById("Activenss");
activeItemsButton.addEventListener("click", function() {
    displayActiveTodos();
})

// Clear completed todos when "Clear Completed" button is clicked
clearCompletedButton.addEventListener("click", () => {
    const toRemove = todos.filter((obj) => obj.status === true);

    if (toRemove.length > 0 && confirm(`You are about to remove ${toRemove.length} completed task. Are you sure?`)){
        toRemove.forEach((el) => {
            // Remove from todos array
            todos.splice(todos.indexOf(el), 1);
            // Update localStorage
            localStorage.setItem('todos', JSON.stringify(todos));
        });

        // Display updated todos
        displayTodos();
    }
})
