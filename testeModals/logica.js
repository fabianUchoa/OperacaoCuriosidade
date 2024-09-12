let btt
let op 
function onFocus(id){
   let  overlay = document.querySelector('.overlay')
   overlay.style.display = 'block'
   if(id == 'bttEdit1' || id == 'bttVisualizar1'){
    document.getElementById('escolheTipo1').style.display = 'block'
    op = 'escolheTipo1'
    }
    else if(id == 'bttEdit2' || 'bttVisualizar2'){
        document.getElementById('escolheTipo2').style.display = 'block'
        op = 'escolheTipo2'
    }
    else{
        document.getElementById('escolheTipo3').style.display = 'block'
        op = 'escolheTipo3'
    }
    btt = id
}


function outFocus(id){


    if(id.className == 'bttEdit'){
        document.getElementById(btt).style.display = 'block'
    }
    else{
        document.getElementById(btt).style.display = 'none'
    }

    overlay.style.display = 'none'
    document.getElementById(op).style.display = 'none'
}



/*
clica na opção, da display block em um e none no outro FAZ ISSO EM TODOS E PONTO*/