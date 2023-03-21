window.addEventListener('load',getDataNasa);


function getDataNasa(){

    const NasaKey = '14DkdAOsAIst4bFrG9LhliQmdZllhLrwPKt5LcdP';
    const route = `https://api.nasa.gov/planetary/apod?api_key=${NasaKey}`;

    fetch(route)
    .then(response => response.json())
    .then(results => showData(results))

}

function showData({date,explanation,media_type,title,url}){
    const titulo = document.querySelector('#title');
    titulo.innerHTML = title;

    const fecha = document.querySelector('#date');
    fecha.innerHTML = date;

    const describe = document.querySelector('#describe');
    describe.innerHTML = explanation;
   

    const multimedia = document.querySelector('#c_multimedia');
    
    if(media_type == 'video'){
        multimedia.innerHTML= `<iframe class="embed-responsive-item" src="${url}"></iframe>`
    }
    else{

        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
    }
    

}   