function minimizeIframe(){
    document.querySelector('.conteudo').style.width = '50vw'
    document.querySelector('.dadosLateral').style.display = 'flex'
}

function expandeIframe(){
    document.querySelector('.conteudo').style.width = '75vw'
    document.querySelector('.dadosLateral').style.display = 'none'
}

function optionHighlight(num){
    
    for(i=1;i<4;i++){
        if(i!=num){
            document.getElementById(`op${i}`).style.background = 'none'
            document.getElementById(`op${i}`).style.transform = 'scale(1)'
        }
    }

    document.getElementById(`op${num}`).style.backgroundColor = 'rgba(107, 27, 198, 0.216)'
    document.getElementById(`op${num}`).style.transform = 'scale(1.1)'
    
}