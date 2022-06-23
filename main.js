const sections = document.querySelectorAll('.section')
const secBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

secBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.active-btn').classList.remove('active-btn')
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active-btn')
        let secElement = document.querySelector(`#${e.target.dataset.id}`)
        secElement.classList.add('active')
    })
})