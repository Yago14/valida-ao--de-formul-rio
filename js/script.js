let campos = document.querySelectorAll(".validar")
console.log(campos)

const enviarFormulario = document.querySelector("#enviar")

const messagem = document.querySelector(".menssagem")

campos.forEach(inputs => {

    function camposValidos() {

        inputs.classList.add("validos")
        inputs.classList.remove("invalidos")
    }
    function camposInvalidos() {

        inputs.classList.remove("validos")
        inputs.classList.add("invalidos")
    }

    inputs.addEventListener("change", () => {

        inputs.value ==! "" ? camposValidos() : camposInvalidos()
        inputs.value == "" ? camposInvalidos() : camposValidos()

    })

    enviarFormulario.addEventListener("click",()=>{
        inputs.value == "" ? messagem.innerHTML = "PREENCHER CAMPOS OBRIGATORIOS *": messagem.innerHTML = "MENSAGEM ENVIADA!"
        inputs.value ==! "" ? camposValidos() : camposInvalidos()
        inputs.value == "" ? camposInvalidos() : camposValidos()
    })

    console.log(inputs)
});




