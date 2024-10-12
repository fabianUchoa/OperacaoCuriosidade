axios.get('https://localhost:7064/api/user')
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        showUsers(response.data);
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });



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
                        <p class="${status}" onclick="abreModal('.confirmDesactive')">${status}</p>
                    </div>
                    <div class="tipoColumn">
                        <p class="${type}">${type}</p>
                    </div>
                    <div class="detailBtt" id="#detailBtt1" onclick="">
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