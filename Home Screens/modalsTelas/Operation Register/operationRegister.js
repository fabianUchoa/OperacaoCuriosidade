function closeModal(){
    window.parent.document.getElementById('iframeModais').style.display= 'none'
    window.parent.document.querySelector('.overlay').style.display = 'none'
    window.parent.reloadPag()
}

function maskCode(inputCode) {
    let value = inputCode.value.replace(/\D/g, "")
    value = value.replace(/[^0-9-]/g, '')
    value = value.replace(/(\d{2})(\d)/, "$1-$2")
    inputCode.value = value
}

let usuario

function getUser(){
    let userCode = document.getElementById('inputUserCode').value
    axios.get(`https://localhost:7064/api/user/filtros`,{
        params: {
            userCode : userCode
        }})
        .then(response =>{
            console.log('Usuários Recebidos: ',response.data);
            usuario = response.data
            getUserData();
            
        })
        .catch(error =>{
            console.error('Erro ao fazer requisição GET: ',error);

        });

    }

function getUserData(){
        console.log(usuario)
        let userGet = usuario[0]
        document.getElementById('inputNome').value = userGet.fatos.nome
        document.getElementById('inputIdade').value = userGet.fatos.idade
        document.getElementById('inputMail').value = userGet.fatos.email
        document.getElementById('userName').value = userGet.fatos.userName
        document.getElementById('nasc').value = userGet.fatos.nasc
        document.getElementById('estadoCivil').value = userGet.fatos.estadoCivil
        document.getElementById('end').value = userGet.fatos.endereco
        document.getElementById('tel').value = userGet.fatos.tel
        document.getElementById('cargo').value = userGet.fatos.profissao
        if(userGet.operacao != null){
            if(userGet.operacao.interesses != null){
                document.getElementById('contInteresses').innerHTML = userGet.operacao.interesses.length
                listInteresses(userGet)
            }
            if(userGet.operacao.valores != null){
                document.getElementById('contValores').innerHTML = userGet.operacao.valores.length
                listValores(userGet)
            }
            if(userGet.operacao.sentimentos != null){
                document.getElementById('contSentimentos').innerHTML = userGet.operacao.sentimentos.length
                listSentimentos(userGet)
            }
             
        }
    }

function listValores(user){
    let divContent = document.getElementById('divValor')
    divContent.innerHTML = ' '
    let cont = 0
    user.operacao.valores.forEach(valor => {
        let divValor = document.createElement('div')
        divContent.appendChild(divValor)
        divValor.className = 'conteudoCuriosidades'
        divValor.id = 'valorConteudo'
        cont++
        divValor.innerHTML = `<div class="idCuriosidade" id="valorItem${cont}">
                                <span class="idCuriosidadeStyle">${cont}</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <span class="conteudoCuriosidadeStyle">${valor.conteudo}</span>
                                </div>
                                <div id="options">
                                    <img src="/Imgs/shareIcons/edit.svg" id="editIcon" alt="" onclick="editValor(${cont},${valor.valoresId})">
                                    <img src="/Imgs/shareIcons/delete.svg" id="deleteIcon" alt="" onclick="deleteItem('valores',${valor.valoresId})">
                                </div>
                            </div>`
    });
}

function listSentimentos(user){
    let divContent = document.getElementById('divSentimentos')
    divContent.innerHTML = ' '
    let cont = 0
    user.operacao.sentimentos.forEach(sentimento => {
        let divSentimentos = document.createElement('div')
        divContent.appendChild(divSentimentos)
        divSentimentos.className = 'conteudoCuriosidades'
        divSentimentos.id = 'sentimentoConteudo'
        cont++
        divSentimentos.innerHTML = `<div class="idCuriosidade" id="sentimentoItem${cont}">
                                <span class="idCuriosidadeStyle">${cont}</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <span class="conteudoCuriosidadeStyle">${sentimento.conteudo}</span>
                                </div>
                                <div id="options">
                                    <img src="/Imgs/shareIcons/edit.svg" id="editIcon" alt="" onclick="editSentimento(${cont},${sentimento.sentimentosId})">
                                    <img src="/Imgs/shareIcons/delete.svg" id="deleteIcon" alt="" onclick="deleteItem('sentimentos',${sentimento.sentimentosId})">
                                </div>
                            </div>`
    });
}

function listInteresses(user){
    let divContent = document.getElementById('divInteresse')
    divContent.innerHTML = ' '
    let cont = 0
    user.operacao.interesses.forEach(interesse => {
        let divInteresses = document.createElement('div')
        divContent.appendChild(divInteresses)
        divInteresses.className = 'conteudoCuriosidades'
        divInteresses.id ='interesseConteudo'
        cont++
        divInteresses.innerHTML = `<div class="idCuriosidade" id="interesseItem${cont}">
                                <span class="idCuriosidadeStyle">${cont}</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <span class="conteudoCuriosidadeStyle">${interesse.conteudo}</span>
                                </div>
                                <div id="options">
                                    <img src="/Imgs/shareIcons/edit.svg" id="editIcon" alt="" onclick="editInteresse(${cont},${interesse.interessesId})">
                                    <img src="/Imgs/shareIcons/delete.svg" id="deleteIcon" alt="" onclick="deleteItem('interesses',${interesse.interessesId})">
                                </div>
                            </div>`
    });
}

//CRUD itens curiosidade

