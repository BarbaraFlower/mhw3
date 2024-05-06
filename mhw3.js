//Tendine

//PRODOTTI
function prodotti(event){
    const element = document.querySelector('#barra div');
    element.classList.remove('hidden')
}

function rprodotti(event){
    const element = document.querySelector('#barra div');
    element.classList.add('hidden')
}


const element = document.querySelector('#prodotto');
element.addEventListener('mouseover', prodotti);
element.addEventListener('mouseleave', rprodotti);



//CONCORSO
function vinci(event){
    const elem = document.querySelector('#vinciconc');
    elem.classList.remove('hidden')
}

function rvinci(event){
    const elem = document.querySelector('#vinciconc');
    elem.classList.add('hidden')
}


const elem = document.querySelector('#concorso');
elem.addEventListener('mouseover', vinci);

elem.addEventListener('mouseleave', rvinci);



//IMMAGINI PAVESINI
function cambiapavesino(event){
    const image = event.currentTarget;
    image.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/originali_on.png';
}
const image = document.querySelector('#pavesino [data-index="1"] img');
image.addEventListener("mouseover", cambiapavesino);
function ripristinapavesino(event){
    const image = event.currentTarget;
    image.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/originali_off.png';
}
image.addEventListener("mouseleave", ripristinapavesino);



function cambiapavesino2(event){
    const image2 = event.currentTarget;
    image2.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/cacao_on.png';
}
const image2 = document.querySelector('#pavesino [data-index="2"] img');
image2.addEventListener("mouseover", cambiapavesino2);
function ripristinapavesino2(event){
    const image2 = event.currentTarget;
    image2.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/cacao_off.png';
}
image2.addEventListener("mouseleave", ripristinapavesino2);



function cambiapavesino3(event){
    const image3 = event.currentTarget;
    image3.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/caffe_on.png';
}
const image3 = document.querySelector('#pavesino [data-index="3"] img');
image3.addEventListener("mouseover", cambiapavesino3);
function ripristinapavesino3(event){
    const image3 = event.currentTarget;
    image3.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/caffe_off.png';
}
image3.addEventListener("mouseleave", ripristinapavesino3);



function cambiapavesino4(event){
    const image4 = event.currentTarget;
    image4.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/double_on.png';
}
const image4 = document.querySelector('#pavesino [data-index="4"] img');
image4.addEventListener("mouseover", cambiapavesino4);
function ripristinapavesino4(event){
    const image4 = event.currentTarget;
    image4.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/double_off.png';
}
image4.addEventListener("mouseleave", ripristinapavesino4);

//Nuova ricetta
function mostranuovaricetta(event){
    const image = document.createElement('img');
    const titolo=document.createElement('h2');
    const paragrafo=document.createElement('p');
    const link=document.createElement('a');
    const container=document.createElement('div');
    const span_scopri=document.createElement('span');
    const container_principale=document.createElement('div');

    image.src= "https://www.pavesini.it/wp-content/uploads/2023/09/tiramisu-alle-fragole-con-pavesini-listing.jpg";
    titolo.textContent='Tiramisù alle fragole';
    paragrafo.textContent='Tiramisù alle fragole con Pavesini: dolce goloso e rinfrescante';
    link.textContent='SCOPRI';
    link.href='https://www.pavesini.it/ricette/tiramisu-alle-fragole-con-pavesini/';

    const sezione = document.querySelector('#ricettadistagione');
    const contenitore = document.querySelectorAll('.descrizione');

    for(let i =0; i<3; i++ ){
      console.log(contenitore[i]);
      contenitore[i].classList.add('hidden');
    }

    sezione.appendChild(image);
    span_scopri.appendChild(link);
    container.appendChild(titolo);
    container.appendChild(paragrafo);
    container.appendChild(span_scopri);
    container_principale.appendChild(image);
    container_principale.appendChild(container);
    sezione.appendChild(container_principale);

    span_scopri.classList.add("button");
    container.classList.add('box');
    container_principale.classList.add('descrizione');

    button = event.currentTarget;
    button.removeEventListener('click', mostranuovaricetta);
    button.addEventListener('click', rimuoviricetta);
    button.textContent='Torna alle ricette'
}

