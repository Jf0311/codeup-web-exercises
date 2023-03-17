function showMultiplicationTable(number){
    for (var i = 1; i <= 12; i++) {
        console.log(number + " * " + i + " = ", i * number );
    }
}
console.log(showMultiplicationTable(8));