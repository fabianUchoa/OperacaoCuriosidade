

function converter64(){
    const imageInput = document.getElementById('inputImage');
    console.log(imageInput);
    const image = imageInput.files[0];
    console.log(image);

    if(image){
        convertImageToBase64(image)
    }
}


function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
            base64ToImage(reader.result);
            show64(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        console.log(reader.readAsDataURL(file));
        console.log(file);
    });
}


function base64ToImage(base64String){
    const img = document.getElementById('testeAlo')
    img.src = base64String;
}


function show64(string64){
    document.getElementById('exibir').textContent = string64
}

const date = new Date().toISOString().slice(0,10)
console.log(date)
alert('alo')