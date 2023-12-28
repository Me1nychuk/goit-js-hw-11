import{S as f,i}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".formForSearch"),m=l.querySelector(".inputForSearch");l.querySelector(".btnForSearch");const c=document.querySelector(".gallery");let h=new f(".gallery a.lightbox");const d=document.querySelector(".loader");l.addEventListener("submit",function(a){a.preventDefault();const o=m.value.trim();p(),o!==""?y(o):(i.error({title:"Error",message:"Please enter a search term."}),u())});async function y(a){const t=`https://pixabay.com/api/?key=41507262-89b1b811a4183d0df8899cf35&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await fetch(t);if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);const e=await s.json();e.hits.length>0?(i.success({title:"OK",message:"We were able to fetch some data.!"}),g(e.hits),h.refresh()):i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."})}catch{i.error({title:"Error",message:"Sorry, An error occurred while fetching images, Please try again later."})}finally{u()}}function g(a){c.innerHTML="";const o=a.map(t=>`<div class="gallery-item">
        <a href="${t.largeImageURL}" class="lightbox" data-lightbox="gallery">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        </a>
        <div class="info">
            <div class="stat">
                <h3>Likes</h3>
                <p>${t.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${t.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${t.comments}</p><p></p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${t.downloads}</p>
            </div>
        </div>
        </div>`).join("");c.insertAdjacentHTML("beforeend",o)}function p(){d.style.display="block"}function u(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
