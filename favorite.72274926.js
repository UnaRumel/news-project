var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var r=i("hbtSd");i("auIM8");new(0,r.default);const o=document.querySelector("#favorite__news");let a=localStorage.getItem("favorite");if(a&&a.length){const e=JSON.parse(a).map((e=>e.markup)).join("");o.innerHTML=e}o&&o.addEventListener("click",(function(e){if(!e.target.parentNode.classList.contains("item-news__add-to-favorite"))return;const t=e.target.closest(".list-news__item").dataset.id;e.target.closest(".item-news__add-to-favorite").classList.toggle("hidden-span");const n=a.findIndex((e=>e.id===t));if(a.splice(n,1),localStorage.setItem("favorite",JSON.stringify(a)),a.length){const e=a.map((e=>e.markup)).join("");o.innerHTML=e}else o.innerHTML='<section class="background">\n    <div class="favorite-container container">     \n        <p class="background___title">We haven\'t found news from this category</p>\n        <picture>\n\n          <img class="background___picture" src="https://i.ibb.co/cFdrWFz/desktop.png" alt="background-picture" width="248" height="198">\n        </picture>      \n    </div>\n  </section>'})),a=JSON.parse(a);
//# sourceMappingURL=favorite.72274926.js.map
