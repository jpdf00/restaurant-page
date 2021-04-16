const Home = () => {
  const home = document.createElement('div')

  const name = document.createElement('h1');
  const image = document.createElement('img');
  const description = document.createElement('p');

  name.setAttribute('class', 'text-decoration-none m-2');
  name.textContent = 'My Restaurant';

  image.setAttribute('class', 'text-decoration-none m-2');
  image.setAttribute('src', '../assets/img/restaurant-photo.jpg');
  image.setAttribute('alt', 'Restaurant Photo');

  description.setAttribute('class', 'text-decoration-none m-2');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ligula quis ligula tristique egestas. Maecenas in lobortis odio. Praesent vitae suscipit lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin mollis in neque eu ultricies. Quisque sit amet bibendum purus. Vestibulum dignissim ligula sed lacus eleifend imperdiet. Mauris condimentum pulvinar enim, nec scelerisque sapien. Pellentesque sit amet magna tincidunt, ultricies elit eget, sodales sem. Sed venenatis risus a elit imperdiet, sed dictum lectus bibendum. ';

  const links = [name, image, description];
  for (let i = 0; i < links.length; i += 1) {
    home.appendChild(links[i]);
  }

  return home
}

export default Home
