import { getHomeContent } from './home.js';
import { getMenuContent } from './menu.js';
import { getContactContent } from './contact.js';

function createContent() {
  const contentBox = document.getElementById("content");
  const navLinks = createNavLinkList();

  contentBox.appendChild(navLinks);
  contentBox.appendChild(getHomeContent());
}

function createNavLinkList() {
  const navLinkList = document.createElement('ul');
  navLinkList.setAttribute('class','nav-links');

  const linkSections = ["HOME", "MENU", "CONTACT"];

  linkSections.forEach( linkSection => {
    const link = createNavLink(linkSection);
    navLinkList.appendChild(link)
  });

  return navLinkList;
}

function createNavLink(section) {
  const link = document.createElement('li');
  link.setAttribute('class', 'tab');
  link.innerText = section;
  link.addEventListener('click',handleSectionClick);

  return link;
}

function handleSectionClick(e) {
  const section = e.target.innerText;
  const contentBox = document.getElementById("content");
  const information = document.querySelector('.information');

  if (information) { information.remove(); }

  if ( section === "HOME") {
    contentBox.appendChild(getHomeContent());
  } else if ( section === "MENU") {
    contentBox.appendChild(getMenuContent());
  } else {
    contentBox.appendChild(getContactContent());
  }
}

createContent();