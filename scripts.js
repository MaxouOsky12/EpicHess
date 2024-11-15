document.addEventListener('DOMContentLoaded', function() {
    // Ajouter les animations à la page
    const fadeInElements = document.querySelectorAll('.cta-button, .highlight');
    fadeInElements.forEach(element => {
        element.classList.add('fadeIn');
    });

    // Animations supplémentaires sur les boutons
    document.querySelector('.cta-button').addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)";
    });

    document.querySelector('.cta-button').addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});
