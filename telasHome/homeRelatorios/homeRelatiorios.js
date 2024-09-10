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
            let dadosLateral = document.querySelector('.dadosLateral')
            let conteudoConfig = document.querySelector('.conteudo')

            dadosLateral.style.display = 'none'
            conteudoConfig.style.width = '70vw'
            document.querySelector('.logoFotter').style.margin = '0'
        }

        function minimizaIframe(){
            let dadosLateral = document.querySelector('.dadosLateral')
            let conteudoConfig = document.querySelector('.conteudo')

            dadosLateral.style.display = 'flex'
            conteudoConfig.style.width = '52vw'
            document.querySelector('.logoFotter').style.margin = ' 0 5vw 0 0'
        }