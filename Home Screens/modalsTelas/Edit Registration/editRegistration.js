let usersData;
let userOperationId = sessionStorage.getItem('user')

axios.get(`https://localhost:7064/api/user/${userOperationId}`)
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        pullInformations(response.data);
        usersData = response.data
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });


function pullInformations(user){
    
    document.getElementById('altFoto').src = `${user.profileImgPath}`
    document.getElementById('inputNome').value = user.fatos.nome
    document.getElementById('inputIdade').value = user.fatos.idade
    document.getElementById('inputMail').value = user.fatos.email
    document.getElementById('userName').value = user.fatos.userName
    document.getElementById('nasc').value = user.fatos.nasc
    document.getElementById('estadoCivil').value = user.fatos.estadoCivil
    document.getElementById('end').value = user.fatos.endereco
    document.getElementById('tel').value = user.fatos.tel
    document.getElementById('cargo').value = user.fatos.profissao
    if(user.status==false){
        document.querySelector('.userEdit').style.backgroundColor = 'rgb(215, 35, 35)'
        document.querySelector('#toggleSit').innerHTML = 'Inativo'
        document.querySelector('#toggleBtSit').style.backgroundColor = 'rgb(215, 35, 35)'
        document.querySelector('#statusIcon').src = '/Imgs/Complementos/recuseIcon.svg'
        document.querySelector('#toggleBtSit').style.justifyContent ='flex-start'}
}

function removeImgProfile(){
    let userId = userOperationId;

    if(Array.isArray(usersData)){
        usersData.forEach(user=>{
            if(user.userId == userId){
                user.profileImgPath = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='
            }})
        }
        document.getElementById('altFoto').src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNmIxYmM2Ij48cGF0aCBkPSJNNDgwLTQ4MHEtNjYgMC0xMTMtNDd0LTQ3LTExM3EwLTY2IDQ3LTExM3QxMTMtNDdxNjYgMCAxMTMgNDd0NDcgMTEzcTAgNjYtNDcgMTEzdC0xMTMgNDdaTTE2MC0yNDB2LTMycTAtMzQgMTcuNS02Mi41VDIyNC0zNzhxNjItMzEgMTI2LTQ2LjVUNDgwLTQ0MHE2NiAwIDEzMCAxNS41VDczNi0zNzhxMjkgMTUgNDYuNSA0My41VDgwMC0yNzJ2MzJxMCAzMy0yMy41IDU2LjVUNzIwLTE2MEgyNDBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDBabTgwIDBoNDgwdi0zMnEwLTExLTUuNS0yMFQ3MDAtMzA2cS01NC0yNy0xMDktNDAuNVQ0ODAtMzYwcS01NiAwLTExMSAxMy41VDI2MC0zMDZxLTkgNS0xNC41IDE0dC01LjUgMjB2MzJabTI0MC0zMjBxMzMgMCA1Ni41LTIzLjVUNTYwLTY0MHEwLTMzLTIzLjUtNTYuNVQ0ODAtNzIwcS0zMyAwLTU2LjUgMjMuNVQ0MDAtNjQwcTAgMzMgMjMuNSA1Ni41VDQ4MC01NjBabTAtODBabTAgNDAwWiIvPjwvc3ZnPg=='
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


function saveButton(){
    let userLoginId = sessionStorage.getItem('userLoginId')
    let updateData = {
        nome : `${document.getElementById('inputNome').value}`,
        idade: `${document.getElementById('inputIdade').value}`,
        userName: `${document.getElementById('userName').value}`,
        email: `${document.getElementById('inputMail').value}`,
        nasc: `${document.getElementById('nasc').value}`,
        estadoCivil: `${document.getElementById('estadoCivil').value}`,
        endereco: `${document.getElementById('end').value}`,
        profissao: `${document.getElementById('cargo').value}`,
        tel: `${document.getElementById('tel').value}`
    }
    
    

    
    
    if(verifyStatus(usersData.status)!=document.getElementById('toggleSit').textContent){
        userUpdateStatus()
    }
    if(imgAlterada==1){
        newImg(userId);
    }
    userUpdate(updateData);
    window.parent.document.location.reload()
}

function verifyStatus(status){
    if(status == true)
        return 'Ativo';
    else
        return 'Inativo';

}


function userUpdate(dadosAtualizados){

        axios.put(`https://localhost:7064/api/user/${userOperationId}`, dadosAtualizados)
            .then(response => {
                console.log('Usuário atualizado com sucesso:', response.data);
                closeModal()
            })
            .catch(error => {
                console.error('Erro ao atualizar usuário:', error.response.data);
                console.log(response.data)
            });
}

function userUpdateStatus(){
    axios.put(`https://localhost:7064/api/user/altera-status/${userOperationId}`)
        .then(
            console.log('Status Atualizado!')
        )
        .catch(error=>{
            console.error('Erro ao alterar o status:',error.response);
        })
}


function newPassword(userId, senha){
    console.log(userId)
    console.log(senha)

    axios.put(`https://localhost:7064/api/user/nova-senha/${userId}?senha=${senha}`)
        .then(response => {
            console.log('Usuário atualizado com sucesso:', response.data);
            closeModal()
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error.response.data);
        });
}

//update de imagem

let imgAlterada = 0;
const uploadButton = document.getElementById('updateImg');
const fileInput = document.getElementById('inputImg');
let imgBase64;

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





//Func para atulizar IMG

function newImg(id){
    axios.put(`https://localhost:7064/api/user/update-picture/${id}`, imgBase64,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log('Usuário atualizado com sucesso:', response.data);
            window.parent.location.reload()
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error.response.data);
        });
}