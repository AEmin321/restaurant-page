import header from "./header";
import home from "./home";
import footer from "./footer";
import menu from "./menu";
import about from "./about";

const heroTitle="Welcome to Lorem Restaurant";
const heroParagraph="Qui omnis molestiae qui harum totam et dolorem atque At error nihil est obcaecati tempore.";

export default function initialPage () {
    const createMainDiv=document.createElement('div');
    createMainDiv.classList.add('main');
    const getContent=document.querySelector('.container');
    header();
    getContent.appendChild(createMainDiv);
    home(heroTitle,heroParagraph);
    handleBtnClick();
    footer();
}

function handleBtnClick () {
    const mainDiv=document.querySelector('.main');
    const homeBtn=document.querySelector('.home-btn');
    const menuBtn=document.querySelector('.menu-btn');
    const aboutBtn=document.querySelector('.about-btn');

    homeBtn.addEventListener('click',()=>{
        handleHomeButton(mainDiv);
        homeBtn.classList.add('btn-active');
        menuBtn.classList.remove('btn-active');
        aboutBtn.classList.remove('btn-active');
    })
    menuBtn.addEventListener('click',()=>{
        handleMenuButton(mainDiv);
        homeBtn.classList.remove('btn-active');
        menuBtn.classList.add('btn-active');
        aboutBtn.classList.remove('btn-active');
    })
    aboutBtn.addEventListener('click',()=>{
        handleAboutButton(mainDiv);
        homeBtn.classList.remove('btn-active');
        menuBtn.classList.remove('btn-active');
        aboutBtn.classList.add('btn-active');
    })
}

function handleHomeButton (mainDiv) {
    mainDiv.innerHTML='';
    home(heroTitle,heroParagraph);
}

function handleMenuButton(mainDiv) {
    mainDiv.innerHTML='';
    menu();
}

function handleAboutButton(mainDiv) {
    mainDiv.innnerHTML='';
    about();
}