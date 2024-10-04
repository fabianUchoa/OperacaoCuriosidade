function abreModal(optionSelect){
    let iframe = window.parent.document.getElementById('iframeTeste');
    iframe.style.display = 'flex';
    window.parent.document.querySelector('.overlay').style.display = 'flex'
    if(optionSelect == 'share'){
        iframe.style.width = '37vw';
        iframe.style.height = '68vh';
    }
}