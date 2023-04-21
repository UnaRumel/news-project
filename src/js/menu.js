/*-----------------------Поява інпуту на мобільній версії при кліці на лупу--------------------------*/
const headerIconSearch = document.querySelector('.form-header__icon-search');
const headerInput = document.querySelector('.form-header__input');
const pagination = document.querySelector('.pagination');
const currentPage = window.location.pathname;

const homeLink = document.getElementById('home__link');
const favoriteLink = document.getElementById('favorite__link');
const readLink = document.getElementById('read__link');
if (
  !currentPage.includes('/index.html') &&
  !currentPage.includes('/read.html') &&
  !currentPage.includes('/favorite.html')
) {
  currentPage.includes('/index.html');
}
headerIconSearch.addEventListener('click', onHeaderIconSearchClick);

function onHeaderIconSearchClick() {
  if (document.documentElement.clientWidth < 768) {
    headerInput.classList.toggle('leaving-input');
    headerIconSearch.style.position = 'absolute';
    headerIconSearch.style.top = '5px';
    headerIconSearch.style.left = '14px';
  }
  if (!headerInput.classList.contains('leaving-input')) {
    headerIconSearch.style.position = '';
  }
}

/*-----------------------------------------------Темна тема-----------------------------------------*/
const checkbox = document.querySelector('.form-header__checkbox');
const checkboxInput = document.querySelector('.checkbox-header__input');
const headerIconSun = document.querySelector('.form-header__icon-sun');
const headerIconMoon = document.querySelector('.form-header__icon-moon');
const headerDark = document.querySelector('.form-header__dark');
const headerLight = document.querySelector('.form-header__light');
const iconMobMenu = document.querySelector('.icon-mob-menu');
const header = document.querySelector('.header');
const searchClearBtn = document.getElementById('searchClear');
const mob = document.querySelector('.mob-menu__checkbox-input');
const menu = document.querySelector('.mob-nav-menu');
const sun = document.querySelector('.mob-icon-sun');
const mobMoon = document.querySelector('.mob-icon-moon');
const btnMenu = document.querySelector('.button-menu__icon-close');
const iconFooter = document.querySelector('.footer__svg-globe');
const accordionContainer = document.querySelector('.container-read');
const accordions = document.querySelectorAll('.accordion');

const calendarInputEl = document.querySelector('.calendar__input');

if (
  currentPage.includes('/read.html') &&
  localStorage.getItem('read-more') !== '[]' &&
  accordionContainer !== null
) {
  accordionContainer.addEventListener('click', onContantValueClick);

  function onContantValueClick(event) {
    const targetAccordion = event.target.closest('.accordion');
    if (!targetAccordion) {
      return;
    }

    const accStyle = getComputedStyle(targetAccordion, '::after');
    const transformValue = accStyle.getPropertyValue('transform');
    if (transformValue === 'matrix(1, 0, 0, 1, 0, 0)') {
      targetAccordion.style.setProperty('--rotate', 'rotate(180deg)');
    } else {
      targetAccordion.style.setProperty('--rotate', 'rotate(0deg)');
    }
  }
}

checkboxInput.addEventListener('change', onCheckBoxClick);
mob.addEventListener('change', onMobClick);

function addDarkMode() {
  document.body.classList.add('body--dark');
  headerIconSun.classList.add('form-header__icon-sun--dark');
  headerIconMoon.classList.add('form-header__icon-moon--dark');
  headerDark.classList.add('form-header__dark--dark');
  headerLight.classList.add('form-header__light--dark');
  headerInput.classList.add('form-header__input--dark');
  headerIconSearch.classList.add('form-header__icon-search--dark');
  iconMobMenu.classList.add('icon-mob-menu--dark');
  header.classList.add('header--dark');
  searchClearBtn.classList.add('search__clear--dark');
  menu.classList.add('mob-nav-menu--dark');
  sun.classList.add('mob-icon-sun--dark');
  mobMoon.classList.add('mob-icon-moon--dark');
  iconFooter.classList.add('icon__web--dark');
  if (
    currentPage.includes('/read.html') &&
    localStorage.getItem('read-more') !== '[]' &&
    accordions !== null
  ) {
    accordions.forEach(accordion => {
      accordion.classList.add('accordion--dark');
    });
  }
  if (currentPage.includes('/index.html')) {
    calendarInputEl.classList.add('calendar__input--dark');
  }
}

