const signup = document.querySelector(".sign-up");
const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const error = document.querySelector(".form__error");
const successMessage = document.querySelector(".success");
const emailPlaceholder = document.querySelector(".success__email");
const dismissMessageButton = document.querySelector(".success__button");

const formState = {
    hasAttemptedSubmit: false
}

form.addEventListener("submit", handleSubmit);
email.addEventListener("input", handleInput)
dismissMessageButton.addEventListener("click", handleDismiss);

function handleSubmit(e) {
    e.preventDefault();

    if (validateInput()) {
        // Hide sign up page
        signup.classList.add("hidden");

        // Show thank you page
        const emailValue = email.value.trim();
        emailPlaceholder.textContent = emailValue;
        successMessage.classList.remove("hidden")
        successMessage.focus();
    }

    formState.hasAttemptedSubmit = true;
};

function handleInput() {

    // Will trigger once the user already submitted the form once.
    if(formState.hasAttemptedSubmit) {
        validateInput()
    }
}

function handleDismiss() {

    // Hide thank you page
    successMessage.classList.add("hidden");

    // Clear sign up form
    form.reset();
    formState.hasAttemptedSubmit = false;

    // Show sign up page
    signup.classList.remove("hidden");
    email.focus();
}

function validateInput() {

    if(!email.validity.valid) {
        showError();
        return false;
    }

    clearError();
    return true;
}

function showError() {
    error.textContent = getErrorMessage();
    email.classList.add("form__input--error");
}

function getErrorMessage() {
    if (email.validity.valueMissing) return "Email address is required";
    if (email.validity.typeMismatch) return "Valid email required";
    return "";
}

function clearError() {
    email.classList.remove("form__input--error");
    error.textContent = "";
}
