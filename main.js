document.addEventListener("DOMContentLoaded", () => {
    const cardContainers = document.querySelectorAll(".card-container");

    const revealCards = () => {
        const triggerHeight = window.innerHeight / 1.3;

        cardContainers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;
            if (containerTop < triggerHeight) {
                container.classList.add("visible");
            }
        });
    };

    // Debounce function for better performance
    const debounce = (func, delay) => {
        let timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    };

    // Initial check
    revealCards();

    // Check on scroll with debounce
    window.addEventListener("scroll", debounce(revealCards, 100));
});

function downloadCV() {
    const resumeUrl = 'Kadambari_Resume.pdf';

    // Check if the resume file exists
    fetch(resumeUrl, { method: 'HEAD' })
        .then((response) => {
            if (response.ok) {
                window.location.href = resumeUrl;
            } else {
                alert("Sorry, the resume is currently unavailable.");
            }
        })
        .catch(() => {
            alert("An error occurred while trying to download the CV.");
        });
}
