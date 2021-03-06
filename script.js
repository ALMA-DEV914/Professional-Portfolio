const formFeedbackSpan = document.querySelector(".form-feedback");
const contactForm = document.querySelector(".contact-form");
//on submit contact form handler (sends email via gmail servers and provides validation)
const submitHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector(".user-input-name").value.trim();
    const email = document.querySelector(".user-input-email").value.trim();
    const phoneNumber = document
        .querySelector(".user-input-phone")
        .value.trim();
    const message = document.querySelector(".user-input-message").value.trim();
    if (!validateEmail(email)) {
        formFeedbackSpan.innerHTML = "Please enter a valid email address.";
        formFeedbackSpan.style.color = "#ffff";
        return;
    }

   else if (name && email && phoneNumber && message) {
        const response = await fetch("/text-email", {
            method: "POST",
            body: JSON.stringify({ name, email, phoneNumber, message }),
            headers: { "Content-Type": "application/json" },
        });
        
        
            formFeedbackSpan.innerHTML = "Message successfully received!";
            formFeedbackSpan.style.color = "#ffff";
            contactForm.reset();
    
    } else {
        formFeedbackSpan.innerHTML = "Please fill out all fields.";
        formFeedbackSpan.style.color = "#ffff";
    }
};


//validates email string
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//add event handler to contact submit button
const submitButton = document
    .querySelector(".form-button")
    .addEventListener("click", submitHandler)