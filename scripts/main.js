const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const inputError = document.getElementById("error");
const formPage = document.getElementById("form-page");
const successPage = document.getElementById("success-page");
const successBtn = document.getElementById("success-btn");
const successEmail = document.getElementById("success-email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput.validity.valid) {
        showError();
        return;
    }

    successEmail.innerText = emailInput.value;
    inputError.textContent = "";
    formPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    emailInput.classList.remove("card__input--error");

});

emailInput.addEventListener("input", () => {
    
    if (!emailInput.validity.valid) {
        showError();
        return;
    }

    emailInput.classList.remove("card__input--error");
    inputError.textContent = "";
})

successBtn.addEventListener("click", () => {
    emailInput.value = "";
    successEmail.innerText = "";
    successPage.classList.add("hidden");
    formPage.classList.remove("hidden");
})

function showError() {

    if (emailInput.validity.valueMissing) {
        inputError.textContent = "Email is required";
    } else  if (emailInput.validity.typeMismatch) {
        inputError.textContent = "Valid email required"
    }

    emailInput.classList.add("card__input--error");

}
