const overlay = document.querySelector('.overlay')

axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        showUsers(response.data);
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });


function openModalDetails(bttAtivador){
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
                    <div class="detailBtt" id="detailBtt1" onclick="openModalDetails(${cont})">
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


function openNotification(){
    let iframe = document.getElementById('iframeModais');
    if(iframe.style.display != 'block'){
        iframe.style.display = 'block'
        iframe.style.zIndex ='2'
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

function openPerfilBar(){
    let iframe = document.getElementById('iframeModais');
    if(iframe.style.display != 'block'){
        iframe.style.display = 'block'
        iframe.style.zIndex = '2'
        iframe.src = '/Home Screens/modalsTelas/Perfil Bar/perfilBar.html'
        document.querySelector('.overlay').style.display = 'block'
        document.getElementById('topPerfil').style.zIndex = '3'
    }else{
        fechaIframe('iframeModais')
        document.querySelector('.overlay').style.display = 'none'
        document.getElementById('topPerfil').style.zIndex = '0'
    }
}


//Filtros Meus Cadastros

function clearFilter(){
   document.getElementById('id').value = ''
    document.getElementById('status').value= null

    document.getElementById('dataIn').value = null
    document.getElementById('dataOut').valu = null
}

function getFilter(){
    let inputStatus
    let inputType;
    let inputCod = document.getElementById('id').value;
    const regex = /^\d{2}-\d{5}$/
    if(!regex.test(inputCod))
        inputCod = null

    if(document.getElementById('status').value=='ativo'){
        inputStatus = true;
    }else if(document.getElementById('status').value=='inativo'){
        inputStatus = false
    }else inputStatus = null

    if(document.getElementById('tipo')){
        if(document.getElementById('tipo').value == 'admin'){
            inputType = true;
        }else if(document.getElementById('tipo').value == 'operador'){
            inputType = false
        }else{
            inputType = null
        }
    }

    let inputDateIn = document.getElementById('dataIn').value;
    let inputDateOut = document.getElementById('dataOut').value;
    console.log(inputStatus)
    applyFilter(inputCod,inputStatus,inputType,inputDateIn,inputDateOut)

}

function applyFilter(inputCod,inputStatus,inputType,inputDateIn,inputDateOut){
    axios.get('https://localhost:7064/api/user/filtros',{
        params: {
            userCode : inputCod,
            status : inputStatus,
            tipo: inputType,
            dataIn: inputDateIn,
            dataOut: inputDateOut
        }})
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            showUsers(response.data)
            console.log(response.data)
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });
}