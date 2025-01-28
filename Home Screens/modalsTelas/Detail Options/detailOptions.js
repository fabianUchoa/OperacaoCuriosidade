var operationCard

function openModalDetailsOptions(optionSelect){
    let iframe = window.parent.document.getElementById('iframeModais');
    window.parent.document.getElementById('iframeDetails').style.display = 'none'
    let windowParent = sessionStorage.getItem('window')

    operationCard = sessionStorage.getItem('cardNumber');

    iframe.style.display = 'block';
    iframe.style.zIndex = 10
    if(optionSelect == 'share'){
        iframe.style.width = '37vw';
        iframe.style.height = '68vh';
        iframe.src = '/Home Screens/modalsTelas/Sharing Options/sharingModal.html'
        
    }else if(optionSelect == 'delete'){
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
        if(windowParent =='operation')
            iframe.src = '/Home Screens/modalsTelas/Operation Delete/operationDelete.html'
        else if(windowParent =='users')
            iframe.src = '/Home Screens/modalsTelas/User Delete/operationDelete.html'
            
    }else if(optionSelect=='edit'){
        
        iframe.src = '/Home Screens/modalsTelas/Edit Registration/editRegistration.html'
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
    }
    
}