// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";




const form = document.querySelector('.formForSearch');
const input = form.querySelector('.inputForSearch');
const button = form.querySelector('.btnForSearch');
const boxForContent = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a.lightbox');
const loader = document.querySelector('.loader');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = input.value.trim();
    showLoader();
    if (searchTerm !== "") {
        searchImages(searchTerm);
    } else {
         iziToast.error({
         title: 'Error',
         message: 'Please enter a search term.',  
    });
    hideLoader();
    }
    
})



async function searchImages(query) {
    const API_KEY = "41507262-89b1b811a4183d0df8899cf35";
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const dataFromServer = await response.json();
        if (dataFromServer.hits.length > 0) {
            iziToast.success({
                title: 'OK',
               message: 'We were able to fetch some data.!',
               });
               displayImages(dataFromServer.hits);
               lightbox.refresh();
            
        }else{
            iziToast.info({
                title: 'Info',
                message: 'Sorry, there are no images matching your search query. Please try again.',
              });
        }

    } catch (error) {
         iziToast.error({
         title: 'Error',
         message: 'Sorry, An error occurred while fetching images, Please try again later.',
    });
    } finally{
        hideLoader();
    }
    
}

function displayImages(images){
    boxForContent.innerHTML = "";

    const newContent = images.map(e=>{
        return  `<div class="gallery-item">
        <a href="${e.largeImageURL}" class="lightbox" data-lightbox="gallery">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
            <div class="stat">
                <h3>Likes</h3>
                <p>${e.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${e.views }</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${e.comments }</p><p></p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${e.downloads }</p>
            </div>
        </div>
        </div>`;
    }).join('');
    boxForContent.insertAdjacentHTML('beforeend', newContent);
     

}



function showLoader() {
    loader.style.display = 'block'
}

function hideLoader() {
    loader.style.display = 'none';
}