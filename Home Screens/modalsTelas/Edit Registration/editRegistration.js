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
    let userId = window.parent.document.getElementById('varId').textContent;

    if(Array.isArray(users)){
        users.forEach(user=>{
            if(user.userId == userId){
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
        });
}}







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
    let inputSenha = document.getElementById('newPassword');
    let updateSenha;

    let userId = window.parent.document.getElementById('varId').textContent;
    userUpdate(updateData, userId);
    if(inputSenha.value !=null){
        updateSenha = `${document.getElementById('newPassword').value}`
        console.log(updateSenha)
        newPassword(userId, updateSenha)
    }
    if(imgAlterada==1){
        newImg(userId);
    }
}


function userUpdate(dadosAtualizados, userId){

        axios.put(`https://localhost:7064/api/user/${userId}`, dadosAtualizados)
            .then(response => {
                console.log('Usuário atualizado com sucesso:', response.data);
                closeModal()
            })
            .catch(error => {
                console.error('Erro ao atualizar usuário:', error.response.data);
                console.log(response.data)
            });
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

//Update Profile Picture
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