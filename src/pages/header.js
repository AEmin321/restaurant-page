const container =document.querySelector('.container');

export default function setHeader () {
    const headerDiv=document.createElement('div');
    headerDiv.classList.add('header');

    const headerTitle=document.createElement('div');
    headerTitle.classList.add ('header-title');
    headerTitle.textContent='Lorem Restaurant';

    const btnsDiv=document.createElement('div');
    btnsDiv.classList.add('btns-wrapper');
    btnsDiv.appendChild(homeButton());
    btnsDiv.appendChild(menuButton());
    btnsDiv.appendChild(aboutButton());

    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(btnsDiv);
    container.appendChild(headerDiv);
}

function homeButton () {
    const createHomeBtn=document.createElement('div');
    createHomeBtn.classList.add('home-btn');
    createHomeBtn.textContent='Home';
    return createHomeBtn;
}

function menuButton () {
    const createMenuBtn=document.createElement('div');
    createMenuBtn.classList.add('menu-btn');
    createMenuBtn.textContent='Menu';
    return createMenuBtn;
}

function aboutButton () {
    const createAboutBtn=document.createElement('div');
    createAboutBtn.classList.add('about-btn');
    createAboutBtn.textContent='About';
    return createAboutBtn;
}