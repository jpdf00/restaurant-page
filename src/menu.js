const Menu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('class', 'container mt-5');

  const menuList = document.createElement('ul');
  menuList.setAttribute('class', 'container');

  const Dish = (name, description, price, read) => {
    const dish = document.createElement('li');
    dish.setAttribute('class', 'd-flex flex-column');

    const itemName = document.createElement('h2');

    const itemBottom = document.createElement('div');
    itemBottom.setAttribute('class', 'd-flex justify-content-between');

    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemName.textContent = name;
    itemDescription.textContent = description;
    itemPrice.textContent = price;

    itemBottom.appendChild(itemDescription);
    itemBottom.appendChild(itemPrice);

    dish.appendChild(itemName);
    dish.appendChild(itemBottom);

    return {dish};
  };

  const dish01 = Dish('Executive Dish', '01 to 02 people.', '$ 10.00');
  const dish02 = Dish('Family Dish', '02 to 04 people.', '$ 20.00');
  const dish03 = Dish('Banquete Dish', '04 to 08 people.', '$ 30.00');

  const items = [dish01.dish, dish02.dish, dish03.dish];

  for (let i = 0; i < items.length; i += 1) {
    menuList.appendChild(items[i]);
  };

  menu.appendChild(menuList)
  return menu;
}

export default Menu
