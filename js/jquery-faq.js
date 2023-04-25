// $('.invisible').css({
//     'visibility': 'hidden',
//     'background-color': 'papayawhip'
// });

$(document).ready(function(){
    $(".btn-1").click(function(){
        $("dd").toggleClass("invisible");
    });
});

$(document).ready(function(){
    $("dt").click(function(){
        $("dt").toggleClass("highlighted");
    });
});

//W3 School last child
// $(document).ready(function(){
//     $(".btn-2").click(function(){
//          $("li:last-child").css("background-color", "yellow").toggleClass();
//     });
//     });

$(document).ready(function(){
    $(".btn-2").click(function(){
        $("li:last-child").toggleClass('highlighted');
    });
});




$(document).ready(function(){
    $(".Bigger").click(function(){
        $("li").toggleClass("Bigger");
    });
});

$(document).ready(function(){
    $("li").click(function(){
        $('li:parent').toggleClass('blue-text');
    });
});

