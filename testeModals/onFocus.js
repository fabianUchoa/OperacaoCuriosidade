/*var idBtt;

function onFocus(elemento, id){
    let overlay = document.querySelector('.overlay')
    idBtt = id
    let ativador = elemento.className;
    

    if(ativador == 'bttEdit'){
        adicionarDivEdit(ativador)
        var focus = (elemento.parentElement).className
        
    }else{
        adicionarDivVisualizar(ativador,id)
        var focus = (elemento.parentElement).className
        document.querySelector(focus).style.overflow = 'visible'
    }

    overlay.style.display = 'block'
    
}

function outFocus(elemento){
    let overlay = document.querySelector('.overlay')
    let teste = elemento.className

    if(teste == 'bttEdit'){
        document.getElementById(idBtt).style.display = 'block'
    }else{
        document.getElementById(idBtt).style.display = 'none'
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

    */ /*
let int = 0
let pai
let overlay

    function onFocus(){
        overlay = document.querySelector('.overlay') */
        
/*    
    let teste = document.getElementById(pai);
    console.log(teste)
    let filhas = teste.children; // Acessa todas as classes filhas diretamente

    for (let filha of filhas) {
        console.log(filha.id); // Exibe o nome da classe da filha
    }
*/ /*
        console.log(int)
        if(int == 0){
            console.log(overlay)
            document.getElementById(id).style.height = '9vh'
             overlay.style.display = 'block'
             document.getElementById(id).onclick = null
             document.getElementById(pai).innerHTML = `<div class="bttEdit" id="bttEdit" onclick="outFocus(this.id)">
                            Editar
                            <img src="/Imgs/MeusCadIcons/arrowDown - White.svg" alt="">
                        </div>
                        <div class="bttVisualizar" id="bttVisualizar1" onclick="outFocus(this.id)">
                           Visualizar
                            <img src="/Imgs/MeusCadIcons/arrowDown Purple.svg" alt="">
                        </div>  `
        }
     }
     
    function outFocus(id){
        if(id != 'bttEdit'){
            document.getElementById('bttEdit').style.display = 'none'
        }
        console.log(overlay)
        document.getElementById(pai).style.height = '4vh'
        overlay.style.display = 'none'
        int = 1
        setTimeout(resetaInt(),3000)
}


function resetaInt(){
    int=0
} */
/*
    function outFocus(id){
        
        let elemento = document.getElementById(id);
        alert(elemento)
        if (elemento) {
        elemento.style.position = 'fixed';
        elemento.style.zIndex = '1000';
        }
/*
        document.querySelector('.bttVisualizar').style.display = 'none'
  *//*     
       document.querySelector('#escolheTipo').style.height = '4vh'
       overlay.style.display = 'none'
     }
     
  */   
     
     /*
     clica na opção, da display block em um e none no outro FAZ ISSO EM TODOS E PONTO*/

     let btt
    let op 
    let  overlay
function onFocus(id){
    
   overlay = document.querySelector('.overlay')
   overlay.style.display = 'block'
   console.log(overlay)
   if(id == 'bttEdit1' || id == 'bttVisualizar1'){
    let escolheTipo = document.getElementById('escolheTipo1').style.display = 'block'
    escolheTipo.getElementsByClassName('bttEdit').style.display = 'block'
    escolheTipo.getElementsByClassName('bttVisualizar').style.display = 'block'
    op = 'escolheTipo1'
    if(id !='bttEdit1'){
        bttNone = 'bttEdit1'
    }else{
        bttNone = 'bttVisualizar1'
    }
    }
    else if(id == 'bttEdit2' || 'bttVisualizar2'){
        document.getElementById('escolheTipo2').style.display = 'block'
        let escolheTipo = document.getElementById('escolheTipo2').style.display = 'block'
    escolheTipo.getElementsByClassName('bttEdit').style.display = 'block'
    escolheTipo.getElementsByClassName('bttVisualizar').style.display = 'block'
        op = 'escolheTipo2'
        if(id !='bttEdit2'){
            bttNone = 'bttEdit2'
        }else{
            bttNone = 'bttVisualizar2'
        }
    }
    else{
        document.getElementById('escolheTipo3').style.display = 'block'
        let escolheTipo = document.getElementById('escolheTipo3').style.display = 'block'
        escolheTipo.getElementsByClassName('bttEdit').style.display = 'block'
        escolheTipo.getElementsByClassName('bttVisualizar').style.display = 'block'
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

    if(id.className == 'bttEdit'){
        document.getElementById(btt).style.display = 'block'
        document.getElementById(bttNone).style.display = 'none'
    }
    else{
        document.getElementById(btt).style.display = 'block'
        document.getElementById(bttNone).style.display = 'none'
    }
    console.log(overlay)
    overlay.style.display = 'none'
    document.getElementById(op).style.display = 'none'
}