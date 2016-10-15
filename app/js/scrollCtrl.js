(function(){
'use strict';

    console.log('hello scrollCtrl');

    
    var windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    var model = {
        activeSlide : null,
        slides : [],
        visibilityPos : windowHeight*0.25
    }

    document.getElementById('visibilityStartLine').style.top = model.visibilityPos +'px';

    function _loadSlides () {
        model.slides = document.getElementsByClassName("slide");
    }
    
    function _attachEvents () {
        window.addEventListener('scroll', function onScrollHandler (event){
            //console.log('scroll',event);
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            _handleSlidesVisibility(currentScroll);
        })    
    }

    function _handleSlidesVisibility (currentScroll) {
        for (var i=0; i<model.slides.length; i++){
            var slide = model.slides[i];

            var slideCheckPos = slide.offsetTop - currentScroll;
            
            var shouldBeVisible = slideCheckPos < model.visibilityPos;
            if (shouldBeVisible && !slide.visible) {
                console.log(i + ' slideCheckPos',slideCheckPos,'model.visibilityPos',model.visibilityPos);
                console.log('slide ' + i, shouldBeVisible);
                slide.visible = true;
                slide.classList.add("visible");
            }
        }
    }

    function init () {
        _loadSlides();
        _attachEvents();
    }

    init();





    function scrollScript (event) { 
            console.log('scrollScript', event);
    }
    window.scrollScript = scrollScript

})();
