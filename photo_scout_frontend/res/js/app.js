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