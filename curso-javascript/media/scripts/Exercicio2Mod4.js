var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var outputElement = document.querySelector('#output ul');

var buscaUsuario = function(){
    var inputText = inputElement.value;
    inputElement.value = '';
    outputElement.innerHTML = '';
    inputText = 'https://api.github.com/users/'+inputText+'/repos';
    axios.get(inputText)
        .then(function(response){
            for(i=0;i<response.data.length;i++){
                var listElement = document.createElement('li');
                var listText = document.createTextNode(response.data[i].name);
                listElement.appendChild(listText);
                outputElement.appendChild(listElement);
            }
        })
        .catch(function(error){
        console.warn(error);
        });
}

buttonElement.onclick = buscaUsuario;