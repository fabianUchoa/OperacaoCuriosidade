let modalAtivador
let modalOG

/* Abertura e fechamento de modais*/

function abreModal(modal, modalOrigem){
    window.parent.document.querySelector(modal).style.display = 'flex'
    window.parent.document.querySelector(modal).style.zIndex = '1000'
    window.parent.document.querySelector('.overlay').style.display = 'block'
    window.parent.document.querySelector('.overlay').style.zIndex = '1'
    window.parent.modalAtivador = modal
    window.parent.modalOG = modalOrigem
}

function fechaModal(modal){
    
    if(modalAtivador == '.modal' && modal != '.modalDetalhes' && modal != 1){
        document.querySelector(modalAtivador).style.display ='none'
       
    }else if(modal=='.modalDetalhes'){
        document.querySelector(modal).style.display ='none'
        document.querySelector('.overlay').style.display = 'none'

    }else if(modal == '.userEdit'){
            document.querySelector(modal).style.display ='none'

        }else{   
            document.querySelector(modalAtivador).style.display ='none'
            document.querySelector('.overlay').style.display = 'none'
            window.parent.querySelector('.overlay').style.display = 'none'
    }
}

/*Abertura e fechamento de modais*/

/*Destaque de títulos Iframe*/

function destacaTitle(numeroTitulo){
    
    for(i=1;i<4;i++){
        if(i!=numeroTitulo){
            document.getElementById(`op${i}`).style.background = 'none'
            document.getElementById(`op${i}`).style.transform = 'scale(1)'
        }
    }

    document.getElementById(`op${numeroTitulo}`).style.backgroundColor = 'rgba(107, 27, 198, 0.216)'
    document.getElementById(`op${numeroTitulo}`).style.transform = 'scale(1.1)'
    
}

/*Destaque de títulos Iframe*/

/*Abertura e fechamento Dinâmico*/

function verificaAberturaFechamento(modal, modalOrigem){
    

    let notification = window.parent.document.querySelector(modal)
    if(notification.style.display != 'flex'){
        
        abreModal(modal)
        document.querySelector(modal).style.zIndex = '2000'
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