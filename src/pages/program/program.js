import { navbar } from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";

const scheduleClient = new DataClient('schema');

const renderSchedule = async () => {
    const dagar = await scheduleClient.listAll();
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
};

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  renderSchedule();
};

initApp();