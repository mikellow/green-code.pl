(function(){
'use strict';

    console.log('hello');

    var contactForm = document.getElementById('askUsForm');
    console.log('contactForm',contactForm);

    contactForm.visible = false;
    var activeSlide = undefined;

    function showContactForm (parentNodeId) {
        activeSlide = document.getElementById(parentNodeId);
        /*var topPos = activeSlide.offsetTop;*/
        var topPos = document.body.scrollTop;

        console.log('showContactForm topPos', topPos);
        contactForm.style.top = topPos + 'px';
        contactForm.classList.remove("hidden");
        contactForm.classList.add("visible");
        contactForm.visible = true;

    }

    function hideContactForm () {
        console.log('hideContactForm');
        contactForm.classList.remove("visible");
        contactForm.classList.add("hidden");
        contactForm.visible = false;
        activeSlide = undefined;
    }

    function toggleContactForm (event) {
        console.log('toggleFired');
        //console.log('this',this);
        var slideNodeId = this.getAttribute('slide') ? this.getAttribute('slide') : undefined;
        //console.log('slideNodeId',slideNodeId);
        console.log(contactForm.visible,!activeSlide);
        //if (contactForm.visible && !activeSlide) {

        switch (true) {
            case (slideNodeId === 'askUsForm') :
                hideContactForm();
                break;
            case (contactForm.visible && !activeSlide) :
                showContactForm(slideNodeId);
                break;
            case (contactForm.visible && !!activeSlide) :
                hideContactForm();
                showContactForm(slideNodeId);
                break;
            case (!contactForm.visible) :
                showContactForm(slideNodeId);
                break;
            default: console.log('non opion correct');
        }
    }

    /* buttons */

    var contactButtons = document.getElementsByClassName("contact-button");
    for (var i=0; i<contactButtons.length; i++){
        var contactButton = contactButtons[i];
        contactButton.addEventListener('click', toggleContactForm);
    }

    window.toggleContactForm = toggleContactForm;

})();
