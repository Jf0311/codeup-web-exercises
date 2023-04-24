// $('.invisible').css({
//     'visibility': 'hidden',
//     'background-color': 'papayawhip'
// });

$(document).ready(function(){
    $("button").click(function(){
        $("dd").toggleClass("invisible");
    });
});

$(document).ready(function(){
    $("dt").click(function(){
        $("dt").toggleClass("highlighted");
    });
});
