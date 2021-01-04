const link1 = document.querySelector(`.box1`)
const link2 = document.querySelector(`.box2`)
const link3 = document.querySelector(`.box3`)

link1.addEventListener(`click`, function() {
    window.open('https://product-lorem.herokuapp.com/', '_blank');
})

link2.addEventListener(`click`, function() {
    window.open('https://lorem-studios.herokuapp.com/', '_blank');
})

link3.addEventListener(`click`, function() {
    window.open('https://lorem-talk.herokuapp.com/', '_blank');
})

