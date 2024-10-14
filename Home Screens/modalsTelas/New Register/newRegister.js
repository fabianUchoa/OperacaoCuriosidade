function closeModal(){
    window.parent.document.getElementById('iframeModais').style.display = 'none';
    window.parent.document.querySelector('.overlay').style.display = 'none'
}

function maskPhone(inputTel) {
    let value = inputTel.value.replace(/\D/g, ""); 
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); 
    
    inputTel.value = value;
}

function validatePassword(){
    if(document.getElementById('senhaNova').value != document.getElementById('senhaAtual').value){
        return 0;
    }else
        return 1
}

function registerNewUser(){
    let resultPassword = validatePassword()
    if(resultPassword == 0){
        alert('Senhas não coincidem!')
        return;}

    
    
    let UserData = {
    
    

    profileImgPath: imgPath,
    userId: 0,
    userCode: '',
    senha: `${document.getElementById('senhaNova').value}`,
    tipo: document.getElementById('checkboxAdmin').checked,
    status: true,
    fatos:{
        nome: `${document.getElementById('inputNome').value}`,
        idade: `${document.getElementById('inputIdade').value}`,
        username: `${document.getElementById('userName').value}`,
        email: `${document.getElementById('inputMail').value}`,
        nasc: document.getElementById('nasc').value,
        estadoCivil: `${document.getElementById('estadoCivil').value}`,
        endereco: `${document.getElementById('end').value}`,
        profissao: `${document.getElementById('cargo').value}`,
        tel: `${document.getElementById('tel').value}`,
        userId: 0
    },
    

    }
    postNewUser(UserData)
    closeModal()
}

function postNewUser(UserData){
    axios.post('https://localhost:7064/api/user',UserData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            showUsers(response.data)
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição POST: ', error.response ? error.response.data : error);

        });
}

//Input foto de perfil
let imgPath
let imgAlterada = 0;
const uploadButton = document.getElementById('updateImg');
const fileInput = document.getElementById('inputImg');

uploadButton.addEventListener('click', () => {

    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        imgAlterada = 1;
        converter64()
    }
});

function converter64(){
    const imageInput = document.getElementById('inputImg');
    console.log(imageInput);
    const image = imageInput.files[0];
    console.log(image);
    if(image){
        convertImageToBase64(image)
    }
}

function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
            base64ToImage(reader.result);
            imgPath = reader.result;
        };

        reader.onerror = (error) => {
            reject(error);
        };
        console.log(file);
    });
}


function base64ToImage(imgString){
    document.getElementById('altFoto').src =`${imgString}`

}

function removeImgProfile(){

    imgPath = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='

    
    document.getElementById('altFoto').src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='
}

