import { navbar } from "../../utilities/menu.js";

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
};



initApp();