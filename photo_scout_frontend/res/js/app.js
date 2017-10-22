var app = new Vue({
    el: '#content',
    data: {
      images: data
    }
  })

$( window ).load(function() {
    var size = $("#image-view").outerWidth(true)/3.0;
    console.log(size);

    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        // columnWidth: size
        percentPosition: true
        // gutter: 0,
        // transitionDuration: 0
    });
});

$(".grid-item").click(function(){
    var info = $(this).find(".info").find(".indicator");
    if(info.hasClass("selected")) {
        info.removeClass("selected");
    }
    else {
        info.addClass("selected");
    }
});

// UI
$("#enable-map").click(function(){
    $("#content .view").removeClass("active");
    $("#content #map-view").addClass("active");
    var map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    });

    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});

    // start the map in South-East England
    map.addLayer(osm);
});

$("#enable-image").click(function(){
    $("#content .view").removeClass("active");
    $("#content #image-view").addClass("active");
});