function removeDarkMode() {
  document.body.classList.remove('body--dark');
  headerIconSun.classList.remove('form-header__icon-sun--dark');
  headerIconMoon.classList.remove('form-header__icon-moon--dark');
  headerDark.classList.remove('form-header__dark--dark');
  headerLight.classList.remove('form-header__light--dark');
  headerInput.classList.remove('form-header__input--dark');
  headerIconSearch.classList.remove('form-header__icon-search--dark');
  iconMobMenu.classList.remove('icon-mob-menu--dark');
  header.classList.remove('header--dark');
  searchClearBtn.classList.remove('search__clear--dark');
  menu.classList.remove('mob-nav-menu--dark');
  sun.classList.remove('mob-icon-sun--dark');
  mobMoon.classList.remove('mob-icon-moon--dark');
  btnMenu.classList.add('button-menu__icon-close--dark');
  iconFooter.classList.remove('icon__web--dark');
  if (
    currentPage.includes('/read.html') &&
    localStorage.getItem('read-more') !== '[]' &&
    accordions !== null
  ) {
    accordions.forEach(accordion => {
      accordion.classList.remove('accordion--dark');
    });
  }
  if (currentPage.includes('/index.html')) {
    calendarInputEl.classList.remove('calendar__input--dark');
  }
}

function setDarkMode(isDarkMode) {
  if (isDarkMode) {
    addDarkMode();
    checkboxInput.checked = true;
    mob.checked = true;
  } else {
    removeDarkMode();
    checkboxInput.checked = false;
    mob.checked = false;
  }

  localStorage.setItem('isDarkMode', isDarkMode);
}

function onCheckBoxClick() {
  const isDarkMode = checkboxInput.checked;
  setDarkMode(isDarkMode);
}

const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
setDarkMode(isDarkMode);

/*-----------------------------------------------Темна тема мобільне меню-----------------------------------*/

// const iconMobMenu = document.querySelector('.icon-mob-menu');

function onMobClick() {
  const isDarkModeMob = mob.checked;
  if (isDarkModeMob) {
    addDarkMode();
    checkboxInput.checked = true;
  } else {
    checkboxInput.checked = false;
    removeDarkMode();
  }
  mob.setAttribute('checked', 'checked');
  localStorage.setItem('isDarkMode', isDarkModeMob);
}

const isDarkModeMob = JSON.parse(localStorage.getItem('isDarkMode'));

if (isDarkModeMob) {
  mob.checked = true;
  checkboxInput.checked = true;
  addDarkMode();
} else {
  mob.checked = false;
  checkboxInput.checked = false;
  removeDarkMode();
}

/*------------------------------Отримання данних знахлдження користувача на сторінці та навігація по хедеру------------------*/

if (currentPage.includes('/index.html')) {
  homeLink.classList.add('current');
} else if (currentPage.includes('/favorite.html')) {
  favoriteLink.classList.add('current');
} else if (currentPage.includes('/read.html')) {
  readLink.classList.add('current');
} else {
  homeLink.classList.add('current');
}

/*----------------------------------------------------------Пошук по слову----------------------------------------*/
const headerForm = document.querySelector('.form-header');
const newsWrapper = document.querySelector('.list-news');
const emptyPage = document.querySelector('.empty');
const weatherCard = document.querySelector('.weather-card');
headerForm.addEventListener('submit', onHeaderFormClick);

