//Procurar o botao
document.querySelector("#add-time")

.addEventListener('click', cloneField)

//Executar uma açao
function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
        //Duplica os campos

        //Colocar na página
