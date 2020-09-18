var outputElement = document.querySelector('#input p');
var inputElement = document.querySelector('#input input');
var buttonElement = document.querySelector('#input button');

var checaIdade = function(){
    var inputText = inputElement.value;
    inputElement.value = '';
    outputElement.innerHTML = '';
    return new Promise(function(resolve, reject){
        if(inputText>=18){
            var text = document.createTextNode('Maior que 18');
            resolve(text);
        } else {
            var text = document.createTextNode('Menor que 18');
            reject(text);
        }
    });
};

var chamaPromise = function(){
checaIdade()
    .then(function(response) {
        outputElement.appendChild(response);
    })
    .catch(function(error) {
        outputElement.appendChild(error);
    });
}

buttonElement.onclick = chamaPromise;
   