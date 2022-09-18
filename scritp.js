
function k(){

let newdiv=document.createElement('div');
document.querySelector('.top').appendChild(newdiv);
newdiv.className='div1';
let topinner='<h1 class="baslik">Alisveris listesi</h1>'+
    '<h1 class="baslik2">Alisveris listesi</h1>'
    +'<button class="trash-btn">SIL</button>'



newdiv.innerHTML=topinner;

}

var sil=document.querySelectorAll(".trash-btn");

sil.addEventListener("click", functionSil(e));


function functionSil(e){
       
    console.log("sil fonksiyonu calisiyor")
    const item= e.target;

    if (item.classlist[0]==="trash-btn") {
        const todo=item.parentElement;
        todo.remove();}

        
    };


