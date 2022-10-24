const btn = document.querySelector('.share > button');
const share = document.querySelector('.socials');
const shareBtn = document.querySelector('.share > button > i')

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    shareBtn.classList.toggle('active');
    share.classList.toggle('active');
})
