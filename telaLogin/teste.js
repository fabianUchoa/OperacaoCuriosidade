var i = 0

document.addEventListener('DOMContentLoaded', function time() {
    setInterval(trocaImg, 2500)


});

function trocaImg() {
    let txt = document.getElementById('txtCuriosidade')
    if (i == 4)
        i = 0
    document.getElementById('onionImg').src = `../Imgs/OnionSlices/onion${i}.svg`
    trocaNav()
    if (i == 0) {
        txt.innerHTML = '"A primeira camada da cebola é sobre conhecer o colaborador além do cargo, revelando suas <span class="txtPurple">necessidades</span> e <span class="txtPurple">objetivos pessoais</span>."'
    } else if (i == 1) {
        txt.innerHTML = '"O desafio é desvendar os interesses e expectativas reais do colaborador, indo além da superfície para entender o significado por trás deles."'
    } else if (i == 2) {
        txt.innerHTML = '"Atingir essa camada significa ir além do técnico, explorando a esfera humana para conhecer os sentimentos do colaborador, entendendo quem ele realmente é. Isso ajuda a fortalecer laços e a formentar um comportamento genuíno."'
    } else if (i == 3) {
        txt.innerHTML = '"Aprofundar o relacionamento transforma o cumprimento em compromisso, revelando a essência do colaborador e o que o move, estabelecendo assim o mais forte ponto de conexão."'
    }

    i++
}

function trocaNav() {
    limpaNav()
    document.getElementById(`nav${i}`).style.background = '#000000a1'
    if (i == 0) {
        document.getElementById(`nav3`).style.background = 'lightgray'
    } else if (i <= 3) {
        document.getElementById(`nav${i - 1}`).style.background = 'lightgray'
    }
}

function limpaNav() {
    let cont
    for (cont = 0; cont < 4; cont++) {
        document.getElementById(`nav${cont}`).style.background = 'lightgray'
    }
}

function manualTxt(id) {
    let txt = document.getElementById('txtCuriosidade')
    if (id == 'nav0') {
        txt.innerHTML = '"A primeira camada da cebola é sobre conhecer o colaborador além do cargo, revelando suas <span class="txtPurple">necessidades</span> e <span class="txtPurple">objetivos pessoais</span>."'
        i = 0;
        trocaImg()
    } else if (id == 'nav1') {
        txt.innerHTML = '"O desafio é desvendar os interesses e expectativas reais do colaborador, indo além da superfície para entender o significado por trás deles."'
        i = 1;
        trocaImg()
    } else if (id == 'nav2') {
        txt.innerHTML = '"Atingir essa camada significa ir além do técnico, explorando a esfera humana para conhecer os sentimentos do colaborador, entendendo quem ele realmente é. Isso ajuda a fortalecer laços e a formentar um comportamento genuíno."'
        i = 2;
        trocaImg()
    } else if (id == 'nav3') {
        txt.innerHTML = '"Aprofundar o relacionamento transforma o cumprimento em compromisso, revelando a essência do colaborador e o que o move, estabelecendo assim o mais forte ponto de conexão."'
        i = 3;
        trocaImg()
    }

}

function getUsers() {
    axios.get('https://localhost:7064/api/user')
        .then(response => {
            console.log('Usuários Recebidos: ', response.data);
            validaLogin(response.data)
        })
        .catch(error => {
            console.error('Erro ao fazer requisição GET: ', error);

        });
}

function validaLogin(users) {
    let userFound = 0
    let userLogin = document.getElementById('user').value
    let userPassword = document.getElementById('password').value

    users.forEach(user => {
        if(user.senha == userPassword && user.fatos.email == userLogin){
            window.location.href= "/Home Screens/homeVG/homeVG.html"
            userFound = 1
            sessionStorage.setItem('userLoginId', user.userId)
        }else{
            return;
    }});
    if(userFound==0)
        alert("Login ou Senha inválidos!")
}