import Navbar from '../../utilities/menu.js';

const initApp = () => {
  new Navbar();
};

initApp();

fetch('../../data/hotel.json')
    .then(res => res.json())
    .then(dagar => {
        const container = document.querySelector('.info-container');

        dagar.forEach((rubrik, index) => {

            const html = `
            <section class="info">
            <h2>${rubrik.rubrik}</h2>
            <div class="content">
                ${rubrik.innehåll.map(i =>`
                    <p class="punkt"> <span class="material-symbols-outlined">favorite</span> ${i.punkt}</p>
                    `).join('')}
            </div>
            </section>
            `;
            
            container.insertAdjacentHTML('beforeend', html);
        });
    });