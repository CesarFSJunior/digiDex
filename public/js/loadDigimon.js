const main = document.querySelector('main')

async function load() {
    await fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => {
            response.json()
                .then(data => {
                    mostrarDigi(data)
                })
        })
}

load()

function mostrarDigi(value) {
    for(let i = 0; i < value.length; i++ ) {

        var divNova = document.createElement("div")
        var h2Novo = document.createElement("h2")
        var img = document.createElement("img")
        var p = document.createElement("p")

        main.appendChild(divNova)
        divNova.appendChild(h2Novo)
        divNova.appendChild(img)
        divNova.appendChild(p)

        divNova.classList.add("digimonCard")
        h2Novo.innerHTML = value[i].name
        img.setAttribute("src", value[i].img)
        p.innerHTML = value[i].level
    }
}