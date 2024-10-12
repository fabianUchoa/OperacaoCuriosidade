let users;

axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        users = response.data;
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });


function closeModal(){
window.parent.document.getElementById('iframeConfirmModais').style.display = 'none';
window.parent.document.querySelector('.overlay').style.display = 'none';
}


function changeStatus(){
    let userId = sessionStorage.getItem('userId');
    users.forEach(user => {
        if(user.userId == userId){
            updateStatus(userId);

        }
    });
}

function updateStatus(userId){
    axios.put(`https://localhost:7064/api/user/altera-status/${userId}`)
    .then(response => {
        console.log('Dados atualizados com sucesso:', response.data);
        closeModal()
        window.parent.location.reload();
    })
    .catch(error => {
        console.error('Erro ao atualizar os dados:', error.response ? error.response.data : error);
    });
}