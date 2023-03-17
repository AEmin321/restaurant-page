const container=document.querySelector('body');

export default function footer () {
    const createFooter=document.createElement('footer');
    createFooter.textContent='© Amini 2023';
    container.appendChild(createFooter);
}