const butn = document.querySelector('.colors')
const body = document.querySelector('body')

const img =document.querySelector('.imgBox') 

function changeImage(){
  
    const iphpro = document.querySelector('.iphpro')
    const colors = iphpro
    const wh = document.querySelector('.colors2')
    if(iphpro) {
        iphpro.src='./img/blueiphone.png'
    } else if(colors) {
        wh.src ='./img/whiteiphone.webp'
    }
   
  
}

console.log(butn,body,iphpro,img);