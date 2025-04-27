const MIN_PRELOAD_TIME = 1000;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

Promise.all([
    new Promise(resolve => window.addEventListener('load', resolve)),
    wait(MIN_PRELOAD_TIME)
]).then(() => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Плавно скрываем прелоадер
    preloader.classList.add('hidden');

    // После завершения анимации — убираем элемент и показываем контент
    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto';
    });
});
