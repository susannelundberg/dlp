import DataClient from "../../utilities/data-client.js";
export const scheduleClient = new DataClient('schema');

export const renderSchedule = async () => {
    const dagar = await scheduleClient.listAll();
    const container = document.querySelector('.schema-container');
    container.innerHTML = '';
    dagar.forEach((dag, index) => {
        
            console.log(dag.id)
        const id = `toggle-text${dag.id}`;
        const html = `
        <section class="schema">
            <h2>${dag.dag}</h2>
            <button data-id="${dag.id}">Remove</button>
            <input type="checkbox" id="${id}">
            <label for="${id}">Show more</label>
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