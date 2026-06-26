import Navbar from '../../utilities/menu.js';
import { renderSchedule, scheduleClient } from "../../utilities/schedule.js";

const initApp = () => {
  new Navbar();
  renderSchedule();
};

initApp();

/* Nedräkning */
const resdag = new Date('2026-06-14T06:00:00');
const nu = new Date();

const skillnad = resdag - nu;
const totalaMinuter = Math.floor(skillnad / 1000 / 60);
const dagar = Math.floor(totalaMinuter / (60 * 24));
const timmar = Math.floor((totalaMinuter % (60 * 24)) / 60);
const minuter = totalaMinuter % 60;

document.querySelector('.nedräkning').textContent = `${dagar} dagar, ${timmar} timmar och ${minuter} minuter kvar!`;

console.log(dagar);