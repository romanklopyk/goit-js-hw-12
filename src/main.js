import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';


const $input = document.querySelector('[name="search-text"]');
const $form = document.querySelector('.form');
const $gallery = document.querySelector('.gallery');


$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearGallery();
  try {
    showLoader();
    const query = $input.value.trim();
    if (query === '') return;
    const res = await getImagesByQuery(query);
    if (res.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(res.hits);
  } catch (e) {
    // console.log(e);
    iziToast.error({
      message: e.message,
      position: 'topRight',
    });

  } finally {
    hideLoader();
  }
});


