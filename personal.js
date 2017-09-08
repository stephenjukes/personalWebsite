$(document).ready(function(){
    $("#workExperience li li").on("click", function() {
        let role = $(this);
        role.find("p").slideToggle();
        role.toggleClass("roleClosed roleOpen");
    });

    function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.720587,-1.897061),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

});
