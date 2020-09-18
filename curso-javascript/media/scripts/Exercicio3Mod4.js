var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var outputElement = document.querySelector('#output ul');
var warnElement = document.querySelector('#error')

var buscaUsuario = function(){
    var inputText = inputElement.value;
    inputElement.value = '';
    outputElement.innerHTML = '';
    warnElement.innerHTML = '';
    inputText = 'https://api.github.com/users/'+inputText+'/repos';

    var loadElement = document.createElement('li');
    var loadText = document.createTextNode('Carregando...');
    loadElement.appendChild(loadText);
    outputElement.appendChild(loadElement);
    axios.get(inputText)
        .then(function(response){
            loadElement.removeChild(loadText);
            outputElement.removeChild(loadElement);
            outputElement.innerHTML = '';

            for(i=0;i<response.data.length;i++){
                var listElement = document.createElement('li');
                var listText = document.createTextNode(response.data[i].name);
                listElement.appendChild(listText);
                outputElement.appendChild(listElement);
            }
        })
        .catch(function(){
            loadElement.removeChild(loadText);
            outputElement.removeChild(loadElement);
            var warnMessage = document.createTextNode('Usuário não encontrado');
            var errorElement = document.createElement('p');
            errorElement.appendChild(warnMessage);
            warnElement.appendChild(errorElement);
        });
}

buttonElement.onclick = buscaUsuario;