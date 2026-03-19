// To Do List

const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo')
const addTodoButton = document.querySelector('#add-todo-button')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const saveTodos = () => {
        localStorage.setItem('todo-list', JSON.stringify(todos))
    }

const renderTodos = () => {
    todoList.innerHTML = ''

    todos.forEach(todos => {
        const li = document.createElement('li')
        li.textContent = todos.text
        todoList.append(li)
    })
}

addTodoButton.addEventListener('click', () => {
    const todoItem = input.value
    todos.push({ "text": todoItem, "completed": false })
    saveTodos()

    input.value = ''
    renderTodos()
})

renderTodos()