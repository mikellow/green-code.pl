(function(){
'use strict';

    console.log('hello');

    var contactForm = document.getElementById('askUsForm');
    console.log('contactForm',contactForm);

    contactForm.visible = false;
    function showContactForm () {
        contactForm.classList.remove("hidden");
        contactForm.classList.add("visible");
        contactForm.visible = true;
    }

    function hideContactForm () {
        contactForm.classList.remove("visible");
        contactForm.classList.add("hidden");
        contactForm.visible = false;
    }

    function toggleContactForm () {
        console.log('toggleFired');
        if (contactForm.visible) {
            hideContactForm();
        } else {
            showContactForm();
        }
    }

    window.toggleContactForm = toggleContactForm;

})();