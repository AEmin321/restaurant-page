import header from "./header";
import home from "./home";
import footer from "./footer";
import menu from "./menu";

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

    homeBtn.addEventListener('click',()=>handleHomeButton(mainDiv))
    menuBtn.addEventListener('click',()=>handleMenuButton(mainDiv))
    aboutBtn.addEventListener('click',()=>handleAboutButton())
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
    console.log ('handling e');
}