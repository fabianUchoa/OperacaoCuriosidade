let userLoginId = sessionStorage.getItem('userLoginId')

window.onload = function(){
    getUser()
}

function getUser(){
    userLoginId = sessionStorage.getItem('userLoginId')
    axios.get(`https://localhost:7064/api/user/${userLoginId}`)
        .then(response =>{
            loadUserProfile(response.data)
            userLoginId = response.data
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });
    }


function loadUserProfile(user){
    let tipoUser
    if(user.tipo == true){
        tipoUser = "Administrador"
    }else
        tipoUser = "Operador"

    document.getElementById('fotoPerfil').src = `${user.profileImgPath}`
    document.getElementById('infoPerfil').innerHTML = `${(user.fatos.nome).split(' ').slice(0,2).join(' ')}<br>[${tipoUser}]`
}


function minimizeIframe(){
    document.querySelector('.conteudo').style.width = '50vw'
    document.querySelector('.dadosLateral').style.display = 'flex'
}

function expandeIframe(){
    document.querySelector('.conteudo').style.width = '75vw'
    document.querySelector('.dadosLateral').style.display = 'none'
}

function optionHighlight(num){
    
    for(i=1;i<4;i++){
        if(i!=num){
            document.getElementById(`op${i}`).style.background = 'none'
            document.getElementById(`op${i}`).style.transform = 'scale(1)'
        }
    }

    document.getElementById(`op${num}`).style.backgroundColor = 'rgba(107, 27, 198, 0.216)'
    document.getElementById(`op${num}`).style.transform = 'scale(1.1)'
    
}


function closeModal(iframeIdName){
    document.getElementById(iframeIdName).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function reloadPag(){
    document.getElementById('iframe').contentWindow.getUsers()
}

//update de imagem

let imgAlterada = 0;
const uploadButton = document.getElementById('updateImg');
const fileInput = document.getElementById('inputImg');
let imgBase64 = 0;

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
            imgBase64 = reader.result;
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

//REMOVE IMG


function removeImgProfile(){

        imgBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='
          
        
        document.getElementById('altFoto').src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='
}





function saveUpdateData(){
    let senhaAtual = document.getElementById('senhaAtual').value
    let senhaNova = document.getElementById('senhaNova').value
    if(senhaAtual==null||senhaAtual!=userLoginId.senha){
        alert('Senha inválida!')
        return;
    }
    let iframe = document.getElementById('iframe')
    
    if(imgBase64 != 0)
        newImg(userLoginId.userId)
    let userData = {
        nome : `${iframe.contentWindow.document.getElementById('inputNome').value}`,
        idade: `${iframe.contentWindow.document.getElementById('inputIdade').value}`,
        userName: `${iframe.contentWindow.document.getElementById('userName').value}`,
        email: `${iframe.contentWindow.document.getElementById('inputMail').value}`,
        nasc: `${iframe.contentWindow.document.getElementById('nasc').value}`,
        estadoCivil: `${iframe.contentWindow.document.getElementById('estadoCivil').value}`,
        endereco: `${iframe.contentWindow.document.getElementById('end').value}`,
        profissao: `${iframe.contentWindow.document.getElementById('cargo').value}`,
        tel: `${iframe.contentWindow.document.getElementById('tel').value}`
    }
    updateData(userData)
    if(senhaNova != null)
        updateSenha(senhaNova)
    
    alert('Usuário Atualizado!')
    getUser()
}


function updateSenha(senhaNova){
    let id = userLoginId.userId
    axios.put(`https://localhost:7064/api/user/nova-senha/${id}`,`${senhaNova}`,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response =>{
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });
}

function newImg(id){
    axios.put(`https://localhost:7064/api/user/update-picture/${id}`, imgBase64,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log('Usuário atualizado com sucesso:', response.data);
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error.response.data);
        });
}

function updateData(updateData){
    let id = userLoginId.userId
    console.log(id)
    axios.put(`https://localhost:7064/api/user/${id}`, updateData)
        .then(response => {
            console.log('Usuário atualizado com sucesso!');
           
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error.response.data);
        });
}