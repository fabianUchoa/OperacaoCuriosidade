function fechaModal(){
    window.parent.document.getElementById('iframeModais').style.display= 'none'
    window.parent.document.querySelector('.overlay').style.display = 'none'
}

const uploadButton = document.getElementById('updateImg');
const fileInput = document.getElementById('inputImg');

// Adiciona um evento de clique ao botão
uploadButton.addEventListener('click', () => {
    // Simula o clique no input de arquivo
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        
    }
});