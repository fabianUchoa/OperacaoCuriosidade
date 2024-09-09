        var conteudo = document.querySelector('.conteudo')
        var iframe = document.querySelector('iframe')

        function abreIframe(){
            conteudo.style.display = 'none'
            iframe.style.display = 'block'

        }

        function fechaIframe(){
            conteudo.style.display = 'flex'
            iframe.style.display = 'none'
        }

        function expandeIframe(){
            document.querySelector('.dadosLateral').style.display = 'none'
            conteudo.style.width = '80vw'
            iframe.style.width = '80vw'
        }