function addValores(){
    postOperacao()
    let divValores = document.getElementById('divValor')
    divValores.innerHTML += `<div class="conteudoCuriosidades" id="inputValores">
                            <div class="idCuriosidade">
                                <span class="idCuriosidadeStyle">x</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <input type="text" class="inputConteudoCuriosidade" id="inputConteudoValores">
                                    
                                </div>

                                <div id="options">
                                    <input type="button" value="Inserir" class="bttSearch" id="insertBtt" onclick="postValores()">
                                </div>
                                
                            </div>
                            
                        </div>`
}

function addSentimentos(){
    postOperacao()
    let divSentimentos = document.getElementById('divSentimentos')
    divSentimentos.innerHTML += `<div class="conteudoCuriosidades" id="inputSentimentos">
                            <div class="idCuriosidade">
                                <span class="idCuriosidadeStyle">x</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <input type="text" class="inputConteudoCuriosidade" id="inputConteudoSentimentos">
                                    
                                </div>

                                <div id="options">
                                    <input type="button" value="Inserir" class="bttSearch" id="insertBtt" onclick="postSentimentos()">
                                </div>
                                
                            </div>
                            
                        </div>`
}

function addInteresses(){
    postOperacao()
    let divInteresses = document.getElementById('divInteresse')
    divInteresses.innerHTML += `<div class="conteudoCuriosidades" id="inputInteresses">
                            <div class="idCuriosidade">
                                <span class="idCuriosidadeStyle">x</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <input type="text" class="inputConteudoCuriosidade" id="inputConteudoInteresses">
                                    
                                </div>

                                <div id="options">
                                    <input type="button" value="Inserir" class="bttSearch" id="insertBtt" onclick="postInteresses()">
                                </div>
                                
                            </div>
                            
                        </div>`
}

//POST ITENS

function postSentimentos(){
    let inputConteudo = document.getElementById('inputConteudoSentimentos').value
    console.log(usuario)
    let user = usuario[0]
    if(inputConteudo == ''){
        alert('O campo não pode estar vazio!')
        return;
    }
    
    inputConteudo = {
        conteudo: inputConteudo
    }
    axios.post(`https://localhost:7064/api/user/operacao/${user.userId}/sentimentos`,inputConteudo, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        getUser()
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição POST: ',error);

    });
}



function postInteresses(){
    let inputConteudo = document.getElementById('inputConteudoInteresses').value
    let user = usuario[0]
    console.log('alo')
    if(inputConteudo == ''){
        alert('O campo não pode estar vazio!')
        return;
    }
    
    inputConteudo = {
        conteudo: inputConteudo
    }
    axios.post(`https://localhost:7064/api/user/operacao/${user.userId}/interesses`,inputConteudo, {
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        getUser()
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição POST: ',error);

    });
}

function postValores(){
    let inputConteudo = document.getElementById('inputConteudoValores').value
    let user = usuario[0]
    
    
    if(inputConteudo == ''){
        alert('O campo não pode estar vazio!')
        return;
    }
    
    inputConteudo = {
        conteudo: inputConteudo
    }
    axios.post(`https://localhost:7064/api/user/operacao/${user.userId}/valores`,inputConteudo, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        window.location.href = '#'
        getUser()
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição POST: ',error);

    });
}

//DELETE ITENS

function deleteItem(tipo,itemId ){
    let user = usuario[0]
    axios.delete(`https://localhost:7064/api/user/operacao/${user.userId}/${tipo}/${itemId}`)
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        getUser();
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição DELETE: ',error);

    });
}

//postOperacao

function postOperacao(){
    let user = usuario[0]
    let inputPostOperacao = {
        userId: 0,
        operacaoId: 0
    }
    axios.post(`https://localhost:7064/api/user/${user.userId}/operacao`,inputPostOperacao,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        return;
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição GET: ',error);

    });
}

//Edit items

function editInteresse(cont, itemId){
    let interesseDiv = document.getElementById(`interesseItem${cont}`).parentElement
    console.log(interesseDiv)
    interesseDiv.innerHTML = ' '
    console.log(interesseDiv)
    interesseDiv.innerHTML = `<div class="conteudoCuriosidades" id="inputInteresses">
                            <div class="idCuriosidade">
                                <span class="idCuriosidadeStyle">x</span>
                            </div>
                            <div id="conteudo">
                                <div class="tipoCuriosidade">
                                    <input type="text" class="inputConteudoCuriosidade" id="inputConteudoInteresses">
                                    
                                </div>

                                <div id="options">
                                    <input type="button" value="Inserir" class="bttSearch" id="insertBtt" onclick="putItemsOperacao('interesses',${itemId})">
                                </div>
                                
                            </div>
                            
                        </div>`

}

function putItemsOperacao(tipo,itemId){
    let user = usuario[0]
    let conteudo = document.getElementById('inputConteudoInteresses').value
    if(conteudo == ''){
        alert('O campo não pode estar vazio!')
        return;
    }
    axios.put(`https://localhost:7064/api/user/operacao/item-update/${user.userId}/${tipo}/${itemId}`, conteudo,{
        headers: {
            'Content-Type': 'application/json'
        }

    }
        )
    .then(response =>{
        console.log('Usuários Recebidos: ',response.data);
        getUser()
        
    })
    .catch(error =>{
        console.error('Erro ao fazer requisição PUT: ',error);

    });
}