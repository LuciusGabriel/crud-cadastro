'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "Lucius",
    email: "lucius_gabriel@hotmail.com",
    celular: "62991852208",
    cidade: "Anápolis"

}

const getLocalStorage = ()=> JSON.parse(localStorage.getItem('db_client')) ?? [] //JSON.parse -> Transforma o string de volta em um Objeto JSON 
//localStorage.getItem Irá ler o que está dentro de db_client e depois adicionar um novo.
// ?? compara como um IF se não for válido cria um array vazio
const setLocalStorage = (dbClient)=> localStorage.setItem("db_client", //O metodo .setItem envia o dado para o LocalStorage, recebe dois parametros (chave/Key, valor/Value)
JSON.stringify(dbClient)) //O método JSON.stringify transforma um Objeto em String



//CREATE - CRIAR O LOCALSTORAGE PARA ARMAZENAR OS DADOS
const createClient = (client)=>{
    const dbClient = getLocalStorage()
    dbClient.push(client) //Método .push empurra os dados para dentro
    setLocalStorage(dbClient)
}



document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)