function rimuoviricetta(event){

    const sezione = document.querySelectorAll('.descrizione');
    for(let i =0; i<3; i++ ){
      console.log(sezione[i]);
      sezione[i].classList.remove('hidden');
    }

    const ricetta = document.querySelector('#ricettadistagione');
    ricetta.innerHTML='';


    button = event.currentTarget;
    button.textContent='Ricetta di Stagione';
    button.addEventListener('click', mostranuovaricetta);
    button.removeEventListener('click', rimuoviricetta);
}


const innescodiv = document.querySelector('#nuovaricetta');
innescodiv.addEventListener('click', mostranuovaricetta);

//MENU
function showMenu(event){
const menu = document.querySelector('#showmenu');
menu.classList.remove('hidden');
const sez = document.querySelector('#centrale');
sez.classList.add('hidden');
event.currentTarget.removeEventListener('click', showMenu);
event.currentTarget.addEventListener('click', hideMenu);

}

const menu = document.querySelector('#menu');
menu.addEventListener('click', showMenu);

function hideMenu(event){
        const menu = document.querySelector('#showmenu');
        menu.classList.add('hidden');
        const sez = document.querySelector('#centrale');
        sez.classList.remove('hidden');
        event.currentTarget.removeEventListener('click',hideMenu);
        event.currentTarget.addEventListener('click',  showMenu);

}


//API KEY

function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }
  
  function onThumbnailClick(event) {
    console.log('ciaoThum');
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    const modalView = document.querySelector('#modal-view');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
    modalView.addEventListener('click', onModalClick);
    
  }
  
  function onModalClick() {
    const modalView = document.querySelector('#modal-view');
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
 

function OnJson(json){
    console.log('json ricevuto');
    console.log(json);

    const lunghezza=json.length;
    console.log(lunghezza);

    const id=encodeURIComponent(document.querySelector('#iniziale_id').value);
    console.log(id);

    let i;
    const libreria_ricette=document.querySelector('#visualizza_ricette');
    libreria_ricette.innerHTML='';
    let count=0;


    for(i=0;i<lunghezza;i++){
        const ricetta_corrente=json[i];
        if(ricetta_corrente.id===id){

            count++;
            console.log(ricetta_corrente);
            console.log('id corrispondente');

            const difficoltà =document.createElement('p');
            const image =document.createElement('img');
            const title =document.createElement('p');
            
            difficoltà.textContent='Difficoltà: '+ricetta_corrente.difficulty;
            image.src= ricetta_corrente.image;
            title.textContent = 'Ricetta: '+ricetta_corrente.title;
            
            const info = document.createElement('div');
            const container=document.createElement('div');

            info.appendChild(title);
            info.appendChild(difficoltà);
            container.appendChild(info);
            container.appendChild(image); 
            libreria_ricette.appendChild(container);
            
            info.classList.add('div_info')
            container.classList.add('div_sezione_ricette');
           
        image.addEventListener('click', onThumbnailClick);
            
        }
    }
    console.log(count);



    if(count===0){
        console.log('ciao');
        const mancanza=document.createElement('p');
        mancanza.textContent='Non ci sono ricette per questo numero';
        libreria_ricette.appendChild(mancanza);

    }
    

}

function onResponse(response){
    
    return response.json();
    
}

function search(event){
        // Impedisci il submit del form
        event.preventDefault(); //evita che la pagina si ricarichi quando clicco su submit

        // Leggi valore del campo di testo
        const id_input = document.querySelector('#iniziale_id'); // seleziono la casella di testo tramite il suo id
        const id_value = encodeURIComponent(id_input); // leggo il valore che scrivo nella casella di testo
        console.log('Eseguo ricerca: ' + id_value);

        // Prepara la richiesta
        const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                //10bfb373b4mshed0b8ca81278c3ep168629jsn059305903309 ->  key scaduta
                'X-RapidAPI-Key': 'c44044df1emsh49e6a11510756d5p166d8bjsn740945f6ff83',
                'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
            }
        };
        
        console.log('URL: ' + url);

        // Esegui fetch
        fetch(url, options).then(onResponse).then(OnJson);
      
      // Aggiungi event listener al form
      const form = document.querySelector('#cerca_ricetta');
      form.addEventListener('submit', search)
      
}     
      

const innesco_ricetta=document.querySelector('#cerca_ricetta');
innesco_ricetta.addEventListener('submit', search);


//API VIAGGIO

function clickItinerario(event){
    const itinerario = document.querySelector("#travel2");
    itinerario.classList.remove("hidden");
    const bottone = document.querySelector("#itinerario");
    bottone.classList.add("hidden")
    itinerario.removeEventListener('click', clickItinerario);
}



