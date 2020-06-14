var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café.',
    'Estudar JavaScript.',
    'Acessar Conteúdo de Estudo.',
]

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
    }
}

buttonElement.onclick = addTodo;