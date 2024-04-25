document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function (e) 
    {
        if (contactForm.action.includes('google.com/forms'))
         {
            return; 
         }
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') 
        {
            formMessage.innerHTML = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) 
        {
            formMessage.innerHTML = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        formMessage.innerHTML = 'Your message has been sent successfully.';
        formMessage.style.color = 'green';

        contactForm.reset();
    });
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});