const KEY = 'Oibsmafk4s4CtvFNxqESgOWZuCdEVskz';
function fetchNews(searchKeyword, pubDate) {
  return fetch(`
  https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}&q=${searchKeyword}&fq=pub_date:(${pubDate})`).then(
    res => {
      if (res.status === 404) {
        throw new Error(res.status);
      }
      return res.json();
    }
  );
}

function onHeaderFormClick(event) {
  event.preventDefault();
  window.scrollTo(0, 0); //! перемецение в начало экрана
  pagination.style.display = 'none'; //! скрыть пагинацию
  const searchKeyword = headerInput.value.trim();

  if (currentPage.includes('/index.html')) {
    const dateCalendarInput =
      document.querySelector('.calendar__input').dataset.date;

    const dateParts = dateCalendarInput.split('.');

    const dateSearch = `${dateParts[2]}-${dateParts[1].padStart(
      2,
      '0'
    )}-${dateParts[0].padStart(2, '0')}`;

    if (searchKeyword === '') {
      clear();
      emptyPage.style.display = 'block';
      weatherCard.style.display = 'none';
      pagination.style.display = 'none';
    } else {
      const pubDate = dateSearch;
      fetchNews(searchKeyword, pubDate)
        .then(data => {
          if (!data.response.docs.length) {
            pagination.style.display = 'none';
            emptyPage.style.display = 'block';
            weatherCard.style.display = 'none';
            newsWrapper.innerHTML = '';
          } else {
            // pagination.style.display = 'block'; //! не нужна пагинация
            emptyPage.style.display = 'none';
            weatherCard.style.display = 'block';
            const articles = data.response.docs.slice(0, 9);

            newsWrapper.innerHTML = articles
              .map(article => {
                const headline = article.headline.main;
                const MAX_SNIPPET_LENGTH = 110;
                let snippet = article.lead_paragraph;
                if (snippet.length > MAX_SNIPPET_LENGTH) {
                  snippet = snippet.slice(0, MAX_SNIPPET_LENGTH - 3) + '...';
                }
                const articleUrl = article.web_url;

                const date = new Date(article.pub_date);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear().toString();
                const formattedDate = `${day}/${month}/${year}`;
                const id = article._id;

                const section = article.section_name;
                const imageUrl =
                  article.multimedia.length > 0
                    ? `https://www.nytimes.com/${article.multimedia[0].url}`
                    : 'https://source.unsplash.com/featured/?nature';

                return `<li class="list-news__item" data-id="${id}">
  <article class="item-news__article">
       <div class="item-news__wrapper-img">
 <img class="item-news__img" src="${imageUrl}" alt="photo">
<p class="item-news__category">${section}</p>
<div class="article_flag">
                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>
                  </button>
                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="#4b48da" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>
                  </button>
                </div>
         </div>
         <h2 class="item-news__title">${headline}</h2>
         <p class="item-news__description">${snippet}</p>
         <div class="item-news__info">
           <span class="item-news__info-date">${formattedDate}</span>
           <a class="item-news__info-link" href="${articleUrl}" target="_blank" rel="noreferrer noopener">Read more</a>
         </div>
       </article>
     </li>`;
              })
              .join('');

            localStorage.setItem(
              'nytimesNews',
              JSON.stringify(data.response.docs)
            );
          }
        })
        .catch(error => console.log(error));
    }
  }
}

function clear() {
  newsWrapper.innerHTML = '';
}

/*-------------------------------------------------------Добавляє хрестик в інпуті для видалення інформації-----------------------------*/
const searchClear = document.getElementById('searchClear');
headerInput.addEventListener('input', () => {
  if (headerInput.value && document.documentElement.clientWidth > 768) {
    searchClear.style.display = 'block';
  } else {
    searchClear.style.display = 'none';
  }
});

searchClear.addEventListener('click', () => {
  headerInput.value = '';
  searchClear.style.display = 'none';
});
