import { navbar } from "../../utilities/menu.js";

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
};

initApp();

fetch('../../data/schema.json')
    .then(res => res.json())
    .then(dagar => {
        const container = document.querySelector('.schema-container');

        dagar.forEach((dag, index) => {
            const id = `toggle-text${index +1}`;

            const html = `
            <section class="schema">
            <h2>${dag.dag}</h2>
            <input type="checkbox" id="${id}">
            <label for="${id}">Visa mer</label>
            <div class="content">
                ${dag.händelser.map(h =>`
                <div class="happening">
                    <p class="time">${h.tid}</p>
                    <p class="description">${h.beskrivning}</p>
                </div>
                    `).join('')}
            </div>
            </section>
            `;
            
            container.insertAdjacentHTML('beforeend', html);
        });
    });