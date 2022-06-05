 
 /*ALBUMES 

 let albumes = [ ' '];
 let url = 'https://thingproxy.freeboard.io/fetch/https://developers.deezer.com/api/album ';
 fetch(url)
 .then(function (response) {
   return response.json();
 }) 
 .then(function (data) {
   console.log(data);
   albumes = data;

let cantan = document.querySelector('.section2')
let cantantes = [ ' '];

for (let i = 0; i < 6; i++) {
  cantantes.innerHTML += `<article class="article2">
  <a href="detail-album.html" class="sacardilineado">
    <div class="contenedorfoto">  <img src="${data[i].cover}" alt=""></div>
        <h3> ${data[i].title}</h3>
        <h4>${data[i].artist.name}</h4>
        <p>${data[i].release_date}</p>
    </a>
</article>`;
  
}

cantan.innerHTML = cantantes

 })
 .catch(function (error) {
   console.log('El error fue:' + error)
 })
 */
 
 /* ARTISTAS */

 
 let artistas = ['  '];

fetch('https://thingproxy.freeboard.io/fetch/' + 'https://developers.deezer.com/api/artist ' )
.then(function (response) {
    return response.json();
    
})
.then(function (data) {
  console.log(data)
  artistas = data;
    
 let caract = document.querySelector(".section3")

for (let i = 0; i < 6; i++) {
  
  caract.innerHTML += `<article>
  <img src="${artistas[i].picture}" alt='' />
   <p>Name: ${artistas[i].name} </p>
</article>
<hr>
`;
}

})
.catch(function (error) {
    console.log('El error fue' + error)
}) 

/* Respuesta de busquedas -- No funciona */
/*let form = document.querySelector('form'); */
let claseInput = document.querySelector('search');
let claseHtres = document.querySelector('.respuesta');

if (claseInput.value == "") {
  claseHtres.innerText = 'No has buscado nada'
} else if (claseInput.value.lenght > 3){
  claseHtres.innerText = "Debes ingresar mas de 3 letras"
} else {
  this.Submit()
}