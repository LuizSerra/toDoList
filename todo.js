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

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
    }
}
function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}

buttonElement.onclick = addTodo;

