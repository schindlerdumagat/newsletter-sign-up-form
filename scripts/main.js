const form = document.getElementById("form");
const formPage = document.getElementById("form-page");
const emailInput = document.getElementById("email");
const inputError = document.getElementById("error");
const successPage = document.getElementById("success-page");
const successBtn = document.getElementById("success-btn");
const successEmail = document.getElementById("success-email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!isEmailValid()) {
        return;
    }

    successEmail.innerText = emailInput.value;
    inputError.textContent = "";
    emailInput.classList.remove("card__input--error");

    successPage.removeAttribute("aria-hidden");
    successPage.classList.remove("hidden");
    formPage.setAttribute("aria-hidden", true);
    formPage.classList.add("hidden");

});

emailInput.addEventListener("input", () => {
    
    if(!isEmailValid()) {
        return;
    }

    inputError.textContent = "";
    emailInput.classList.remove("card__input--error");
});

successBtn.addEventListener("click", () => {
    emailInput.value = "";
    successEmail.innerText = "";
    
    successPage.setAttribute("aria-hidden", true);
    successPage.classList.add("hidden");
    formPage.removeAttribute("aria-hidden");
    formPage.classList.remove("hidden");
});

// Check if email is valid
function isEmailValid () {

    let isValid = true;

    if (!emailInput.validity.valid) {

        // Set error message when email is invalid
        if (emailInput.validity.valueMissing) {
            inputError.textContent = "Email is required";
        } else  if (emailInput.validity.typeMismatch) {
            inputError.textContent = "Valid email required"
        }

        emailInput.classList.add("card__input--error");
        isValid = false;
    }

    return isValid;
}
