let amigos = [];

function adicionarAmigo() {
    let newFriend = document.querySelector('#amigo').value; 
    const noNumbersAndSymbols = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/; 
    if (newFriend == '' || !noNumbersAndSymbols.test(newFriend)) { 
        alert ('Por favor, insira um nome válido!');
        cleanFriend();
    } else if (amigos.includes(newFriend)) {
        alert ('Nome já consta na lista! Por favor, insira um novo nome.');
        cleanFriend();  
    } else {
        amigos.push(newFriend);
        console.log(amigos.length);
        updateFriendList();
        cleanFriend();
    } 
}

function sortearAmigo(){
    if (amigos == ''){
        alert('Todos os nomes foram sorteados! Por favor, inicie um novo sorteio.');
        newSort();
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let friendSort = amigos[indice];
        checkNameSort(friendSort);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<p>O(A) amigo(a) sortudo(a) que você tirou é: <strong>${friendSort}!</strong></p>`; 
    }
}

function updateFriendList() {
    let friendList = document.getElementById('listaAmigos');
    friendList.innerHTML = '';
    for(var i=0; i < amigos.length; i++) {
            friendList.innerHTML += `Seus amigos(a)(s) listado(a)(s) são: <strong>${amigos[i]}.</strong></p>`; 
    }
}

function checkNameSort(friendSort){
    let index = amigos.indexOf(friendSort);
    if (index >-1){
        amigos.splice(index,1);
    } else {
        return friendSort;
    }
}

function cleanFriend() {
    newFriend = document.querySelector("amigo").value;
    newFriend.value = '';
    document.getElementById('amigo').setAttribute('placeholder', 'Digite um nome');  
}

function newSort() {
    limparCampo();
    let listHTML = document.getElementById('listas');
    listHTML.innerHTML = 
    `
    <div id="listas">
                <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
                <ul id="resultado" class="result-list" aria-live="polite"></ul>
            </div>
    `;
}