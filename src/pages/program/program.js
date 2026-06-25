import { navbar } from "../../utilities/menu.js";
import { renderSchedule, scheduleClient } from "../../utilities/schedule.js";

const dagForm = document.querySelector('.dag-form');
const form = document.querySelector('.schema-form');

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
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const dagId = formData.get('dag');
    const dag = await scheduleClient.findById(dagId);

    dag.händelser.push({
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

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  renderSchedule();
};

initApp();

