// script.js

// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Part 1: Event Handling 
    

    // Highlight nav links on hover
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#007BFF'; // Blue on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Reset to default
        });
    });

   
    // Part 2: Interactive Elements 
    

    // Toggle extra info in "About Me" section
    const aboutSection = document.getElementById('about');
    const moreInfo = document.createElement('p');
    moreInfo.textContent = "Currently learning advanced machine learning techniques and working on mini projects.";
    moreInfo.style.display = 'none';
    moreInfo.style.color = 'darkgreen';
    aboutSection.appendChild(moreInfo);

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Show More About Me';
    aboutButton.classList.add('button');
    aboutSection.appendChild(aboutButton);

    let shown = false;
    aboutButton.addEventListener('click', () => {
        shown = !shown;
        moreInfo.style.display = shown ? 'block' : 'none';
        aboutButton.textContent = shown ? 'Show Less About Me' : 'Show More About Me';
    });

   
    // Part 3: Form Validation 
   

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        // Collect input values
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const location = document.getElementById('location').value.trim();
        const interest = document.getElementById('interest').value;

        let errorMessages = [];

        // Full name: minimum 3 characters
        if (fullname.length < 3) {
            errorMessages.push('Full name must be at least 3 characters.');

        }
        // Email: basic format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessages.push('Please enter a valid email address.');
        }

        // Email: basic pattern check
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessages.push('Enter a valid email address.');
        }

        // Phone: only numbers, 10+ digits
        if (!/^\d{10,}$/.test(phone)) {
            errorMessages.push('Phone number must be at least 10 digits and contain only numbers.');
        }

        // Location: required
        if (location === '') {
            errorMessages.push('Location is required.');
        }

        // Interest: must select one
        if (interest === '') {
            errorMessages.push('Please select an area of interest.');
        }

        // If any error found
        if (errorMessages.length > 0) {
            e.preventDefault(); // Prevent form submission

            // Remove previous error display if any
            let oldError = document.getElementById('form-errors');
            if (oldError) {
                oldError.remove();
            }

            // Show error messages
            const errorBox = document.createElement('div');
            errorBox.id = 'form-errors';
            errorBox.style.color = 'red';
            errorBox.style.marginTop = '10px';
            errorBox.innerHTML = `<strong>Form Errors:</strong><ul>${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`;

            form.prepend(errorBox);
        }
    });

});
