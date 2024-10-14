let user = sessionStorage.getItem('user')


function userDelete(){
    axios.delete(`https://localhost:7064/api/user/${user}`)
        .then(response =>{
            window.parent.reloadPag()
            closeModal()
        })
        .catch(error =>{
            console.error('Erro ao fazer excluir o usuário: ',error);

        });
    }

function closeModal(){
    window.parent.document.getElementById('iframeModais').style.display = 'none'
    window.parent.document.querySelector('.overlay').style.display = 'none'
}