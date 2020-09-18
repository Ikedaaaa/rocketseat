import api from './api';
//Nota para mim mesmo se estiver vendo esse código no futuro:
//Tentar solucionar o problema do código de que o elemento 'a'
//criado com setAttribute 'onclick', não consegue encontrar
//a função removeRepository, dando ReferenceError
//removeRepository is not defined at HTMLAnchorElement.onclick
//Estava pesquisando setAttribute.onclick not working e
//HTMLAnchorElement.onclick

//tentar referenciar o 'a' no constructor, criando atributo Id no render()

class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');        
        this.inputEl = document.querySelector('#repo-form input');
        this.removeEl = document.getElementById('remove');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);

        this.removeEl.onclick = event => this.removeRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(){
        event.preventDefault();
        const repoInput = this.inputEl.value;
        if(repoInput.length === 0){return;}

        this.setLoading();
        try{
            const response = await api.get(`/repos/${repoInput}`);
            const {name, description, html_url, owner:{avatar_url}} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.render();
        }catch(err){
            alert('O repositório não existe');
        }
        this.inputEl.value = '';
        this.setLoading(false);
    }
    removeRepository(pos = 0){
        event.preventDefault();

        this.repositories.splice(pos, 1);
        this.render();
    }
    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let removeEl = document.createElement('a');
            removeEl.appendChild(document.createTextNode('Excluir'));
            var pos = this.repositories.indexOf(repo);
            removeEl.setAttribute('id', `a${pos}`);
            removeEl.setAttribute('onclick', `removeRepository(${pos})`);
            removeEl.setAttribute('href', '#');

            let listItemEl = document.createElement('li');
            listItemEl.setAttribute('id', 'remove');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);
            listItemEl.appendChild(removeEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}
new App();