var operationCard;
let user;
function abreModal(optionSelect, cardOperation, userSelect){
    let iframe = window.parent.document.getElementById('iframeModais');
    user = userSelect;
    console.log(user);
    operationCard = cardOperation;
    iframe.style.display = 'block';
    window.parent.document.querySelector('.overlay').style.display = 'flex';

    iframe.style.width = '100vw'
    iframe.style.height = '100vh'

    if(optionSelect == 'share'){
        iframe.style.width = '37vw';
        iframe.style.height = '68vh';
        iframe.src = '/Home Screens/modalsTelas/Sharing Options/sharingModal.html'
    }else if(optionSelect == 'delete'){

        iframe.src = '/Home Screens/modalsTelas/Operation Delete/operationDelete.html'
    }else if(optionSelect=='edit'){
        
        iframe.src = '/Home Screens/modalsTelas/Edit Registration/editRegistration.html'
    }
    
}


function closeModal(){

    window.parent.document.getElementById('iframeModais').style.display = 'none';
    window.parent.document.querySelector('.overlay').style.display = 'none';

}


function deleteOperation(){
    let iframe = window.parent.document.getElementById('iframe');
    operationCard = iframe.contentWindow.operationCard;
    
    iframe.contentWindow.document.getElementById(operationCard).style.display = 'none';
    closeModal();
}


// GERACAO DE CARDS PELA API

axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        showCards(response.data);
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });

function showCards(operation){
    
    const cardDiv = document.getElementById('card');
    cardDiv.innerHTML = '';
    let status;
    let cont=1;
    if(Array.isArray(operation)){
        operation.forEach(user=>{
            let contInteresses = user.operacao.interesses.length;
            let contSentimentos = user.operacao.sentimentos.length;
            let contValores = user.operacao.valores.length
            
            const operationElement = document.createElement('div');
            status = verifyStatus(user.status);
            cardDiv.appendChild(operationElement);
            operationElement.innerHTML =`<div class="card" id="card${cont}">
                <div class="user">
                    <div class="header">
                        <img class="fotoPerfil" src="${user.profileImgPath}" alt="">
                        <div class="dados">
                            <p>
                                ${user.fatos.nome} |  <a href="#" class="userID">${user.fatos.userName}</a>
                                <p class="mail">
                                    ${user.fatos.email}
                                </p>
                            </p>
                            <p class="status">
                                ${status}
                            </p>
                        </div>
                    </div>
                    <div class="interesses">
                        <p class="opcInteresses">
                            <span class="valorInteresse">${contInteresses}</span>
                            Interesses
                            <img src="/Imgs/shareIcons/schoolIcon.svg" alt="" class="opcImg">
                        </p>
                        <p class="opcInteresses">
                            <span class="valorInteresse">${contSentimentos}</span>
                            Sentimentos
                            <img src="/Imgs/shareIcons/heartIcon.svg" alt="" class="opcImg">
                        </p>
                        <p class="opcInteresses">
                            <span class="valorInteresse">${contValores}</span>
                            Valores
                            <img src="/Imgs/shareIcons/plantIcon.svg" alt="" class="opcImg">
                        </p>
            
                    </div>
                    <div class="infos">
                        <p class="createDados">
                            <img src="/Imgs/shareIcons/calenderIcon.svg" class="opcImg" alt="">
                            Criado em: 04/09/2024
                        </p>
                        <p class="createDados">
                            <img src="/Imgs/shareIcons/editIcon.svg" class="opcImg" alt="">
                            Editado recentemente por: @salabi
                        </p>
                    </div>
                </div>
                <div class="sideOpcs">
                    <div class="numID" id="userCode${cont}">
                        ${user.userCode}
                    </div>
                    <div class="cardOpcs">
                            <img src="/Imgs/shareIcons/reply.svg" alt="" onclick="abreModal('share', 'card1', 'userCode${cont}')">
                    </a>
                        <img src="/Imgs/shareIcons/delete.svg" alt="" onclick="abreModal('delete','card1', 'userCode${cont}')">
                        <img src="/Imgs/shareIcons/edit.svg" alt="" onclick="abreModal('edit', 'card1', 'userCode${cont}')">
                    </div>
                </div>
            </div>`;
            
    });
    cont++;
    console.log(cont)
    }else{
        console.error("A resposta não é uma array de objetos.")
    }
    
    
}

    
/*
    function exibeUsers(usuarios) {
        const usuariosDiv = document.getElementById('usuarios');
        usuariosDiv.innerHTML = ''; // Limpa a div antes de inserir novos dados
   
        // Verifica se a lista de usuários é um array
        if (Array.isArray(usuarios)) {
            usuarios.forEach(user => {
                // Cria um novo parágrafo para cada usuário
                const userElement = document.createElement('p');
                userElement.textContent = `Nome: ${user.fatos.nome}, Email: ${user.fatos.email}, Idade: ${user.fatos.idade}`;
                usuariosDiv.appendChild(userElement);
            });
        } else {
            console.error("A resposta não é um array de usuários.");
        }
    }*/

function verifyStatus(status){
    if(status == true)
        return 'Ativo';
    else
        return 'Inativo';
}
