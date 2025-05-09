/**************************************************** */
// Прокрутка к разделам

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                bgBlur.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

/********************************************** */
// Меню

const iconMenuWrapper = document.querySelector('.menu__icon-wrapper');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const bgBlur = document.querySelector('.menu__body-blur');
if (iconMenuWrapper) {
    iconMenuWrapper.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        bgBlur.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
