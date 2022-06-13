let query = location.search;
let queryString = new URLSearchParams(query);
let agarrandolo = queryString.get('id');

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/artist?id= ${agarrandolo}`;

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let info = data.tracks.data;
  
    console.log(info);
    
    let artista = document.querySelector('.section1');
    artista.innerHTML += ` <article class="article1 detail-artist">
    <a href="detail-track.html" class="sacardilineado">
   <div class="contenedorfoto"> <img src="${info.artist.picture}" alt=""></div>
    <h3>Name : ${info.artist.name}</h3>
    <h4> <ul>
        <li> ${info.tracklist}</li>
        <li>Bad Guy</li>
        <li> I love you</li>
        <li> Ocena eyes</li>
        <li> Bored</li>
    </ul> </h4>
</a>
</article>`
})

.catch(function (error) {
    console.log('Error:'+ error);
})