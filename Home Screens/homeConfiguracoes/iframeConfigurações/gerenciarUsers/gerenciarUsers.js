window.onload = function(){
    getUsers()
}



function getUsers(){
    axios.get('https://localhost:7064/api/user')
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            showUsers(response.data);
            
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });
    }


    function showUsers(users){
        const listDiv = document.querySelector('.listagem');
        listDiv.innerHTML = '';
        let status;
        let type;
        let cont=1;
        if(Array.isArray(users)){
            users.forEach(user=>{
                
                const userElement = document.createElement('div');
                status = verifyStatus(user.status);
                type = verifyType(user.tipo);
                listDiv.appendChild(userElement);
                userElement.innerHTML = `<div class="cadastro"> 
                    <input type="checkbox" name="select" id="select" class="checkColumn">
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
                        ${user.createTime}
                        
                    </div>
                    <div class="statusColumn">
                        <p class="${status}" onclick="openModalStatus('${status}', ${user.userId})">${status}</p>
                    </div>
                    <div class="tipoColumn">
                        <p class="${type}">${type}</p>
                    </div>
                    <div class="detailBtt" onclick="openModalDetails(${cont}, ${user.userId})">
                        <img src="/Imgs/MeusCadIcons/moreVerticalIcon.svg" alt="" class="moreVertical">
                            Detalhes
                    </div>
                </div>`
                    cont++;
        });
        
        }else{
            console.error("A resposta não é uma array de objetos.")
        }
    }

    function verifyStatus(status){
        if(status == true)
            return 'Ativo';
        else
            return 'Inativo';
    }  

    function verifyType(type){
        if(type == true)
            return 'Administrador';
        else 
            return 'Operador';
    }



    function openModalDetails(bttAtivador, userId){
        let iframe = window.parent.document.getElementById('iframeDetails');
        sessionStorage.setItem('user',userId);
        sessionStorage.setItem('window', 'users')
        window.parent.document.querySelector('.overlay').style.display = 'block';
        iframe.style.display='block'
        
        
        
        sessionStorage.setItem('cardNumber',bttAtivador);
        if(bttAtivador==1){
            iframe.style.top = '37%'
            
        }else{
            iframe.style.top = `${37-7+(bttAtivador*7)}%`
        }
        console.log(30-7+(bttAtivador*7))
    }


    


    //Filtros Functions

    function clearFilter(){
         document.getElementById('id').value = ''
         document.getElementById('status').value= null
         document.getElementById('tipo').value = null
         document.getElementById('dataIn').value = null
         document.getElementById('dataOut').valu = null
     }

     function getFilter(){
        let inputStatus
        let inputType;
        let inputCod = document.getElementById('id').value;
        const regex = /^\d{2}-\d{5}$/
        if(!regex.test(inputCod))
            inputCod = null

        if(document.getElementById('status').value=='ativo'){
            inputStatus = true;
        }else if(document.getElementById('status').value=='inativo'){
            inputStatus = false
        }else inputStatus = null
    
        if(document.getElementById('tipo')){
            if(document.getElementById('tipo').value == 'Administrador'){
                inputType = true;
            }else if(document.getElementById('tipo').value == 'Operador'){
                inputType = false
            }else{
                inputType = null
            }
        }
    
        let inputDateIn = document.getElementById('dataIn').value;
        let inputDateOut = document.getElementById('dataOut').value;
        
        applyFilter(inputCod,inputStatus,inputType,inputDateIn,inputDateOut)
    
    }

    function applyFilter(inputCod,inputStatus,inputType,inputDateIn,inputDateOut){
        axios.get('https://localhost:7064/api/user/filtros',{
            params: {
                userCode : inputCod,
                status : inputStatus,
                tipo: inputType,
                dataIn: inputDateIn,
                dataOut: inputDateOut
            }})
            .then(response =>{
                console.log('Usuários Recebidos: ',response.data);
                showUsers(response.data)
            })
            .catch(error =>{
                console.error('Erro ao fazer requisição GET: ',error);
    
            });
    }

    function openRegisterModal(){
        let iframe = window.parent.document.getElementById('iframeModais')
        iframe.style.display = 'block';
        iframe.style.width = '100vw'
        iframe.style.height = '100vh'
        iframe.src = '/Home Screens/modalsTelas/New Register/newRegister.html'
        window.parent.document.querySelector('.overlay').style.display = 'block'
    }


function openModalStatus(status,userId){
    let iframe = window.parent.document.getElementById('iframeConfirmModais')
        iframe.style.display = 'block';
        sessionStorage.setItem('userId', userId);
        if(status =='Ativo')
            iframe.src = '/Home Screens/modalsTelas/Status Change/Desactivation Modal/desactivationModal.html'
        else
            iframe.src = '/Home Screens/modalsTelas/Status Change/Activation Modal/activationModal.html'
        window.parent.document.querySelector('.overlay').style.display = 'block'
}

function openModalDelete(){
    let iframe = window.parent.document.getElementById('iframeConfirmModais')
    iframe.style.display = 'block';
    window.parent.document.querySelector('.overlay').style.display = 'block'
    iframe.src = '/Home Screens/modalsTelas/User Delete/operationDelete.html'
}