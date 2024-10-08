axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        pullInformations(response.data);
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });

function pullInformations(users){
    let iframe = window.parent.document.getElementById('iframe');
    let id = window.parent.user;
    console.log(id);

}







function trocaStatus(backgroundStatusColor, statusSituation){
    
    let status = document.querySelector(backgroundStatusColor)
    let labelStatus = document.querySelector(statusSituation)

    
    
    if(window.getComputedStyle(status).backgroundColor !='rgb(38, 198, 35)'){
        
        status.style.backgroundColor = 'rgb(38, 198, 35)'
        labelStatus.innerHTML = 'Ativo'
        document.querySelector('#toggleBtSit').style.justifyContent ='flex-end'
        document.querySelector('#toggleBtSit').style.backgroundColor = 'rgb(38, 198, 35)'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/checkIcon.svg'
    }else{
        
        status.style.backgroundColor = 'rgb(215, 35, 35)'
        labelStatus.innerHTML = 'Inativo'
        document.querySelector('#toggleBtSit').style.justifyContent ='flex-start'
        document.querySelector('#toggleBtSit').style.backgroundColor = 'rgb(215, 35, 35)'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/recuseIcon.svg'
    }
}

function closeModal(){
    window.parent.document.getElementById('iframeModais').style.display ='none';
    window.parent.document.querySelector('.overlay').style.display ='none';
}