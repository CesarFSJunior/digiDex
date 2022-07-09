const menuMobileArea = document.querySelector('.menuMobileArea')
const header = document.querySelector('header')

function menuMobile() {
    menuMobileArea.classList.toggle("check")
    header.classList.toggle("check")
}

const storage = JSON.parse(localStorage.getItem('favorite')) || []

function favorite(value) {
    const star = document.querySelector(`#star${value}`)
    star.classList.toggle('checked')


    if(star.classList[2] == 'checked') {
        storage.push({nome: value})
        localStorage.setItem('favorite', JSON.stringify(storage))
    }else {
        for(let i = 0; i <= storage.length; i++) {
            if(storage[i].nome == value) {
                storage.splice(i, 1)
                localStorage.setItem('favorite', JSON.stringify(storage))
            }
        }
    }
}

for(let i = 0; i < storage.length; i++ ) {
    // console.log(`#star${storage[i].nome}`)

    const star = document.querySelector(`#star${storage[i].nome}`)

    if(star) {
        star.classList.add('checked')
    }
}