import HomePizza from './home-pizza.jpeg'

function getHomeContent() {
  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("class","information");

  homeDiv.appendChild(getLogo());
  homeDiv.appendChild(getReview());
  homeDiv.appendChild(getImage());

  return homeDiv;
}

function getLogo() {
  const logo = document.createElement("h1");
  logo.setAttribute("class","logo");
  logo.innerText = "Il Migliore Pizza";

  return logo;
}

function getReview() {
  const review = document.createElement("p");
  review.setAttribute("class","slogan");
  review.innerText = "Authentic Italian Pizza";

  return review;
}

function getImage() {
  const img = new Image();
  img.setAttribute("class","home-pizza");
  img.src = HomePizza;

  return img;
}

export { getHomeContent };