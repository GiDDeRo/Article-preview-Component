const btn = document.querySelector('.share > button');
const share = document.querySelector('.share-icons')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    share.classList.toggle('active');
    console.log('clicked')
})