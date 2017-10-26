jQuery(document).ready(function(){

    var myIndex = 0;
    var myIndexHome = 0;
    carousel();
    carouselHome();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 5000);
    }

    function carouselHome() {
        var i;
        var x = document.getElementsByClassName("mySlidesHome");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndexHome++;
        if (myIndexHome > x.length) {myIndexHome = 1}
        x[myIndexHome-1].style.display = "block";
        setTimeout(carouselHome, 4000);
    }
});
