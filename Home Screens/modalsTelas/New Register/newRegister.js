function closeModal(){
    window.parent.document.getElementById('iframeModais').style.display = 'none';
}

function maskPhone(inputTel) {
    let value = inputTel.value.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca os parênteses no DDD
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen após os primeiros 5 dígitos
    
    inputTel.value = value;
}


function registerNewUser(){
    
    let UserData = {
    createTime: null,
    registerByMe: [],
    profileImgPath: '',
    userId: 0,
    userCode: '',
    senha: `${document.getElementById('senhaNova').value}`,
    tipo: false,
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
    }

    }
    postNewUser(UserData)
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

