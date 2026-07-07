import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreBtn,
    hideLoadMoreBtn,
} from './js/render-functions.js';


const $input = document.querySelector('[name="search-text"]');
const $form = document.querySelector('.form');
const $loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let query = '';
let totalPages = null;

$form.addEventListener('submit', async (e) => {
    e.preventDefault();

    query = $input.value.trim();
    if (query === '') return;

    page = 1;

    clearGallery();
    hideLoadMoreBtn($loadMoreBtn);

    try {
        showLoader();
        const res = await getImagesByQuery(query, page);
        if (res.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }
        totalPages = Math.ceil(res.totalHits / res.perPage);

        createGallery(res.hits);

        if (page < totalPages) {
            showLoadMoreBtn($loadMoreBtn);
        }
        else {
            iziToast.info({
                message: 'We\'re sorry, but you\'ve reached the end of search results.',
                position: 'topRight',
            })
        }

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

$loadMoreBtn.addEventListener('click', async () => {
    page++;
    hideLoadMoreBtn($loadMoreBtn);
    try {
        showLoader();
        const res = await getImagesByQuery(query, page);
        if (res.hits.length === 0) {
            iziToast.info({
                message: 'We\'re sorry, but you\'ve reached the end of search results.',
                position: 'topRight',
            });
            hideLoadMoreBtn($loadMoreBtn);
            return;
        }
        createGallery(res.hits);

        const $galleryItem = document.querySelector('.gallery-item');
        if ($galleryItem) {
            const cardHeight = $galleryItem.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth',
            });
        }

        if (page < totalPages) {
            showLoadMoreBtn($loadMoreBtn);
        }
        else {
            iziToast.info({
                message: 'We\'re sorry, but you\'ve reached the end of search results.',
                position: 'topRight',
            })
        }
    }
    catch (e){
        iziToast.error({
            message: e.message,
            position: 'topRight',
        });

    }
    finally {
        hideLoader();
    }
})


