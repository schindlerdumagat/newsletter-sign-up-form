const signup = document.querySelector(".sign-up");
const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const error = document.querySelector(".form__error");
const successMessage = document.querySelector(".success");
const emailPlaceholder = document.querySelector(".success__email");
const dismissMessageButton = document.querySelector(".success__button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!email.validity.valid) {
        showError()
    } else {
        // Hide sign up page
        signup.classList.add("hidden");
        signup.setAttribute("aria-hidden", "true");

        // Show thank you page
        emailPlaceholder.textContent = email.value;
        successMessage.classList.remove("hidden")
        successMessage.removeAttribute("aria-hidden");
    }

})

// 
dismissMessageButton.addEventListener("click", () => {

    // Hide thank you page
    successMessage.classList.add("hidden");
    successMessage.setAttribute("aria-hidden", "true");

    // Clear sign up form
    email.value = "";
    email.classList.remove("form__input--error");
    error.textContent = "";

    // Show sign up page
    signup.classList.remove("hidden");
    signup.removeAttribute("aria-hidden");

})

function showError() {

    if (email.validity.valueMissing) {
        error.textContent = "Email address is required"
    } else if (email.validity.typeMismatch) {
        error.textContent = "Valid email required"
    }

    email.classList.add("form__input--error");
}
