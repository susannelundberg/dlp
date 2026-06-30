import Navbar from '../../utilities/menu.js';
import { renderSchedule, scheduleClient } from "../../utilities/schedule.js";

const dagForm = document.querySelector('.dag-form');
const form = document.querySelector('.schema-form');
const container = document.querySelector('.schema-container');

const handleSubmitDag = async (e) => {
    e.preventDefault();
     console.log('dag submit körs');

    const formData = new FormData(dagForm);
    const data = {
        dag: formData.get('dag'),
        händelser: []
    };

    const result = await scheduleClient.add(data);

    if (result) {
        dagForm.reset();
        renderSchedule();
        dagVal();
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const dagId = formData.get('dag');
    const dag = await scheduleClient.findById(dagId);

    dag.händelser.push({
        id: Date.now(),
        tid: formData.get('tid'),
        beskrivning: formData.get('beskrivning')
    });

    const result = await scheduleClient.update(dagId, {händelser: dag.händelser});

    if (result) {
        form.reset();
        renderSchedule();
    }

};

dagForm.addEventListener('submit', handleSubmitDag);
form.addEventListener('submit', handleSubmit);
container.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
        await scheduleClient.remove(e.target.dataset.id);
        renderSchedule();
        dagVal();
    }
});

const dagVal = async () => {
    const select = document.querySelector('#dag-val')
    select.innerHTML = ''; 

    const dagar = await scheduleClient.listAll();
    dagar.forEach(dag => {
        select.insertAdjacentHTML('beforeend', `<option value="${dag.id}">${dag.dag}</option>`);
        });
};

const initApp = async () => {
  new Navbar();
  renderSchedule();
  dagVal();
};

initApp();

