import Pizza1 from './pizza1.jpg';
import Pizza2 from './pizza2.jpg';
import Pizza3 from './pizza3.jpg';
import Pizza4 from './pizza4.jpg';

function getMenuContent() {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class","information");

  menuDiv.appendChild(getMenuHeader());
  menuDiv.appendChild(getMenu());

  return menuDiv;
}

function getMenuHeader() {
  const menuHeader = document.createElement('h1');
  menuHeader.setAttribute("class", "menu-header");
  menuHeader.innerText = "Menu"

  return menuHeader;
}

function getMenu() {
  const itemCardContainer = document.createElement('div');
  itemCardContainer.setAttribute("class", "item-card-container");

  const menuOptions = [
    {
      icon: Pizza1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "15.00"
    },
    {
      icon: Pizza2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "15.00"
    },
    {
      icon: Pizza3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "16.00"
    },
    {
      icon: Pizza4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "17.00"
    }
  ]

  menuOptions.forEach( meal => {
    const itemCard = getItemCard(meal);
    itemCardContainer.appendChild(itemCard);
  });

  return itemCardContainer;
}

function getItemCard(meal) {
  const itemCard = document.createElement('div');
  itemCard.setAttribute("class", "item-card");

  const image = new Image();
  image.setAttribute("class", "menu-icon");
  image.src = meal.icon;

  const description = document.createElement('p');
  description.setAttribute("class", "meal-description");
  description.innerText = `${meal.description} - ${meal.price}`;

  itemCard.appendChild(image);
  itemCard.appendChild(description);

  return itemCard;
}

export { getMenuContent };