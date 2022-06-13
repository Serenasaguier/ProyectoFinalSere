
/* NO FUNCIONA */

let queryS = location.search;
let queryString = new URLSearchParams(queryS);
let agarrando = queryString.get('id');

const link = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/albums?id=${agarrando}` ;

fetch(link)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let info = data.tracks.data;
 
 console.log(info);
let albums = document.querySelector('.section1')

albums.innerHTML += `  <article class="largo" >
            
<div class="contenedorfoto"><img src=" ${info.cover}" alt=""> </div> 
<ul >
<li>${info.title}</li>
<a href="./detail-artist.html" class="sacardilineado largo" ><li>${info.artist}</li> </a>
 <a href="./detail-genres.html" class="sacardilineado largo"> <li></li></a>
<li></li>
</ul>
<h3>Canciones</h3>
<a href="./detail-track.html" class="sacardilineado largo"> 
   <ul>
    <li>${info.tracklist}</li>
    <li>Go Flex</li>
    <li>Congratulations</li>
    <li>I Fall Apart</li>
</ul> 
</a>
</article> `

}) 