const itinerario = document.querySelector('#itinerario');
itinerario.addEventListener('click', clickItinerario);

function libera(event){
  event.currentTarget.innerHTML=''; 
}

function OnJson1(json){
    console.log('json ricevuto');
    console.log(json);

    const sezione=document.querySelector('#testo-view');
    sezione.innerHTML='';


    const day_1 = document.createElement('p');
    const day_2 = document.createElement('p');
    const day_3 = document.createElement('p');
    const day_4 = document.createElement('p');

    day_1.textContent = 'FIRST DAY: '+json.itineraryData.day1;
    day_2.textContent ='SECOND DAY: '+json.itineraryData.day2;
    day_3.textContent = 'THIRD DAY: '+json.itineraryData.day3;
    day_4.textContent = 'FOURTH DAY: '+json.itineraryData.day4;

    const container = document.createElement('div');
    container.classList.add("citta_container");

    
    container.appendChild(day_1);
    container.appendChild(day_2);
    container.appendChild(day_3);
    container.appendChild(day_4);

    sezione.appendChild(container);
    sezione.addEventListener('click', libera);
}

function onResponse1(response){
    
    return response.json();
    
}

function search1(event){
        // Impedisci il submit del form
        event.preventDefault(); //evita che la pagina si ricarichi quando clicco su submit

        // Leggi valore del campo di testo
        const testo_in = document.querySelector('#testo'); // seleziono la casella di testo tramite il suo id
        const city = encodeURIComponent(testo_in.value); // leggo il valore che scrivo nella casella di testo
        console.log('Eseguo ricerca: ' + city);

        // Prepara la richiesta
        const url = 'https://ai-vacation-planner.p.rapidapi.com/vacationplan/city/4/sightseeing,shopping';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'c44044df1emsh49e6a11510756d5p166d8bjsn740945f6ff83',
                'X-RapidAPI-Host': 'ai-vacation-planner.p.rapidapi.com'
            }
        };
        
        
      
        
        console.log('URL: ' + url);

        // Esegui fetch
        fetch(url, options).then(onResponse1).then(OnJson1);
      
      // Aggiungi event listener al form
      const form = document.querySelector('#travel');
      form.addEventListener('submit', search1)
      
}     
      

const innesco_ai=document.querySelector('#travel');
innesco_ai.addEventListener('submit', search1);

//SPOTIFY
function onJson3(json) {
    console.log('JSON ricevuto');
    console.log(json);
    // Svuotiamo la libreria
    const library = document.querySelector('#album-view');
    library.innerHTML = '';
    // Leggi il numero di risultati
    const results = json.albums.items;
    let num_results = results.length;
    // Mostriamone al massimo 10
    if(num_results > 10)
      num_results = 10;
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
      // Leggi il documento
      const album_data = results[i]
      // Leggiamo info
      const title = album_data.name;
      const selected_image = album_data.images[0].url;
      // Creiamo il div che conterrà immagine e didascalia
      const album = document.createElement('div');
      album.classList.add('album');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = selected_image;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(img);
      album.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library.appendChild(album);
    }
  }
  
  function onResponse3(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
  
  function search3(event)
  {
    // Impedisci il submit del form
    event.preventDefault();
    // Leggi valore del campo di testo
    const album_input = document.querySelector('#album');
    const album_value = encodeURIComponent(album_input.value);
    console.log('Eseguo ricerca: ' + album_value);
    // Esegui la richiesta
    fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
      {
        headers:
        {
          'Authorization': 'Bearer ' + token
        }
      }
    ).then(onResponse3).then(onJson3);
  }
  
  function onTokenJson(json)
  {
    console.log(json)
    // Imposta il token global
    token = json.access_token;
  }
  
  function onTokenResponse(response)
  {
    return response.json();
  }
  
  // OAuth credentials --- NON SICURO!
  const client_id = '8a4fbdc5ff0c4bf3a5ae0f7beffb8c20';
  const client_secret = 'e845d33595204ae48da523e1f060c692';
  // Dichiara variabile token
  let token;
  // All'apertura della pagina, richiediamo il token
  fetch("https://accounts.spotify.com/api/token",
      {
     method: "post",
     body: 'grant_type=client_credentials',
     headers:
     {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
     }
    }
  ).then(onTokenResponse).then(onTokenJson);
  // Aggiungi event listener al form
  const form = document.querySelector('#spotify');
  form.addEventListener('submit', search3)
