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

var modalOp
var cardOp

function abreModal(modal, card){
    
    window.parent.document.querySelector(modal).style.display = 'flex'
    window.parent.document.querySelector(modal).style.zIndex = '1000'
    window.parent.document.querySelector('.overlay').style.display = 'block'
    window.parent.document.querySelector('.overlay').style.zIndex = '1'
    window.parent.modalOp = modal
    window.parent.cardOp = card

}

function fechaModal(op){
    
    if(modalOp == '.modal' && op != '.modalDetalhes' && op != 1){
        document.querySelector(modalOp).style.display ='none'
       
    }else if(op=='.modalDetalhes'){
        
        document.querySelector(op).style.display ='none'
        document.querySelector('.overlay').style.display = 'none'}
        else if(op == '.userEdit'){
            document.querySelector(op).style.display ='none'
        }
        else{
            
            document.querySelector(modalOp).style.display ='none'
            document.querySelector('.overlay').style.display = 'none'
            window.parent.querySelector('.overlay').style.display = 'none'
    }
}


function deletaOperacao(cad){
    
    let iframe = document.getElementById('iframe')
    if(iframe != null)
        iframe.contentWindow.document.querySelector(cardOp).style.display ='none'
    else{

        document.querySelector(cad).style.display = 'none'
        fechaModal('.modalDetalhes')
    }
    fechaModal()
    alert('Excluído com sucesso!')
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

function expandeNotificacao(){
    let iframe = document.getElementById('iframeModais');
    if(iframe.style.display != 'block'){
        iframe.style.display = 'block'
        iframe.src = '/Home Screens/modalsTelas/Notification Aba/notificationAba.html'
        document.getElementById('notBox').style.zIndex = '100'
        overlay.style.display = 'block'
    }else{
        fechaIframe('iframeModais')
        document.getElementById('notBox').style.zIndex = '0'
        overlay.style.display = 'none'
    }
}

function verificaAbaNot(op, opPai){
    

    let notification = window.parent.document.querySelector(op)
    if(notification.style.display != 'flex'){
        
        abreModal(op)
        document.querySelector(op).style.zIndex = '2000'
        document.querySelector(opPai).style.zIndex = '100'}
    else if(op=='.modal'){
        fechaModal()
        
    }else if(modalOp=='.modal'){
        
        fechaModal(op)
        document.querySelector(opPai).style.zIndex = '0'}
        else{
            document.querySelector(opPai).style.zIndex = '0'
            fechaModal(op)
        }
}

/*Script tela de relatórios*/

var conteudo = document.querySelector('.conteudo')
var iframe = document.querySelector('iframe')

function abreIframe(){
    conteudo.style.display = 'none'
    iframe.style.display = 'block'

}

function fechaIframe(iframeNome){
    document.getElementById(iframeNome).style.display = 'none'
}

/*Script tela de configurações*/

function expandeIframe(){
    let dadosLateral = document.querySelector('.dadosLateral')
    let conteudoConfig = document.querySelector('.conteudo')

    dadosLateral.style.display = 'none'
    conteudoConfig.style.width = '70vw'
    document.querySelector('.logoFotter').style.margin = '0'
}

function minimizaIframe(){
    let dadosLateral = document.querySelector('.dadosLateral')
    let conteudoConfig = document.querySelector('.conteudo')

    dadosLateral.style.display = 'flex'
    conteudoConfig.style.width = '52vw'
    document.querySelector('.logoFotter').style.margin = ' 0 5vw 0 0'
}


/* script modal cadastrar curiosidade*/

function trocaStatus(op, opname){
    
    let status = document.querySelector(op)
    let labelStatus = document.querySelector(opname)

    
    
    if(window.getComputedStyle(status).backgroundColor !='rgb(27, 150, 23)'){
        
        status.style.backgroundColor = '#1b9617'
        labelStatus.innerHTML = 'Ativo'
        document.querySelector('#toggleBtSit').style.justifyContent ='flex-end'
        document.querySelector('#toggleBtSit').style.backgroundColor = '#1b9617'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/checkIcon.svg'
    }else{
        
        status.style.backgroundColor = '#961717'
        labelStatus.innerHTML = 'Inativo'
        document.querySelector('#toggleBtSit').style.justifyContent ='flex-start'
        document.querySelector('#toggleBtSit').style.backgroundColor = '#961717'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/recuseIcon.svg'
    }
}

let contCard1 = 1
let contCard2 = 1
let contCard3 = 1
function adicionaCadastro(id, contValor){
    let cont
    let novaDiv = document.createElement('div')
    novaDiv.className = 'conteudoCuriosidades'
    let divPai = document.querySelector(id)
    
    if(id == '#cardsCuriosidades1'){
        contCard1++
        cont = contCard1
    
    }else if(id == '#cardsCuriosidades2'){
        contCard2++
        cont = contCard2
    }else{
        contCard3++
        cont = contCard3
    }
    novaDiv.innerHTML = `<div class="idCuriosidade">
                            <span class="idCuriosidadeStyle">${cont}</span>
                        </div>
                        <div class="tipoCuriosidade">
                            <span class="idCuriosidadeStyle">Curiosidade</span>
                        </div>`
    divPai.appendChild(novaDiv)
    
    document.querySelector(contValor).innerHTML = `${cont}`

}

function apagaCuriosidade(id){
    document.querySelector(id).style.display = 'none'
}

/*Funcao para alterar status*/



function alteraStatus(st, opc){
    
    let iframe = document.getElementById('iframe')
    let doc = iframe.contentWindow.document
    let status = doc.querySelector(st)
    

    if(opc == 1){

        status.className = 'inativo'
        status.innerHTML ='Inativo'
        
        
    }else{
        
        status.className = 'ativo'
        status.innerHTML ='Ativo'
        
    }

}

function controlaDisplayStatus(){
    

    let status = document.querySelector('#st1')

    if(status.className == 'inativo'){
        window.parent.document.querySelector('.opcAltStatusAtivar').style.display = 'flex'
    }else{
        window.parent.document.querySelector('.opcAltStatusInativar').style.display = 'flex'
    }

}

function fechaModalConfirm(num, cl){

    let modal = document.querySelector(cl)

    if(num == 'cancel'){
        modal.style.display = 'none'
        return
    }

    if(num==1){
        modal.style.display = 'none'
        window.parent.document.querySelector('.opcAltStatusAtivar').style.display = 'none'
        window.parent.document.querySelector('.opcAltStatusInativar').style.display = 'flex'
    }else{
        modal.style.display = 'none'
        window.parent.document.querySelector('.opcAltStatusAtivar').style.display = 'flex'
        window.parent.document.querySelector('.opcAltStatusInativar').style.display = 'none'
    }
}