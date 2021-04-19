const Navbar = () => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('class', 'position-fixed top-0 bg-primary w-100 p-2');

  const linkHome = document.createElement('a');
  linkHome.setAttribute('class', 'text-decoration-none mx-2 text-white m-3');
  linkHome.setAttribute('id', 'linkHome');
  linkHome.setAttribute('href', '#');
  linkHome.textContent = 'Home';

  const linkMenu = document.createElement('a');
  linkMenu.setAttribute('class', 'text-decoration-none mx-2 text-white m-3');
  linkMenu.setAttribute('id', 'linkMenu');
  linkMenu.setAttribute('href', '#');
  linkMenu.textContent = 'Menu';

  const linkContact = document.createElement('a');
  linkContact.setAttribute('class', 'text-decoration-none mx-2 text-white m-3');
  linkContact.setAttribute('id', 'linkContact');
  linkContact.setAttribute('href', '#');
  linkContact.textContent = 'Contact';

  const links = [linkHome, linkMenu, linkContact];
  for (let i = 0; i < links.length; i += 1) {
    navBar.appendChild(links[i]);
  }

  return navBar;
};

export default Navbar;
