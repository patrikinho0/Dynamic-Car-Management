let brands = []
let counter = 0

function addCar() {
    let brand = document.getElementById("brand").value

    if (brands.includes(brand)) {
        addAnotherCar()
    } 
    
    else {
        addFirstCar()
    }
}

function addFirstCar(){
    let carDiv = document.getElementById("carDiv")
    let brand = document.getElementById("brand").value

    let button = document.createElement("button")
    button.textContent = "Delete"
    button.addEventListener('click', DeleteCar)
    button.id = counter
    button.name = "deleter"

    let newDiv = document.createElement("div")
    newDiv.id = brand
    newDiv.innerHTML = "<h2>" + brand + "</h2>"
    carDiv.appendChild(newDiv)

    let anotherDiv = document.createElement("div")

    let model = document.getElementById("model").value
    let year = document.getElementById("year").value
    let price = document.getElementById("price").value

    anotherDiv.innerHTML = brand + " " + model + " " + year + " " + price
    anotherDiv.id = counter

    counter += 1

    anotherDiv.append(button)
    newDiv.appendChild(anotherDiv)
    brands.push(brand)
}

function addAnotherCar(){
    let brand = document.getElementById("brand").value

    let model = document.getElementById("model").value
    let year = document.getElementById("year").value
    let price = document.getElementById("price").value

    let button = document.createElement("button")
    button.textContent = "Delete"
    button.addEventListener('click', DeleteCar)
    button.id = counter
    button.name = "deleter"

    let existingCarDiv = document.createElement("div")
    existingCarDiv.innerHTML = brand + " " + model + " " + year + " " + price
    existingCarDiv.id = counter

    counter += 1

    existingCarDiv.append(button)
    document.getElementById(brand).appendChild(existingCarDiv)
}

function DeleteCar(e) {
    let divToDelete = document.getElementById(e.target.id)
    let parentDivToDelete = divToDelete.parentNode;
    divToDelete.remove()

    if(parentDivToDelete.children.length === 1){
        parentDivToDelete.remove()
        for(i= 0; i < brands.length ; i++){
            if(brands[i] === parentDivToDelete.id){
                brands.splice(i, 1);
            }
        }
    }
}