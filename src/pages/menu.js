import itemImage from '../asset/hero.png';


const menuItems=[
    {
        name:"alksjd",
        details:"asdlfkjlk",
        price:32
    },
    {
        name:"alksdj",
        details:"asdlfkjlk",
        price:22
    },
    {
        name:"alkj",
        details:"asdlfkjlk",
        price:23
    }
];

export default function populateMenu () {
    const mainDiv=document.querySelector('.main');
    menuItems.forEach((item)=>{
        const cardDiv=document.createElement('div');
        const cardImg=document.createElement('img');
        const cardTitle=document.createElement('div');
        const cardParagraph=document.createElement('p');
        const cardPrice=document.createElement('div');

        cardImg.src=itemImage;
        cardTitle.textContent=item.name;
        cardParagraph.textContent=item.details;
        cardPrice.textContent=item.price;

        cardDiv.classList.add('card');
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardParagraph);
        cardDiv.appendChild(cardPrice);
        mainDiv.appendChild(cardDiv);
    })
}