function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = ", i * number );
    }
}
showMultiplicationTable(8);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
         for (var i = 1; i <= 10; i++) {
             var m = getRandomInt(200, 20);
             if (m % 2 === 0) {
                 console.log(i + m + " is even")
             } else {
                 console.log(i + m + " is odd")
             }
         }
         for (var x = 0; x <= 10; x++){
             var str = "";
             for(var j = 0; j < x; j++)
                 str= str + x;
             console.log(str)
         }





