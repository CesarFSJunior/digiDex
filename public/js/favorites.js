const Favoritos = JSON.parse(localStorage.getItem('favorite'))

for(let i = 0; i < Favoritos.length; i++) {
    // console.log(storage[i].nome)
    addDigimon(Favoritos[i].nome)
}

async function addDigimon(value) {
    await fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${value}`)
        .then(response => {
            response.json()
                .then(data => {
                    mostrarDigimon(data)
                })
        })
}

const main = document.querySelector('main')

function mostrarDigimon(value) {

    const novaDiv = document.createElement('div')
    const novaDiv2 = document.createElement('div')
    const novah2 = document.createElement('h2')
    const novaspam = document.createElement('spam')
    const novaimg = document.createElement('img')
    const novap = document.createElement('p')
    
    novaDiv.classList.add('digimonCard')
    novaDiv.setAttribute('id', `${value[0].name}`)
    novaDiv2.classList.add('flex')
    novah2.innerHTML = value[0].name
    novaspam.classList.add('fa')
    novaspam.classList.add('fa-star')
    novaspam.classList.add('checked')
    novaspam.setAttribute('onclick', `unfav('${value[0].name}')`)
    novaspam.setAttribute('id', `star${value[0].name}`)
    novaimg.setAttribute('src', value[0].img)
    novap.innerHTML = value[0].level

    main.appendChild(novaDiv)
    novaDiv.appendChild(novaDiv2)
    novaDiv2.appendChild(novah2)
    novaDiv2.appendChild(novaspam)
    novaDiv.appendChild(novaimg)
    novaDiv.appendChild(novap)
}

function unfav(value) {
    const star = document.querySelector(`#star${value}`)
    const starFather = document.querySelector(`#${value}`)
    starFather.remove()
    for(let i = 0; i <= storage.length; i++) {
        if(storage[i].nome == value) {
            storage.splice(i, 1)
            localStorage.setItem('favorite', JSON.stringify(storage))
        }
    }
}