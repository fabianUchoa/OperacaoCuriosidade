let btt
let bttNone
let op
let overlay

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