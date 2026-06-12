import { navbar } from "../../utilities/menu.js";

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
};

initApp();

const lon = 2.78;
const lat = 48.87;

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris`)
    .then(res => res.json())
    .then(data => {
        const { time, temperature_2m_max, temperature_2m_min, weathercode } = data.daily;
        const container = document.querySelector('.weather-container');

        time.forEach((dag, index) => {
            const datum = new Date(dag);
            const veckodag = datum.toLocaleDateString('sv-SE', { weekday: 'long' });
            const storVeckodag = veckodag.charAt(0).toUpperCase() + veckodag.slice(1);
            const html = `
                <div class="weather-card">
                    <h3 class="veckodag">${storVeckodag}</h3>
                    <p class="datum">${dag}</p>
                </div>
                <div class="temp">
                    <p class="max"><span class="maxsize">Max: </span>${temperature_2m_max[index]}°C</p>
                    <p class="min"><span class="minsize">Min: </span>${temperature_2m_min[index]}°C</p>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    })
    .catch(err => console.error(err));

    /* Stor bokstav i början
    #adjustName(value) { return value.charAt(0).toUpperCase() + value.slice(1); }

    const storVeckodag = veckodag.charAt(0).toUpperCase() + veckodag.slice(1);
    */