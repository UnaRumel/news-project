!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=r);var o,i=r("bpxeT"),s=r("2TvXO"),c=r("dIxxU"),l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},d=new Uint8Array(16);function u(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(d)}for(var m=[],g=0;g<256;++g)m.push((g+256).toString(16).slice(1));function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase()}var v=function(t,e,n){if(l.randomUUID&&!e&&!t)return l.randomUUID();var a=(t=t||{}).random||(t.rng||u)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return p(a)},f="AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz",y="https://api.nytimes.com/svc/",h="news/v3/content/all/",b="https://api.nytimes.com/svc/news/v3/content/section-list.json?",_=document.querySelector(".mobile_category_menu"),L=document.querySelector(".category_list"),w=document.querySelector(".dropdown"),k=document.querySelector(".dropdown_content"),x=document.querySelector(".mobile_category_list"),S=document.querySelector(".category_btn"),E=document.querySelector(".mobile_category_btn"),q=document.querySelector(".category_mob_icon"),C=document.querySelector(".mob-btn-span"),T=document.querySelector(".category_icon"),M=document.querySelector(".list-news"),A=document.querySelector(".empty"),U=document.querySelector(".checkbox-header__input"),j=document.querySelector(".mob-menu__checkbox-input"),N=document.querySelector(".weather-card"),D=document.querySelector(".calendar__input"),H=document.querySelector(".next-page"),I=document.querySelector(".prev-page");I.disabled=!0;var O="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";x.classList.remove("category_hidden"),x.classList.add("category_mobile_hidden");var R=0,B=0;function V(){return(V=t(i)(t(s).mark((function e(n){var a,r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(y).concat(h).concat(n,".json?api-key=").concat(f,"&limit=").concat(R,"&offset=").concat(B),t.next=4,c.default.get(a);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),M.innerHTML="",A.style.display="block",N.style.display="none";case 14:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function z(){return(z=t(i)(t(s).mark((function e(){var n,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(b,"api-key=").concat(f),t.next=4,c.default.get(n);case 4:return a=t.sent,t.abrupt("return",a.data);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function F(t){var e=t.composedPath().includes(_);e||x.classList.contains("category_mobile_hidden")||"Categories"!==C.textContent?e||"Categories"===C.textContent||(x.classList.add("category_mobile_hidden"),q.classList.remove("rotate"),document.removeEventListener("click",F)):(x.classList.add("category_mobile_hidden"),E.classList.remove("is-active-category-btn"),q.classList.remove("rotate"),document.removeEventListener("click",F))}function P(t){var e=t.section,n=t.display_name;return'\n  <li>\n  <button class="cat-menu-btn" type="button" data-section="'.concat(e,"\" data-name='").concat(n,"'> ").concat(n,"</button>\n  </li>\n  ")}function K(t,e,n){var a=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){i.value.classList.toggle("dark-categories-btn")}}catch(t){r=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}e.classList.toggle("dark-categories-btn"),n.classList.toggle("dark-categories-btn")}function Y(t){var e=t.composedPath().includes(w);e||S.classList.contains("has-active-button-inside")?!e&&S.classList.contains("has-active-button-inside")&&(k.classList.add("category_hidden"),S.classList.add("is-active-other-btn"),T.classList.remove("rotate"),document.removeEventListener("click",Y)):(k.classList.add("category_hidden"),S.classList.remove("is-active-other-btn"),T.classList.remove("rotate"),document.removeEventListener("click",Y))}window.matchMedia("(max-width: 767.98px)").matches?R=4:window.matchMedia("(min-width: 1280px)").matches?R=9:window.matchMedia("(min-width: 768px)").matches&&(R=8),E.addEventListener("click",(function(t){x.classList.toggle("category_mobile_hidden"),document.addEventListener("click",F),"Categories"===C.textContent?(E.classList.toggle("is-active-category-btn"),q.classList.toggle("rotate")):q.classList.toggle("rotate")})),x.addEventListener("click",(function(t){if("BUTTON"!==t.target.tagName)return;var e=t.target.dataset.section,n=t.target.dataset.name;x.classList.add("category_mobile_hidden"),E.classList.add("is-active-category-btn"),q.classList.remove("rotate"),q.style.fill="white",null!=n&&n.length<11?C.textContent=n:C.textContent="".concat(n.substring(0,9),"...");X(e)})),function(){return z.apply(this,arguments)}().then((function(t){var e=t.results,n=e.reduce((function(t,e){return t+P(e)}),"");x.insertAdjacentHTML("beforeend",n);var a=e.splice(0,6),r=e,o=a.reduce((function(t,e){return t+P(e)}),""),i=r.reduce((function(t,e){return t+P(e)}),"");L.insertAdjacentHTML("afterbegin",o),k.insertAdjacentHTML("beforeend",i);var s=document.querySelectorAll(".cat-menu-btn");if(JSON.parse(localStorage.getItem("isDarkMode"))){var c=!0,l=!1,d=void 0;try{for(var u,m=s[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){u.value.classList.add("dark-categories-btn")}}catch(t){l=!0,d=t}finally{try{c||null==m.return||m.return()}finally{if(l)throw d}}S.classList.add("dark-categories-btn"),E.classList.add("dark-categories-btn")}U.addEventListener("click",(function(){K(s,S,E)})),j.addEventListener("click",(function(){K(s,S,E)}))})),S.addEventListener("click",(function(t){k.classList.toggle("category_hidden"),T.classList.toggle("rotate"),S.classList.toggle("is-active-other-btn"),document.addEventListener("click",Y)})),L.addEventListener("click",(function(t){if(t.target.classList.contains("category_btn")||t.target.classList.contains("desk-btn-span")||t.target.classList.contains("category_icon")||"BUTTON"!==t.target.tagName)return;k.classList.contains("category_hidden")||(k.classList.add("category_hidden"),T.classList.remove("rotate"));var e=document.querySelector(".is-active-category-btn");e&&(e.classList.remove("is-active-category-btn"),S.classList.remove("is-active-other-btn"),S.classList.remove("has-active-button-inside"));t.composedPath().includes(k)?(t.target.classList.add("is-active-category-btn"),S.classList.add("is-active-other-btn"),S.classList.add("has-active-button-inside")):t.target.classList.add("is-active-category-btn");document.removeEventListener("click",Y);var n=t.target.dataset.section;B=0,X(n),H.addEventListener("click",(function(){!function(t){B+=R,I.disabled=!1,X(t),G()}(n)})),I.addEventListener("click",(function(){!function(t){0===(B-=R)&&(I.disabled=!0);X(t),G()}(n)}))})),M.addEventListener("click",(function(t){if("A"===t.target.nodeName){t.target.setAttribute("data-is-read",!0);var e=t.target.parentElement.parentElement.parentElement,n=document.createElement("p");n.innerText="Already read",n.classList.add("have-read"),e.appendChild(n);e.getAttribute("data-id")}}));var Z={attributes:!0,attributeFilter:["data-date"]},J=new MutationObserver((function(t,e){var n=D.dataset.date.split(".").join("/");N.style.display="none",Array.prototype.slice.call(M.childNodes).filter((function(t){return t.dataset.pub_date===n})).length>0?M.childNodes.forEach((function(t){t.dataset.pub_date!==n?t.style.display="none":t.style.display="block"})):(M.childNodes.forEach((function(t){return t.style.display="none"})),M.insertAdjacentHTML("afterbegin",'<li style="margin:0 auto"><img src="'.concat("https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif",'" alt="no news"></img></li>')))}));function X(t){(function(t){return V.apply(this,arguments)})(t).then((function(t){var e=t.results,n=t.num_results;if(null===e)M.innerHTML="",A.style.display="block",N.style.display="none";else{var a=e.reduce((function(t,e){return t+function(t){var e,n=t.title,a=t.multimedia,r=t.section,o=t.abstract,i=t.published_date,s=t.url,c=v(),l=(null==a||null===(e=a[2])||void 0===e?void 0:e.url)||O,d=110;o.length>d&&(o=o.slice(0,d-3)+"...");var u=new Date(i),m=u.getDate().toString().padStart(2,"0"),g=(u.getMonth()+1).toString().padStart(2,"0"),p=u.getFullYear().toString(),f="".concat(m,"/").concat(g,"/").concat(p);return'<li class="list-news__item" data-id="'.concat(c,'" data-pub_date="').concat(f,'" >\n            <article class="item-news__article">\n              <div class="item-news__wrapper-img">\n                <img class="item-news__img" src="').concat(l,'" alt="photo">\n                <p class="item-news__category">').concat(r,'</p>\n                <div class="article_flag">\n                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="#4b48da" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                </div>\n              </div>\n              <h2 class="item-news__title">').concat(""===n?"Title not found":n,'</h2>\n              <p class="item-news__description">').concat(""===o?"Description not found":o,'</p>\n              <div class="item-news__info">\n                <span class="item-news__info-date">').concat(f,'</span>\n                <a class="item-news__info-link" href="').concat(s,'" target="_blank" rel="noreferrer noopener">Read more</a>\n              </div>\n            </article>\n          </li>')}(e)}),"");A.style.display="none",N.style.display="block",M.innerHTML=a,H.disabled=n-450<B,J.observe(D,Z)}}))}function G(){var t=M.firstElementChild.getBoundingClientRect().height;console.log(t),window.scrollBy({top:-4*t,behavior:"smooth"})}}();
//# sourceMappingURL=index.643d47e5.js.map