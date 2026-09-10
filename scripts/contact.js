


// Contact Us form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your message has been sent successfully!");
        contactForm.reset();
    
});
