const barsIcon = document.getElementById('bars');
const closeIcon = document.getElementById('close');
const secondNav = document.querySelector('.second-nav');


barsIcon.addEventListener('click', () => {
    secondNav.style.display = 'flex';
    closeIcon.style.display = 'block';
    barsIcon.style.display = 'none';
});
closeIcon.addEventListener('click', () => {
    secondNav.style.display = 'none';
    closeIcon.style.display = 'none';
    barsIcon.style.display = 'block';
})
