window.addEventListener('load',getDataNasa);


function getDataNasa(){

    const NasaKey = '14DkdAOsAIst4bFrG9LhliQmdZllhLrwPKt5LcdP';
    const dateInput = document.querySelector('#date');
    const date = dateInput.value;

    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('max', today);

   
    const route = `https://api.nasa.gov/planetary/apod?api_key=${NasaKey}&date=${date}`;
  

    fetch(route)
    .then(response => response.json())
    .then(results => showData(results))
    

}

function showData({date,explanation,media_type,title,url}){
    const titulo = document.querySelector('#title');
    titulo.innerHTML = title;

   

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

const updateBtn = document.querySelector('#newData');
updateBtn.addEventListener('click', getDataNasa);


  
  