export default class Navbar {

    constructor() {
        const navbar = this.#createNavbar();
        document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
    }

    #createNavbar(){
    return /*HTML*/ `
         <nav>
            <ul>
                <li class="logo">
                    <a href="/index.html">
                        <img src="/assets/images/mimmimusse.png" alt="logotype">
                        <span>DLP</span>
                    </a>
                </li>
                <!-- Toggle input for hidding and displaying menu -->
                <li class="toggle">
                    <input type="checkbox" id="menu-btn" class="menu-btn" />
                    <label for="menu-btn" class="menu-icon">
                        <span class="nav-icon"></span>
                    </label>
                </li>
                <li class="menu-item"><a href="/index.html">Start</a></li>
                <li class="menu-item"><a href="/pages/program/program.html">Program</a></li>
                <li class="menu-item"><a href="/pages/information/information.html">Information</a></li>
                <li class="menu-item"><a href="/pages/weather/weather.html">Weather</a></li>
                <li class="menu-item"><a href="/pages/maps/maps.html">The parks</a></li>
                <li class="menu-item"><a href="/pages/hotel/hotel.html">Hotel</a></li>
                <li class="menu-item"><a href="/pages/my-page/my-page.html">My page</a></li>
            </ul>
         </nav>`;
    }
}

