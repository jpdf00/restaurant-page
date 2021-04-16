import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

const content = document.querySelector('#content');
const navBar = Navbar();
const home = Home();

content.appendChild(navBar);
content.appendChild(home);

const linkHome = document.querySelector('#linkHome');
linkHome.addEventListener('click', () => {
  content.removeChild(content.childNodes[1]);
  content.appendChild(home);
});

const linkMenu = document.querySelector('#linkMenu');
linkMenu.addEventListener('click', () => {
  const menu = Menu();
  content.removeChild(content.childNodes[1]);
  content.appendChild(menu);
});

const linkContact = document.querySelector('#linkContact');
linkContact.addEventListener('click', () => {
  const contact = Contact();
  content.removeChild(content.childNodes[1]);
  content.appendChild(contact);
});
