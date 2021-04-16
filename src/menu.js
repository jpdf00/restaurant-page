const Menu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('class', 'container mt-5');

  const itemOne = document.createElement('ul');
  const itemTwo = document.createElement('ul');
  const itemThree = document.createElement('ul');

  const name = document.createElement('li');
  const description = document.createElement('li');
  const price = document.createElement('li');

  const nameList = ['dish01', 'dish02', 'dish03'];
  const descriptionList = ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'];
  const priceList = ['$ 10.00', '$ 20.00', '$ 30.00'];

  //image.setAttribute('class', 'm-2');

  const items = [itemOne, itemTwo, itemThree];

  for (let i = 0; i < items.length; i += 1) {
    name.textContent = nameList[i];
    description.textContent = descriptionList[i];
    price.textContent = priceList[i];

    items[i].appendChild(name);
    items[i].appendChild(description);
    items[i].appendChild(price);

    menu.appendChild(items[i]);
  }

  return menu;
}

export default Menu
