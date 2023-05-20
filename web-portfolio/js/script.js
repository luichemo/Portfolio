
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// {/* <i class="bi bi-x"></i> */}




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);



    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};



ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-conteiner, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var fullNameInput = document.getElementById('fullName');
        var mobileNumberInput = document.getElementById('mobileNumber');

        // Validate full name input
        if (fullNameInput.value.trim() === '') {
            alert('Please enter your full name');
            fullNameInput.focus();
            return;
        }

        // Validate mobile number input
        var mobileNumber = mobileNumberInput.value.trim();
        if (mobileNumber === '') {
            alert('Please enter your mobile number');
            mobileNumberInput.focus();
            return;
        }
        // Validate mobile number format (optional)
        var mobileNumberPattern = /^\d{9}$/;
        if (!mobileNumberPattern.test(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number');
            mobileNumberInput.focus();
            return;
        }

        // If all validations pass, you can submit the form or perform further actions
        // Submit form or execute additional code

        // Reload the page
        location.reload();

        // Display confirmation message
        alert('Your message has been sent!');
    });
});

