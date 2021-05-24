let input = document.querySelector(".input")
let boton_agregar = document.querySelector(".boton_agregar")
let container = document.querySelector(".container")

class Item {
    constructor(nombreItem) {
        this.crearDiv(nombreItem)
    }
    crearDiv(nombreItem) {
        let inputItem = document.createElement("input")
        inputItem.value = nombreItem
        inputItem.disabled = true
        inputItem.classList.add("item_input")
        inputItem.type = "text"

        let div = document.createElement("div")
        div.classList.add("Item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton_editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton_remover")

        container.appendChild(div)
        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        
        botonEditar.addEventListener("click", function() {
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
                inputItem.disabled = !inputItem.disabled
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
                inputItem.disabled = !inputItem.disabled
            }
        })

        botonRemover.addEventListener("click", function(){
            div.remove()
        })
    }
}

function chequearItem () {
    if(input.value) {
        new Item (input.value)
        input.value = ""
    }

}

boton_agregar.addEventListener("click", chequearItem)