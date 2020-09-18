var listElement = document.querySelector('#todos ul');
var inputElement = document.querySelector('#todos input');
var buttonElement = document.querySelector('#todos button');

var todos = JSON.parse(localStorage.getItem('TodoList')) || [];

var renderTodos = function(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo+' ');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

var addTodo = function(){
    var todoText = inputElement.value;
    if(todoText != ''){
        todos.push(todoText);
        renderTodos();
    }
    inputElement.value = '';
    saveToStorage();
}

buttonElement.onclick = addTodo;

var deleteTodo = function(pos){
    todos.splice(pos, 1);

    renderTodos();
    saveToStorage();
}

var saveToStorage = function(){
    localStorage.setItem('TodoList', JSON.stringify(todos));
}