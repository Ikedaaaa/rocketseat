//import div, {soma, sub, mult} from './funcoes';

/*import * as funcoes from './funcoes';
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(4, 2));
console.log(funcoes.mult(4, 2));*/

/*import ClasseUsuario, {idade as IdadeUsuario} from './functions';
ClasseUsuario.info();*/

//import {idade} from './functions';

/*console.log(IdadeUsuario);
const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(()=> {resolve('Me chupa') }, 2000);
});*/

/*minhaPromise().then(Response =>{
    console.log(response);
})
.catch(err =>{
    console.warn(err);
});*/

/*
async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();
*/

/*
const executaPromise = async() => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();
*/
//##########################################################
/*class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err){
            console.warn('Erro na Requisição');
        }
    }
}

Api.getUserInfo('diego3g');
Api.getUserInfo('ikedaaaa');
Api.getUserInfo('diegodasdasda3g');*/

//Exercícios módulo 3

import axios from 'axios';
//1)
/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();
*/

/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function executaPromise(){
    await delay();
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
executaPromise();
*/

//2)
/*function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    })
}*/

async function getUserFromGithub(username){
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    } catch(err) {
        console.warn('Usuário não existe');
    }
    
}

getUserFromGithub('ikedaaaa');
getUserFromGithub('diego3g124123');

//3)
/*class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
    })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}*/

class Github{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err){
            console.warn('Repositório não existe');
        }
    }
}
Github.getRepositories('ikedaaaa/lp3-Comiafodase');
Github.getRepositories('rocketseat/dslkvmskv');

//4)
/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
}*/

const buscaUsuario = async(user) =>{
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err){
        console.warn('Usuário não encontrado');
    }
}

buscaUsuario('diego3g');

















