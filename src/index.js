import Navbar from './utilities/menu.js';
import Traveldate from './utilities/travel-date.js';
import DataClient from './utilities/data-client.js';

const traveldateClient = new DataClient('traveldate');

const initApp = async () => {
  new Navbar();
  const travelDate = await traveldateClient.listAll('traveldate');
    if (travelDate.length == 1){
      new Traveldate(new Date(travelDate[0].date));
    }
};

initApp();