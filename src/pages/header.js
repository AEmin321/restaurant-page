const container =document.querySelector('.container');

export default function setHeader () {
    const headerDiv=document.createElement('div');
    headerDiv.classList.add('header');

    const headerTitle=document.createElement('div');
    headerTitle.classList.add ('header-title');
    headerTitle.textContent='Lorem Restaurant';

    const btnsDiv=document.createElement('div');
    btnsDiv.classList.add('btns-wrapper');
    btnsDiv.appendChild(createButton('home-btn','Home'));
    btnsDiv.appendChild(createButton('menu-btn','Menu'));
    btnsDiv.appendChild(createButton('about-btn','About'));

    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(btnsDiv);
    container.appendChild(headerDiv);
}

function createButton (className,txtContent) {
    const createBtn=document.createElement('div');
    createBtn.classList.add(className);
    createBtn.textContent=txtContent;
    return createBtn;
}