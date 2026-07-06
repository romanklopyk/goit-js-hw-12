import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const $gallery = document.querySelector('.gallery');


let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  overlayOpacity: 0.8,
});

function createGallery(images){
  // const arrOfImg = images.hits;
  const res =  images.map (obj =>{
    return `<li class="gallery-item">
                <a href="${obj.largeImageURL}">
                  <img class="gallery__image"
                       src="${obj.webformatURL}"
                       alt="${obj.tags}"
                       data-source="${obj.largeImageURL}"
                       data-id="${obj.id}">
                </a>
                <div class="description">
                  <p>Likes<span>${obj.likes}</span></p>
                  <p>Views<span>${obj.views}</span></p>
                  <p>Comments<span>${obj.comments}</span></p>
                  <p>Downloads<span>${obj.downloads}</span></p>
                </div>
            </li>`
  }).join('');

  $gallery.insertAdjacentHTML('beforeend', res);
  gallery.refresh();
}

function clearGallery(){
   $gallery.innerHTML = '';
}

function showLoader() {
  let loader = document.querySelector('.loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.className = 'loader';
    const $gallery = document.querySelector('.gallery');
    $gallery.parentElement.insertBefore(loader, $gallery);
  }
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.style.display = 'none';
}

export {createGallery, clearGallery, showLoader, hideLoader};