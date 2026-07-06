import{a as c,S as u,i}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function d(e){return(await c.get("https://pixabay.com/api/",{params:{key:"56574812-7e56c45bcaff458824f0ca6f0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery");let p=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8});function m(e){const r=e.map(a=>`<li class="gallery-item">
                <a href="${a.largeImageURL}">
                  <img class="gallery__image"
                       src="${a.webformatURL}"
                       alt="${a.tags}"
                       data-source="${a.largeImageURL}"
                       data-id="${a.id}">
                </a>
                <div class="description">
                  <p>Likes<span>${a.likes}</span></p>
                  <p>Views<span>${a.views}</span></p>
                  <p>Comments<span>${a.comments}</span></p>
                  <p>Downloads<span>${a.downloads}</span></p>
                </div>
            </li>`).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function f(){l.innerHTML=""}function y(){let e=document.querySelector(".loader");if(!e){e=document.createElement("div"),e.className="loader";const r=document.querySelector(".gallery");r.parentElement.insertBefore(e,r)}e.style.display="block"}function g(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const h=document.querySelector('[name="search-text"]'),L=document.querySelector(".form");document.querySelector(".gallery");L.addEventListener("submit",async e=>{e.preventDefault(),f();try{y();const r=h.value.trim();if(r==="")return;const a=await d(r);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(a.hits)}catch(r){i.error({message:r.message,position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
