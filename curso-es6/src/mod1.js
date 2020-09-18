//Classes
class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo Todo');
    }
}

/*const MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}*/

class Lista {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ListaTodo extends Lista{
    constructor(){
        super();
        this.usuario = 'Matheus';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new ListaTodo();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

class Matematica{
    static soma(a, b){
        return a+b
    }
}

console.log(Matematica.soma(1, 2));

//Const & Let
const x = 1;
//x=3; não funciona
const usuario0 = {nome:'njsabdia'};

usuario0.nome = 'djavu'; // isso pode (mutação)

function ItIsATest(z){
    let y = 2;
    if(z>5){
        let y = 4;
        console.log(z, y);
    }
}

//Operações em Vetores e Arrow Functions e Valores Padrão
const arr = [1, 2, 3, 4, 9, 5, 7, 8, 10];

const newArr = arr.map(item => item * 2);

const soma = (a=3, b=6) => a+b; //Valores Padrão

console.log(newArr);

const teste = () => ({nome:'Diego'});

const sum = arr.reduce(function(total, next){
    return total + next;
})

const filter = arr.filter(function(item){
    return item%2 ===0;
})

const find = arr.find(function(item){
    return item === 4;
})

//Desestruturação
const usuario = {
    nome:'Ikeda',
    idade:'17',
    empresa:'Apdata',
    endereco:{
        cidade:'Taboão',
        estado:'São Paulo',
    },
};

const {nome, idade, endereco:{cidade}} = usuario;

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

//Rest
const [a, b, ...c] = arr;

const add = (...params) => params.reduce((total, next) => total + next);

const add1 = (a, b, ...params) => params;

console.log(add1(1, 3, 3, 5, 7, 54, 6));

//Spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

const usuario1 = {
    nome: 'Matheus',
    idade: 17,
    empresa:'Apdata',
};

const usuario2 = {...usuario1, nome:'David'};

//Template literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//object short syntax
const usuario3 = {
    nome,
    idade,
    empresa: 'Apdata',
};

console.log(usuario3);