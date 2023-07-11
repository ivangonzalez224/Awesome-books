import { navBarBtnsId, titlesSection } from './navLinksData.js';
import { topNavBtnLinksUl, bookTitle, middleSection } from './elements.js';

const createNavbarLinks = () => {
  for (let i = 0; i < navBarBtnsId.length; i += 1) {
    const navBarList = document.createElement('li');
    const navBarLink = document.createElement('a');
    navBarLink.id = navBarBtnsId[i];
    navBarLink.className = 'topNav_listLink';
    navBarLink.innerHTML = navBarBtnsId[i];
    topNavBtnLinksUl.appendChild(navBarList);
    navBarList.appendChild(navBarLink);
    navBarLink.addEventListener('click', () => {
      const indexNavLink = navBarBtnsId.indexOf(navBarLink.id);
      bookTitle.innerHTML = titlesSection[indexNavLink];
      const listLinkElements = document.querySelectorAll('.topNav_listLink');
      for (let j = 0; j < listLinkElements.length; j += 1) {
        listLinkElements[j].style.color = '#000';
        middleSection[j].style.display = 'none';
        if (j === indexNavLink) {
          listLinkElements[j].style.color = '#0000ff';
          middleSection[j].style.display = 'flex';
        }
      }
    });
  }
};
export default createNavbarLinks;