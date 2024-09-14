let bttNone
let btt
let op 
let  overlay


function onFocus(id){
   
   overlay = document.querySelector('.overlayModal')
   overlay.style.display = 'block'

   if(id == 'bttEdit1' || id == 'bttVisualizar1'){
    let escolheTipo = document.getElementById('escolheTipo1')
    escolheTipo.style.display = 'block'
    escolheTipo.querySelector('.bttEdit').style.display = 'flex'
    escolheTipo.querySelector('.bttVisualizar').style.display = 'flex'

    op = 'escolheTipo1'

    document.getElementById('bttEdit1').style.display = 'flex'
    document.getElementById('bttVisualizar1').style.display = 'flex'
    if(id !='bttEdit1'){
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
    window.parent.document.querySelector('.overlay').style.display = 'block'
    window.parent.modalOp = modal
    window.parent.cardOp = card
 
}

function fechaModal(){

    document.querySelector(modalOp).style.display ='none'
    document.querySelector('.overlay').style.display = 'none'
}

function deletaOperacao(){

    let iframe = document.getElementById('iframe')
    iframe.contentWindow.document.querySelector(cardOp).style.display ='none'
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
    
    let notification = document.querySelector(op)
    if(notification.style.display !== 'flex'){
        abreModal(op)
        document.querySelector(opPai).style.zIndex = '2000'}
    else{
        document.querySelector(opPai).style.zIndex = '0'
        fechaModal()}
}


