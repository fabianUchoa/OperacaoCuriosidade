var i = 0

document.addEventListener('DOMContentLoaded',function time(){
        setInterval(trocaImg,3000)
        

});

function trocaImg() {
    
        if(i==4)
            i=0
    document.getElementById('img1').src = `Imgs/OnionSlices/onion${i}.svg`
    document.getElementById(`nav${i}`).style.background = '#000000a1'
    if(i==0){
        document.getElementById(`nav3`).style.background = 'white'
    }else if(i<=3){
        document.getElementById(`nav${i-1}`).style.background = 'white'
    }
    i++
}