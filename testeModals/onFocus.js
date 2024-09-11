var idBtt;

function onFocus(elemento, id){
    let overlay = document.querySelector('.overlay')
    idBtt = id
    let ativador = elemento.className;
    
    

    if(ativador == 'bttEdit'){
        adicionarDivEdit(ativador)
        var focus = document.getElementById('escolheTipo');
    }else{
        adicionarDivVisualizar(ativador,id)
        var focus = document.getElementById('visualizarTeste')
    }

    overlay.style.display = 'block'
    focus.style.display = 'block'
}

function outFocus(elemento){
    let overlay = document.querySelector('.overlay')
    idBtt
    if(elemento.className == 'bttEdit'){
        idBtt.innerHTML = `Visualizar
                        <img src="/Imgs/MeusCadIcons/arrowDown Purple.svg" alt="">`
    }

    document.getElementById('escolheTipo').style.display = 'none'
    document.getElementById('visualizarTeste').style.display ='none'

    overlay.style.display = 'none'
    
}

function adicionarDivEdit(ativador){
    let novaDiv = document.getElementById('escolheTipo')
    
    novaDiv.innerHTML = `<div class="bttEdit"       onclick="outFocus(this)">
        Editar
        <img src="/Imgs/MeusCadIcons/arrowDown - White.svg" alt="">
    </div>
    <div class="bttVisualizar" onclick="outFocus(this)">
        Visualizar
        <img src="/Imgs/MeusCadIcons/arrowDown Purple.svg" alt="">
    </div>`
    }

function adicionarDivVisualizar(ativador){
    let novaDiv = document.getElementById('visualizarTeste')

    novaDiv.innerHTML = `
    <div class="bttVisualizar" onclick="outFocus(this)">
        Visualizar
        <img src="/Imgs/MeusCadIcons/arrowDown Purple.svg" alt="">
    </div>
    <div class="bttEdit" onclick="outFocus(this)">
        Editar
        <img src="/Imgs/MeusCadIcons/arrowDown - White.svg" alt="">
    </div>`
    }