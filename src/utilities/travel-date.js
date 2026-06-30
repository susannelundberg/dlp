export default class Traveldate {

    constructor(date) {
        const traveldate = this.#createCountdown(date);
        setInterval(() => this.#createCountdown(date), 1000 * 60);
        console.log(date);
    }

    #createCountdown(date) {
        const resdag = date;
        const nu = new Date();

        const skillnad = resdag - nu;
        const totalaMinuter = Math.floor(skillnad / 1000 / 60);
        const dagar = Math.floor(totalaMinuter / (60 * 24));
        const timmar = Math.floor((totalaMinuter % (60 * 24)) / 60);
        const minuter = totalaMinuter % 60;

        document.querySelector('.nedräkning').textContent = `${dagar} days, ${timmar} hours and ${minuter} minutes left!`;

        console.log(dagar);
    }

    
}