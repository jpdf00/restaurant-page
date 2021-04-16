import Navbar from './navbar';
import Home from './home';

const content = document.querySelector('#content');
const navBar = Navbar();
const home = Home();
content.appendChild(navBar);
content.appendChild(home);
