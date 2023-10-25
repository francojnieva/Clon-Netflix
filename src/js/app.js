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