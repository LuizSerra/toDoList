var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

        var pos = todos.indexOf(todo);
    }
}

function addTodo() {
    var todoText = inputElement.value;
    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        saveToStorage();
        renderTodos();
        
    }
}
function removeTodo(pos) {
    todos.splice(pos, 1);
    saveToStorage();
    renderTodos();
    
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;
renderTodos();
