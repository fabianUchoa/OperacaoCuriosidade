var operationCard;
let user = window.parent.document.createElement('div');
user.id = 'varId';


function abreModal(optionSelect, cardOperation, userSelect){
    let iframe = window.parent.document.getElementById('iframeModais');
    user.innerText = userSelect;
    window.parent.document.getElementById('headerBar').appendChild(user);
    console.log(user);

    operationCard = cardOperation;

    iframe.style.display = 'block';
    window.parent.document.querySelector('.overlay').style.display = 'flex';

    if(optionSelect == 'share'){
        iframe.style.width = '37vw';
        iframe.style.height = '68vh';
        iframe.src = '/Home Screens/modalsTelas/Sharing Options/sharingModal.html'
    }else if(optionSelect == 'delete'){
        iframe.src = '/Home Screens/modalsTelas/Operation Delete/operationDelete.html'
    }else if(optionSelect=='edit'){
        
        iframe.src = '/Home Screens/modalsTelas/Edit Registration/editRegistration.html'
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
    }
    
}


function closeModal(){

    window.parent.document.getElementById('iframeModais').style.display = 'none';
    window.parent.document.querySelector('.overlay').style.display = 'none';
    console.log(operationCard)
}


function deleteOperation(){
    let iframe = window.parent.document.getElementById('iframe');
    operationCard = iframe.contentWindow.operationCard;
    console.log(window.parent.document.getElementById('varId'))
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
    cardDiv.innerHTML = ''
    let status;
    let cont=0;
    if(Array.isArray(operation)){
        operation.forEach(user=>{
            let contInteresses = user.operacao.interesses.length;
            let contSentimentos = user.operacao.sentimentos.length;
            let contValores = user.operacao.valores.length
            cont++;
            const operationElement = document.createElement('div');
            
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
                                ${status=verifyStatus(user.status)}
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
                            Criado em: ${(user.createTime).replace('-','/').replace('-','/')}
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
                            <img src="/Imgs/shareIcons/reply.svg" alt="" onclick="abreModal('share', 'card${cont}', '${user.userId}')">
                    </a>
                        <img src="/Imgs/shareIcons/delete.svg" alt="" onclick="abreModal('delete','card${cont}','${user.userId}')">
                        <img src="/Imgs/shareIcons/edit.svg" alt="" onclick="abreModal('edit', 'card${cont}', '${user.userId}')">
                    </div>
                </div>
            </div>`;
            
    });

    console.log(cont)
    }else{
        console.error("A resposta não é uma array de objetos.")
    }
    
    
}

function userDelete() {
    let userId = window.parent.document.getElementById('varId').textContent
    console.log(userId)
    axios.delete(`https://localhost:7064/api/user/${userId}`)
        .then(response => {
            console.log('Usuário atualizado com sucesso:', response.data);
            console.log(userId)
            deleteOperation()
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error.response.data);
        });
}

function verifyStatus(status){
    if(status == true)
        return 'Ativo';
    else
        return 'Inativo';
}
