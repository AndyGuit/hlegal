const tabsNavEl = document.querySelector('.nav-tabs');
const tabsNavLinkEl = tabsNavEl.querySelectorAll('.nav-link');

// scroll tab links on small screens
tabsNavLinkEl.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (window.innerWidth >= 992) return;

    let computedWidth = 0;

    for (let i = 0; i < index; i++) {
      computedWidth += tabsNavLinkEl[i].getBoundingClientRect().width;
    }

    tabsNavEl.style = `transform: translateX(-${computedWidth}px)`;
  });
});
