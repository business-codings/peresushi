document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-in, .servico-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('menu-overlay');
    const links = document.querySelectorAll('.menu-links a, .menu-social a');

    // Abre/fecha no clique do botão
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Fecha ao clicar em qualquer link
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});