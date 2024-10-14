let bttNone
let btt
let op 
let  overlay = document.querySelector('.overlay');
let userLogin = sessionStorage.getItem('userLoginId')
//funcao para carregar perfil

axios.get(`https://localhost:7064/api/user/${userLogin}`)
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        loadUserProfile(response.data)
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });

axios.get(`https://localhost:7064/api/user/registrados`)
.then(response =>{
    console.log('Usuários Recebidos: ',response.data);
    loadSystemRegisters(response.data)
})
.catch(error =>{
    console.error('Erro ao fazer requisição GET: ',error);

});

function loadUserProfile(user){
    let tipoUser
    if(user.tipo == true){
        tipoUser = "Administrador"
    }else
        tipoUser = "Operador"

    document.getElementById('fotoPerfil').src = `${user.profileImgPath}`
    document.getElementById('infoPerfil').innerHTML = `${(user.fatos.nome).split(' ').slice(0,2).join(' ')}<br>[${tipoUser}]`
}

function loadSystemRegisters(registersNumber){
    document.getElementById('allRegisters').textContent = registersNumber[0]
    document.getElementById('incompleteRegisters').textContent = registersNumber[1]
    document.getElementById('completeRegisters').textContent = registersNumber[0] - registersNumber[1]
}


function openModal(chosenModal){
    let iframe = document.getElementById('iframeModais');
    overlay.style.display = 'block';
    
    console.log('entrou')
    switch(chosenModal){
        case 'Register':
            iframe.style.display ='block';
            iframe.src ='/Home Screens/modalsTelas/Operation Register/operationRegister.html'
            break;
        case 'Notification':
            console.log('not')
            openNotification()
            break;
        case 'Perfil':
            openPerfilBar()
            break;
    }
}

function openNotification(){
    let iframe = document.getElementById('iframeModais');
    console.log(iframe)
    if(iframe.style.display != 'block'){
        iframe.style.display = 'block'
        iframe.style.zIndex ='10'
        iframe.src = '/Home Screens/modalsTelas/Notification Aba/notificationAba.html'
        document.getElementById('notBox').style.zIndex = '100'
        document.querySelector('.overlay').style.display = 'block'
    }else{
        fechaIframe('iframeModais')
        document.getElementById('notBox').style.zIndex = '0'
        document.querySelector('.overlay').style.display = 'none'
    }
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


function outFocus(id){

    if(id == btt){
        document.getElementById(btt).style.display = 'flex'
        document.getElementById(bttNone).style.display = 'none'
    }
    else{
        document.getElementById(btt).style.display = 'none'
        document.getElementById(bttNone).style.display = 'flex'
    }
    
    overlay.style.display = 'none'
    document.getElementById(op).style.display = 'none'
}


function destacaOp(num){
    
    for(i=1;i<4;i++){
        if(i!=num){
            document.getElementById(`op${i}`).style.background = 'none'
            document.getElementById(`op${i}`).style.transform = 'scale(1)'
        }
    }

    document.getElementById(`op${num}`).style.backgroundColor = 'rgba(107, 27, 198, 0.216)'
    document.getElementById(`op${num}`).style.transform = 'scale(1.1)'
    
}

function reloadPag(){
    document.getElementById('iframe').contentWindow.getUsers()
}