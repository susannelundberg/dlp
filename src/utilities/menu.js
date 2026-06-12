export const navbar = /*HTML*/ `
    <!-- Navbar start-->
         <nav>
            <ul>
                <li class="logo">
                    <a href="./index.html">
                        <img src="/src/assets/images/mimmimusse.png" alt="logotype">
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
                <li class="menu-item"><a href="/src/index.html">Start</a></li>
                <li class="menu-item"><a href="/src/pages/program/program.html">Program</a></li>
                <li class="menu-item"><a href="/src/pages/information/information.html">Information</a></li>
                <li class="menu-item"><a href="/src/pages/weather/weather.html">Väder</a></li>
                <li class="menu-item"><a href="/src/pages/maps/maps.html">Parkerna</a></li>
                <li class="menu-item"><a href="/src/pages/my-page/my-page.html">Min sida</a></li>
            </ul>
         </nav>
         <!-- Navbar stop -->
`;