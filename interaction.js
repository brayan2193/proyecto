document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Pricing Table Highlight Animation
document.querySelectorAll('.plan').forEach(plan => {
    plan.addEventListener('mouseover', function () {
        this.classList.add('highlight');
    });

    plan.addEventListener('mouseout', function () {
        this.classList.remove('highlight');
    });
});

// Contact Form Submission
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form Submitted:', data);

        // Placeholder for sending data to server
        alert('Thank you for contacting us! We will get back to you shortly.');
        form.reset();
    });
}
