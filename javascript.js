let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 100; // Adjust for fixed header height
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            // Remove 'active' from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' to the matching link
            let activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Smooth scrolling on click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let targetId = link.getAttribute('href').substring(1); // Remove the '#' character
        let targetSection = document.getElementById(targetId);

        // Scroll to the section with an offset for the header
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust for header height
            behavior: 'smooth'
        });
    });
});
