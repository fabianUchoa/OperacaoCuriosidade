let bttNone
let btt
let op 
let  overlay


function onFocus(modalEscolhaComp){
   
   overlay = document.querySelector('.overlayModal')
   overlay.style.display = 'block'

   if(modalEscolhaComp == 'bttEdit1' || modalEscolhaComp == 'bttVisualizar1'){
    let escolheTipo = document.getElementById('escolheTipo1')
    escolheTipo.style.display = 'block'
    escolheTipo.querySelector('.bttEdit').style.display = 'flex'
    escolheTipo.querySelector('.bttVisualizar').style.display = 'flex'

    Modal = 'escolheTipo1'

    document.getElementById('bttEdit1').style.display = 'flex'
    document.getElementById('bttVisualizar1').style.display = 'flex'
    if(modalEscolhaComp !='bttEdit1'){
        bttNone = 'bttEdit1'
    }else{
        bttNone = 'bttVisualizar1'
    }
    }
    else if(id == 'bttEdit2' || id == 'bttVisualizar2'){
        let escolheTipo = document.getElementById('escolheTipo2')
        escolheTipo.style.display = 'block'
        escolheTipo.querySelector('.bttEdit').style.display = 'flex'
        escolheTipo.querySelector('.bttVisualizar').style.display = 'flex'
        op = 'escolheTipo2'
        if(id !='bttEdit2'){
            bttNone = 'bttEdit2'
        }else{
            bttNone = 'bttVisualizar2'
        }
    }
    else{
        let escolheTipo = document.getElementById('escolheTipo3')
        escolheTipo.style.display = 'block'
        escolheTipo.querySelector('.bttEdit').style.display = 'flex'
        escolheTipo.querySelector('.bttVisualizar').style.display = 'flex'
        op = 'escolheTipo3'
        if(id !='bttEdit3'){
            bttNone = 'bttEdit3'
        }else{
            bttNone = 'bttVisualizar3'
        }
    }
    btt = id
   
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

function fechaIframe(){
    conteudo.style.display = 'flex'
    iframe.style.display = 'none'
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