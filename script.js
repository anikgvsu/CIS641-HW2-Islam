const navLinks = document.querySelectorAll('nav a');

const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        }
    });
});

const defaultSection = document.getElementById('about');
if (defaultSection) {
    defaultSection.style.display = 'block';
    navLinks[0].classList.add('active');
}
