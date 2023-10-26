// Funcionalidad acordeón

const btnAccordion = document.querySelectorAll(".btn-accordion")
const answerAccordion = document.querySelectorAll(".answer-accordion")

btnAccordion.forEach((question, index) => {
    question.addEventListener("click", function () {
        
        const addIcon = question.querySelector(".addIcon")
        const closeIcon = question.querySelector(".closeIcon")

        if (answerAccordion[index].classList.contains("max-h-0")) {
            answerAccordion[index].classList.remove("max-h-0")
            answerAccordion[index].classList.add("max-h-screen")
            addIcon.style.display = "none"
            closeIcon.style.display = "inline"
        } else {
            answerAccordion[index].classList.remove("max-h-screen")
            answerAccordion[index].classList.add("max-h-0")
            addIcon.style.display = "inline"
            closeIcon.style.display = "none"
        }
    })
})

// Validación formulario login

const formLogin = document.getElementById("form-login")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btnLogin = document.getElementById("btnLogin")
const warningEmail  = document.getElementById("warning-email")
const warningPassword  = document.getElementById("warning-password")

email.addEventListener("change", () => {
    warningEmail.textContent = ""
})

password.addEventListener("change", () => {
    warningPassword.textContent = ""
})

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if (email.value === "" || password.value === "") {
        warningEmail.textContent = "Ingresa un email o un número de teléfono válido."
        warningPassword.textContent = "La contraseña debe tener entre 4 y 60 caracteres."
        return false
    }

    const emailRegex = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (!emailRegex.test(email.value.trim())) {
        warningEmail.textContent = "Ingresa un email o un número de teléfono válido."
        return false
    }

    if (password.value.length < 4  || password.value.length > 60) {
        warningPassword.textContent = "La contraseña debe tener entre 4 y 60 caracteres."
        return false
    }
    
    formLogin.submit()
})