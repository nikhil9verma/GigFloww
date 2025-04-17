document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            clearErrors();
            
            // Validate form fields
            let isValid = validateForm();
            
            if (isValid) {
                // Form is valid, show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
                
                // In a real application, you would submit the form data to a server here
                console.log('Form submitted successfully');
            }
        });
    }
    
    function validateForm() {
        let isValid = true;
        
        // Validate full name
        const fullname = document.getElementById('fullname');
        if (!fullname.value.trim()) {
            showError('fullname-error', 'Please enter your full name');
            isValid = false;
        } else if (fullname.value.trim().length < 3) {
            showError('fullname-error', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError('email-error', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate skill category
        const skillCategory = document.getElementById('skill-category');
        if (skillCategory.value === "" || skillCategory.selectedIndex === 0) {
            showError('skill-error', 'Please select your primary skill');
            isValid = false;
        }
        
        // Validate portfolio URL (optional)
        const portfolio = document.getElementById('portfolio');
        if (portfolio.value.trim() && !isValidURL(portfolio.value)) {
            showError('portfolio-error', 'Please enter a valid URL');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }
});
