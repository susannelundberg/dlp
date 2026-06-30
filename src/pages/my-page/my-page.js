import Navbar from '../../utilities/menu.js';
import Traveldate from '../../utilities/travel-date.js';
import DataClient from "../../utilities/data-client.js";
import { renderSchedule, scheduleClient } from "../../utilities/schedule.js";

const dateForm = document.querySelector('.date-form');
const traveldateClient = new DataClient('traveldate');

const handleSubmitDate = async (e) => {
    e.preventDefault();
    console.log(date.date);

    const travelDate = await traveldateClient.listAll('traveldate');
    if (travelDate.length < 1) {
        const formData = new FormData(dateForm);
        const data = {
        date: formData.get('date'),
        };
    
        const result = await traveldateClient.add(data);
        new Traveldate(new Date(data.date));
    }
    else {
        const formData = new FormData(dateForm);
        const data = {
        date: formData.get('date'),
        };
    
        const result = await traveldateClient.update(travelDate[0].id, data);
        new Traveldate(new Date(data.date));
    }
}

dateForm.addEventListener('submit', handleSubmitDate);

const initApp = async () => {
  new Navbar();
  renderSchedule();

  const travelDate = await traveldateClient.listAll('traveldate');
  if (travelDate.length == 1){
    new Traveldate(new Date(travelDate[0].date));
  }
};

initApp();

// /* Nedräkning */
// const resdag = new Date('2026-06-14T06:00:00');
// const nu = new Date();

// const skillnad = resdag - nu;
// const totalaMinuter = Math.floor(skillnad / 1000 / 60);
// const dagar = Math.floor(totalaMinuter / (60 * 24));
// const timmar = Math.floor((totalaMinuter % (60 * 24)) / 60);
// const minuter = totalaMinuter % 60;

// document.querySelector('.nedräkning').textContent = `${dagar} dagar, ${timmar} timmar och ${minuter} minuter kvar!`;

// console.log(dagar);