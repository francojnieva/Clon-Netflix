const btnAccordion = document.querySelectorAll(".btn-accordion")
const answerAccordion = document.querySelectorAll(".answer-accordion")
const addIcon = document.querySelectorAll(".addIcon")
const closeIcon = document.querySelectorAll(".closeIcon")

btnAccordion.forEach((question, index) => {
    question.addEventListener("click", function () {
        // console.log(question)
        
        if (answerAccordion[index].classList.contains("max-h-0")) {
            answerAccordion[index].classList.remove("max-h-0")
            answerAccordion[index].classList.add("max-h-screen")
        } else {
            answerAccordion[index].classList.remove("max-h-screen")
            answerAccordion[index].classList.add("max-h-0")
        }

    })
})