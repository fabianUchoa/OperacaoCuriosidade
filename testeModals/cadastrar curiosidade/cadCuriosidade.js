function trocaStatus(op, opname){
    console.log(op)
    let status = document.querySelector(op)
    let labelStatus = document.querySelector(opname)

    console.log(window.getComputedStyle(status).backgroundColor)
    
    if(window.getComputedStyle(status).backgroundColor !='rgb(27, 150, 23)'){
        console.log('entrou op1')
        status.style.backgroundColor = '#1b9617'
        labelStatus.innerHTML = 'Ativo'
        document.querySelector('#toggleBt').style.justifyContent ='flex-end'
        document.querySelector('#toggleBt').style.backgroundColor = '#1b9617'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/checkIcon.svg'
    }else{
        console.log('entrou op2')
        status.style.backgroundColor = '#961717'
        labelStatus.innerHTML = 'Inativo'
        document.querySelector('#toggleBt').style.justifyContent ='flex-start'
        document.querySelector('#toggleBt').style.backgroundColor = '#961717'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/recuseIcon.svg'
    }
}