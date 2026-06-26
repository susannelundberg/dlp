import Navbar from './utilities/menu.js';

const initApp = () => {
  new Navbar();
};

initApp();


/* Nedräkning */
const resdag = new Date('2026-09-14T06:00:00');
const nu = new Date();

const skillnad = resdag - nu;
const totalaMinuter = Math.floor(skillnad / 1000 / 60);
const dagar = Math.floor(totalaMinuter / (60 * 24));
const timmar = Math.floor((totalaMinuter % (60 * 24)) / 60);
const minuter = totalaMinuter % 60;

document.querySelector('.nedräkning').textContent = `${dagar} days, ${timmar} hours and ${minuter} minutes left!`;

console.log(dagar);