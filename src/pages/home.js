import heroImage from '../asset/hero.png';



export default function (title,pText) {
    const mainDiv=document.querySelector('.main');
    mainDiv.innerHTML=`<div class="hero-text-wrapper"><div class="hero-title">${title}</div>
    <div class="hero-paragraph">${pText}</div>
    <button class="hero-btn">View Menu >></button></div>
    <div class="hero-wrapper"><img class="hero-img" src="${heroImage}" alt="hero image of foods."/></div>`;
    // getContent.appendChild(createMainDiv);
}