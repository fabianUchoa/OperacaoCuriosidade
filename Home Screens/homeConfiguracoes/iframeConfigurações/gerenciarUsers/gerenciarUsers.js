axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        showUsers(response.data);
        sessionStorage.setItem('users', `${response.data}`)
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });



    function showUsers(users){
        const listDiv = document.getElementById('listagem');
        listDiv.innerHTML = ' ';
        let status;
        let cont=1;
        if(Array.isArray(users)){
            users.forEach(user=>{
                
                const userElement = document.createElement('div');
                status = verifyStatus(user.status)
                listDiv.appendChild(userElement);
                userElement.innerHTML = `<div class="cadastro" id="cad1">
                        <div class="codColumn">
                            ${user.userCode}
                        </div>
                        <div class="nomeColumn">
                            ${user.fatos.nome}
                            
                        </div>
                        <div class="mailColumn">
                            ${user.fatos.email}
                            
                        </div>
                        <div class="createDateColumn">
                            ${(user.createTime).replace('-','/').replace('-','/')}
                            
                        </div>
                        <div class="statusColumn" onclick="alteraStatus(${user.status},${user.userId})">
                            <p class="${status}">${status}</p>
                        </div>
                        <div class="detailBtt" id="detailBtt1" onclick="openModalDetails(${cont})">
                            <img src="/Imgs/MeusCadIcons/moreVerticalIcon.svg" alt="" class="moreVertical">
                                Detalhes
                        </div>
                    </div>`
                    cont++;
        });
        
        console.log(cont)
        }else{
            console.error("A resposta não é uma array de objetos.")
        }
    }