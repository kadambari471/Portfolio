document.addEventListener('DOMContentLoaded', () => {
    const educationList = document.getElementById('education-list');
    const addEducationButton = document.getElementById('add-education');

    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => {
            const newEducationItem = document.createElement('li');
            const userInput = prompt('Enter new education detail:');
            
            if (userInput && userInput.trim() !== '') {
                newEducationItem.textContent = userInput;
                educationList.appendChild(newEducationItem);
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});
