let noSelectBtt
let selectBtt
let modalSelecionaOpcao
let overlay
function onFocus(optionChose){
    
    overlay = document.querySelector('.overlayModal');
    overlay.style.display = 'block';
    
    if (optionChose == 'bttEdit1' || optionChose == 'bttVisualizar1'){

        modalSelecionaOpcao = document.getElementById('escolheTipo1');

        modalSelecionaOpcao.style.display = 'block';

        modalSelecionaOpcao.querySelector('.bttEdit').style.display = 'flex';

        modalSelecionaOpcao.querySelector('.bttVisualizar').style.display = 'flex';

        if(optionChose != 'bttEdit1')
            noSelectBtt = 'bttEdit1'
        else
            noSelectBtt = 'bttVisualizar1'

    }else if( optionChose =='bttEdit2' || optionChose == 'bttVisualizar2'){

        modalSelecionaOpcao = document.getElementById('escolheTipo2');        
       
        modalSelecionaOpcao.style.display = 'block';

        modalSelecionaOpcao.querySelector('.bttEdit').style.display = 'flex';

        modalSelecionaOpcao.querySelector('.bttVisualizar').style.display = 'flex';

        if(optionChose != 'bttEdit2')
            noSelectBtt = 'bttEdit2'
        else
            noSelectBtt = 'bttVisualizar2'
        
    }else{

        modalSelecionaOpcao = document.getElementById('escolheTipo3');        
       
        modalSelecionaOpcao.style.display = 'block';

        modalSelecionaOpcao.querySelector('.bttEdit').style.display = 'flex';

        modalSelecionaOpcao.querySelector('.bttVisualizar').style.display = 'flex';

        if(optionChose != 'bttEdit3')
            noSelectBtt = 'bttEdit3';
        else
            noSelectBtt = 'bttVisualizar3';
    }

    selectBtt = optionChose;
}

function outFocus(buttonID){
   
    if(buttonID==noSelectBtt){
        document.getElementById(noSelectBtt).style.display = 'flex';
        document.getElementById(selectBtt).style.display = 'none';
    }else{
        document.getElementById(selectBtt).style.display = 'flex'
        document.getElementById(noSelectBtt).style.display = 'none'
    }
    modalSelecionaOpcao.style.display = 'none'
    overlay.style.display = 'none'
}

function fechaModal(){

    window.parent.document.getElementById('iframeModais').style.display= 'none'
    window.parent.document.querySelector('.overlay').style.display = 'none'
}
