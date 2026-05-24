// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Form Submission with Formspree
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let contact = document.getElementById("contact").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        if(
            name === "" ||
            email === "" ||
            contact === "" ||
            subject === "" ||
            message === ""
        ) {
            e.preventDefault();
            alert("Please fill up all fields.");
        } else {
            // Form will submit to Formspree automatically
            alert("Message Submitted Successfully!");
        }
    });


    // FAQ Popup Functionality
    const faqBtn = document.getElementById("faqBtn");
    const faqPopup = document.getElementById("faqPopup");
    const closeFaq = document.getElementById("closeFaq");

    // Function to open FAQ popup
    function openFaqPopup() {
        if(faqPopup) {
            faqPopup.classList.add("active");
        }
    }

    // Function to close FAQ popup
    function closeFaqPopup() {
        if(faqPopup) {
            faqPopup.classList.remove("active");
        }
    }

    if(faqBtn) {
        faqBtn.addEventListener("click", () => {
            openFaqPopup();
        });
    }

    if(closeFaq) {
        closeFaq.addEventListener("click", () => {
            closeFaqPopup();
        });
    }

    // Make openFaqPopup globally available
    window.openFaqPopup = openFaqPopup;


    // FAQ Questions Toggle Functionality (Popup)
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            if(answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    // About FAQ Questions Toggle Functionality (Side Section)
    const aboutFaqQuestions = document.querySelectorAll(".about-faq-question");

    aboutFaqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            if(answer.classList.contains("active")) {
                answer.classList.remove("active");
            } else {
                answer.classList.add("active");
            }
        });
    });


    // Close FAQ when clicking outside the popup
    window.addEventListener("click", (e) => {
        if(e.target === faqPopup) {
            closeFaqPopup();
        }
    });
});
