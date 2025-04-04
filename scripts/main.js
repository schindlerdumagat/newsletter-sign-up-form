const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const inputError = document.getElementById("error");
const formPage = document.getElementById("form-page");
const successPage = document.getElementById("success-page");
const successBtn = document.getElementById("success-btn");
const successEmail = document.getElementById("success-email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailValue = Object.fromEntries(formData.entries()).email.toLocaleLowerCase().trim();

    if (emailValue === "") {
        emailInput.classList.add("card__input--error");
        inputError.innerText = "Email is required";
        return;
    } else if (!emailValue.match(/^\S+@\S+$/g)) {
        emailInput.classList.add("card__input--error");
        inputError.innerText = "Valid email required";
        return;
    }

    successPage.classList.remove("hidden");
    formPage.classList.add("hidden");
    successEmail.innerText = emailValue;

})

emailInput.addEventListener("focus", () => {
    if (emailInput.classList.contains("card__input--error")) {
        emailInput.classList.remove("card__input--error");
        inputError.innerText = "";
        successEmail.innerText = "";
    }
});

successBtn.addEventListener("click", () => {
    successPage.classList.add("hidden");
    formPage.classList.remove("hidden");
    emailInput.value = "";
})
