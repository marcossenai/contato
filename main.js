class Contatos {
    constructor(nome, email, telefone, comentario){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
}

//Definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor(){
        //Inicializa a lista de contatos vazia
    this.contatos = []

    }

    adicionarContato(contato) {
         //Adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }
    exibirContatos() {
         //Obtem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

          //Limpa a lista de contatos
        listaContatos.innerHTML='';

          //Para cada contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.comentario}`;
            listaContatos.appendChild(li)
        }
    }
}

//Cria um objeto da classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

//Cria os elementos necessarios
const contatoForm = document.getElementById('contato-form');
const comentarioF = document.getElementById('comentario');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const nome = nomeF.value
    const email = emailF.value
    const telefone  = telefoneF.value
    const comentario = comentarioF.value

     //Criando objeto da classe Contato
    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = ''
    emailF.value = ''
    telefoneF.value = ''
    comentarioF.value = ''

});

//Estamos adicionando um manipulador de eventos para o botão mostrar contatos, que exibe a lista de contatos
mostrarContatos.addEventListener('click', () =>{
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', ()=>{
    listaContatos.style.display = 'none'
})