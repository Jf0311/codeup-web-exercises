//
// (function(){
//     "use strict";
//
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     console.log(planetsString);
//     var planetsArray = planetsString.split('|')
//
//     /**
//      * TODO:
//      * Convert planetsString to an array, and save it in a variable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */
//
//     console.log(planetsArray);
//
//     /**
//      * TODO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *
//      * BONUS:
//      * Create another string that would display your planets in an undordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */
//     var planetsWithBrTags = planetsArray.join(" <br> ");
//     console.log(planetsWithBrTags);
//
//     var planetsInAList =  planetsArray.join(" <li> ");
//     console.log(planetsInAList);
//     console.log("<ul> " + "<li> " +planetsInAList + "</li>" + " </ul>");
//
// })();

var waterBottle = {
    brand : ["Pure life", "Deer Park", "Fiji"],
    colors:"blue",
    hasStraw: true,
    empty: true,
}
console.log(waterBottle)

console.log("My water bottle is: "  + waterBottle.colors);