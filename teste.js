var i = 0

document.addEventListener('DOMContentLoaded',function time(){
        setInterval(trocaImg,3000)
        

});

function trocaImg() {
    i++
        if(i==4)
            i=0
     document.getElementById('img1').src = `Imgs/OnionSlices/onion${i}.svg`
}