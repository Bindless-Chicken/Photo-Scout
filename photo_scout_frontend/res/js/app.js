var Data;


var app = new Vue({
    el: '#content',
    data: {
        images: [],
        apiUrl: 'http://127.0.0.1:5000/results?keywords='
    },
    created: function() {
        this.getImages()
    },
    updated: function() {
        this.initMasonry()
    },
    methods: {
        getImages: function() {

            var url = new URL(location.href);
            var c = url.searchParams.get("keywords");
            console.log(c);

            console.log("Loading images");
            console.log(this);

            // this.images = data;

            this.$http.get(this.apiUrl + c.replace(" ", "+")).then(response => {
                // get body data
                this.images = response.body;
                console.log(this.images);
                Data = this.images;
            }, response => {
                this.images = data;
            });
        },
        initMasonry: function() {
            console.log("Running masonry")

            var elem = document.querySelector('#image-view');
            var msnry = new Masonry( elem, {
                // options
                itemSelector: '.grid-item',
                // columnWidth: size
                // percentPosition: true
                // gutter: 0,
                // transitionDuration: 0
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

            // Gear
            var re = new RegExp("(\d{2,3}(.0)?)(-(\d{2,3}(.0)?))? ?mm");
        }
    }
});

$( window ).load(function() {
    var size = $("#image-view").outerWidth(true)/3.0;
    console.log(size);


});

// UI
$("#enable-map").click(function(){
    $("#content .view").removeClass("active");
    $("#content #map-view").addClass("active");
    var map = L.map('map', {});

    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});

    // Generate the point list
    var PointList = [];
    $(".grid-item .indicator.selected").each(function() {
        var Lat = $(this).parent().attr("Lat");
        var Lon = $(this).parent().attr("Lon");

        if(Lat!=0.0 && Lon!=0.0) {
            PointList.push({"Lat":Lat, "Lon":Lon});
            L.marker([Lat, Lon]).addTo(map);
        }
    });

    // start the map in South-East England
    map.setView(new L.LatLng(PointList[0].Lat, PointList[0].Lon),15);

    map.addLayer(osm);
});

$("#enable-image").click(function(){
    $("#content .view").removeClass("active");
    $("#content #image-view").addClass("active");
});



$("#enable-gear").click(function(){
    $("#content .view").removeClass("active");
    $("#content #gear-view").addClass("active");
});

var labelList = [];

for(var i=0; i<24; ++i) {
    labelList.push(i);
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelList,
        datasets: [{
            label: 'Photos',
            data: [1, 1, 1, 1, 1, 1],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});