const Navbar = () => {
  const navBar = document.createElement('nav')
  navBar.setAttribute('class', 'm-3 position-fixed top-0')

  const linkHome = document.createElement('a');
  const linkMenu = document.createElement('a');
  const linkContact = document.createElement('a');

  linkHome.setAttribute('class', 'text-decoration-none mx-2');
  linkHome.setAttribute('href', '#');
  linkHome.textContent = 'Home';

  linkMenu.setAttribute('class', 'text-decoration-none mx-2');
  linkMenu.setAttribute('href', '#');
  linkMenu.textContent = 'Menu';

  linkContact.setAttribute('class', 'text-decoration-none mx-2');
  linkContact.setAttribute('href', '#');
  linkContact.textContent = 'Contact';

  const links = [linkHome, linkMenu, linkContact];
  for (let i = 0; i < links.length; i += 1) {
    navBar.appendChild(links[i]);
  }

  return navBar
}

export default Navbar
