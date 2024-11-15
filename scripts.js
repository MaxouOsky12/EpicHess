document.addEventListener('DOMContentLoaded', function() {
    // Ajout des animations lorsque la page se charge
    const fadeInElements = document.querySelectorAll('.cta-button, .highlight');
    fadeInElements.forEach(element => {
        element.classList.add('fadeIn');
    });

    // Fonction pour l'animation du bouton
    document.querySelector('.cta-button').addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)";
    });

    document.querySelector('.cta-button').addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});
