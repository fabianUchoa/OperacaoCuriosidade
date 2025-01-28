let userLogin = sessionStorage.getItem('userLoginId')
let overlay = document.querySelector('.overlay')
axios.get(`https://localhost:7064/api/user/${userLogin}`)
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        loadUserProfile(response.data)
        
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


var conteudo = document.querySelector('.conteudo')
var iframe = document.getElementById('iframeRelatorio')

function openReport(){
    conteudo.style.display = 'none'
    iframe.style.display = 'block'
}

function closeReport(){
    conteudo.style.display = 'flex'
    iframe.style.display = 'none'
}

//funcoes de controle abertura e fechamento de modais

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

function fechaIframe(iframeNome){
    document.getElementById(iframeNome).style.display ='none'
}