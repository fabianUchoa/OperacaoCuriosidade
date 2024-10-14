let userLoginId = sessionStorage.getItem('userLoginId')

//Carrega perfil do usuário

axios.get(`https://localhost:7064/api/user/${userLoginId}`)
    .then(response =>{
        loadUserData(response.data)
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });


function loadUserData(user){
    window.parent.document.getElementById('altFoto').src = `${user.profileImgPath}`
    document.getElementById('inputNome').value = user.fatos.nome
    document.getElementById('inputIdade').value = user.fatos.idade
    document.getElementById('inputMail').value = user.fatos.email
    document.getElementById('userName').value = user.fatos.userName
    document.getElementById('nasc').value = user.fatos.nasc
    document.getElementById('estadoCivil').value = user.fatos.estadoCivil
    document.getElementById('end').value = user.fatos.endereco
    document.getElementById('tel').value = user.fatos.tel
    document.getElementById('cargo').value = user.fatos.profissao
}