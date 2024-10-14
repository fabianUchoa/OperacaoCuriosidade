let userLogin = sessionStorage.getItem('userLoginId')

axios.get(`https://localhost:7064/api/user/${userLogin}`)
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        loadUserProfile(response.data)
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });

function loadUserProfile(user){
    
    document.querySelector('.perfilIcon').src = `${user.profileImgPath}`
}

function goToLogin(){
    window.parent.location.href = '/telaLogin/login.html'
}

function goToConfig(){
    window.parent.location.href = '/Home Screens/homeConfiguracoes/configuracoes.html'
}