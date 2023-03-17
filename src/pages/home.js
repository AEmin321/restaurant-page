import heroImage from '../asset/hero.png';

const getContent=document.querySelector('.container');

export default function (title,pText) {
    const createMainDiv=document.createElement('div');
    createMainDiv.classList.add('main');
    createMainDiv.innerHTML=`<div class="hero-text-wrapper"><div class="hero-title">${title}</div>
    <div class="hero-paragraph">${pText}</div>
    <button class="hero-btn">View Menu >></button></div>
    <div class="hero-wrapper"><img class="hero-img" src="${heroImage}" alt="hero image of foods."/></div>`;
    getContent.appendChild(createMainDiv);
}