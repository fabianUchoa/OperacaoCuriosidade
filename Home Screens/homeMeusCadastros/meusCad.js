const overlay = document.querySelector('.overlay')

axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        showUsers(response.data);
        sessionStorage.setItem('users', `${response.data}`)
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });


function openModalDetails(bttAtivador, status){
    let iframe = document.getElementById('iframeDetails');
    document.querySelector('.overlay').style.display = 'block';
    iframe.style.display='block'

    if(bttAtivador==1){
        iframe.style.top = '30%'
        
    }else{
        iframe.style.top = `${30-7+(bttAtivador*7)}%`
    }
    console.log(30-7+(bttAtivador*7))
}

function closeModal(iframeIdName){
    document.getElementById(iframeIdName).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}


function showUsers(users){
    const listDiv = document.getElementById('listagem');
    listDiv.innerHTML = '';
    let status;
    let cont=1;
    if(Array.isArray(users)){
        users.forEach(user=>{
            
            const userElement = document.createElement('div');
            status = verifyStatus(user.status)
            listDiv.appendChild(userElement);
            userElement.innerHTML = `<div class="cadastro" id="cad1">
                    <div class="codColumn">
                        ${user.userCode}
                    </div>
                    <div class="nomeColumn">
                        ${user.fatos.nome}
                        
                    </div>
                    <div class="mailColumn">
                        ${user.fatos.email}
                        
                    </div>
                    <div class="createDateColumn">
                        ${(user.createTime).replace('-','/').replace('-','/')}
                        
                    </div>
                    <div class="statusColumn" onclick="alteraStatus(${user.status},${user.userId})">
                        <p class="${status}">${status}</p>
                    </div>
                    <div class="detailBtt" id="detailBtt1" onclick="openModalDetails(${cont}, ${user.status})">
                        <img src="/Imgs/MeusCadIcons/moreVerticalIcon.svg" alt="" class="moreVertical">
                            Detalhes
                    </div>
                </div>`
                cont++;
    });
    
    console.log(cont)
    }else{
        console.error("A resposta não é uma array de objetos.")
    }
}

function verifyStatus(status){
    if(status == true)
        return 'Ativo';
    else
        return 'Inativo';
}   

function alteraStatus(status,userId){
    let iframe = document.getElementById('iframeConfirmModais')
    document.querySelector('.overlay').style.display ='block'
    console.log(userId)
    sessionStorage.setItem('userId', `${userId}`)
    if(status == false){
        iframe.src = '/Home Screens/modalsTelas/Status Change/Activation Modal/activationModal.html'
        iframe.style.display ='block'
    }else{
        iframe.src = '/Home Screens/modalsTelas/Status Change/Desactivation Modal/desactivationModal.html'
        iframe.style.display ='block'
    }
}


function expandeNotificacao(){
    let iframe = document.getElementById('iframeModais');
    if(iframe.style.display != 'block'){
        iframe.style.display = 'block'
        iframe.src = '/Home Screens/modalsTelas/Notification Aba/notificationAba.html'
        document.getElementById('notBox').style.zIndex = '100'
        document.querySelector('.overlay').style.display = 'block'
    }else{
        fechaIframe('iframeModais')
        document.getElementById('notBox').style.zIndex = '0'
        document.querySelector('.overlay').style.display = 'none'
    }
}

function fechaIframe(iframeNome){
    document.getElementById(iframeNome).style.display = 'none'
}


//Filtros Meus Cadastros

function getFilter(){
    let inputCod = document.getElementById('id').value;
    let inputStatus = document.getElementById('status').value;
    let inputDateIn = document.getElementById('dataIn').value;
    let inputDateOut = document.getElementById('dataOut').value;

    applyFilter(inputCod,inputStatus,inputDateIn,inputDateOut)

}

function applyFilter(inputCod,inputStatus,inputDateIn,inputDateOut){
    axios.get('https://localhost:7064/api/user', inputCod, inputStatus, inputDateIn, inputDateOut)
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            showUsers(response.data)
            location.reload()
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });
}