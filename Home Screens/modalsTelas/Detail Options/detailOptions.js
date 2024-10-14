var operationCard

function openModalDetailsOptions(optionSelect){
    let iframe = window.parent.document.getElementById('iframeModais');
    window.parent.document.getElementById('iframeDetails').style.display = 'none'
    

    operationCard = sessionStorage.getItem('cardNumber');

    iframe.style.display = 'block';
    iframe.style.zIndex = 10
    if(optionSelect == 'share'){
        iframe.style.width = '37vw';
        iframe.style.height = '68vh';
        iframe.src = '/Home Screens/modalsTelas/Sharing Options/sharingModal.html'
        
    }else if(optionSelect == 'delete'){
        iframe.src = '/Home Screens/modalsTelas/Operation Delete/operationDelete.html'
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
    }else if(optionSelect=='edit'){
        
        iframe.src = '/Home Screens/modalsTelas/Edit Registration/editRegistration.html'
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
    }
    
}