import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

const content = document.querySelector('#content');
const navBar = Navbar();
const home = Home();
const menu = Menu();
const contact = Contact();

content.appendChild(navBar);
content.appendChild(contact);
