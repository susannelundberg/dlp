import { navbar } from "./utilities/menu.js";

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
};

initApp();


/* Nedräkning */
const resdag = new Date('2026-06-14T06:00:00');
const nu = new Date();

// // Nollställ klockslaget på "nu" så vi bara jämför datum
// const idag = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate());

// const skillnad = resdag - idag;
// const dagar = Math.floor(skillnad / 1000 / 60 / 60 / 24);

// const skillnad2 = resdag - nu;
// const totalaMinuter = Math.floor(skillnad2 / 1000 / 60);
// const timmar = Math.floor(totalaMinuter / 60);
// const minuter = totalaMinuter % 60;

const skillnad = resdag - nu;
const totalaMinuter = Math.floor(skillnad / 1000 / 60);
const dagar = Math.floor(totalaMinuter / (60 * 24));
const timmar = Math.floor((totalaMinuter % (60 * 24)) / 60);
const minuter = totalaMinuter % 60;

document.querySelector('.nedräkning').textContent = `${dagar} dagar, ${timmar} timmar och ${minuter} minuter kvar!`;

// setInterval(() => {

// }, 1000);

console.log(dagar);