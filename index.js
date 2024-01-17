let todoForm = document.querySelector('#todoform')
let newtodo = document.getElementById("createtodo")
let checkedstatus = document.querySelector(".checkbox")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    +(newtodo.Value.trim() !=="");{
        let todo = {
            taskname: newtodo.Value.trim(),
            status: checkedstatus.checked
        }

        todos.push(todo)
 }
})