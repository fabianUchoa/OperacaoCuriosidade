var operationCard;




function openCardOptionsModal(optionSelect, cardOperation, userSelect){
    let iframe = window.parent.document.getElementById('iframeModais');
    sessionStorage.setItem('user',`${userSelect}`);

    operationCard = cardOperation;
    iframe.style.width = '100vw'
    iframe.style.height = '100vh'
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
    }
    
}


function closeModal(){

    window.parent.document.getElementById('iframeModais').style.display = 'none';
    window.parent.document.querySelector('.overlay').style.display = 'none';
    
}

/*
//função somente para os dados mockados
function deleteOperation(){
    let iframe = window.parent.document.getElementById('iframe');
    operationCard = iframe.contentWindow.operationCard;
    
    iframe.contentWindow.document.getElementById(operationCard).style.display = 'none';
    closeModal();
}
*/

// GERACAO DE CARDS PELA API

window.onload = function(){
    getUsers()
}

function getUsers(){

    axios.get('https://localhost:7064/api/user/operacao-cadastrada')
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            showCards(response.data);
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });
    }


function showCards(operation){
    
    const cardDiv = document.getElementById('card');
    if(cardDiv == null)
        return;
    cardDiv.innerHTML = ' '
    let status;
    let cont=0;
    let contInteresses;
    let contSentimentos;
    let contValores;
    if(Array.isArray(operation)){
        operation.forEach(user=>{
            if(user.operacao != null){
                if(user.operacao.interesses != null)
                    contInteresses = user.operacao.interesses.length;
                else contInteresses = 0;

                if(user.operacao.sentimentos != null)
                    contSentimentos = user.operacao.sentimentos.length;
                else contSentimentos = 0;

                if(user.operacao.valores != null)
                    contValores = user.operacao.valores.length;
                else contValores = 0;
            }else{
                contInteresses = 0
                contValores = 0
                contSentimentos = 0
            }
            
            cont++;
            const operationElement = document.createElement('div');
            console.log(user)     
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
                            <p class="status${status=verifyStatus(user.status)}">
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
                            <img src="/Imgs/shareIcons/reply.svg" alt="" onclick="openCardOptionsModal('share', 'card${cont}', '${user.userId}')">
                    </a>
                        <img src="/Imgs/shareIcons/delete.svg" alt="" onclick="openCardOptionsModal('delete','card${cont}','${user.userId}')">
                        <img src="/Imgs/shareIcons/edit.svg" alt="" onclick="openCardOptionsModal('edit', 'card${cont}', '${user.userId}')">
                    </div>
                </div>
            </div>`;
            
    });

    console.log(cont)
    }else{
        console.error("A resposta não é uma array de objetos.")
    }
    
    
}

function operationDelete() {
    let userId = sessionStorage.getItem('user')
    console.log(userId)
    axios.delete(`https://localhost:7064/api/user/operacao/${userId}`)
        .then(response => {
            deleteOperation()
           
        })
        .catch(error => {
            console.error('Erro ao deletar o usuário:', error.response.data);
        });
}

function verifyStatus(status){
    if(status == true)
        return 'Ativo';
    else
        return 'Inativo';
}
