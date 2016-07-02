function fizzBuzzInput() {
    var input = prompt('Please enter a number between 1 and 100');
    if (input > 100 || input == 0 || isNaN(input)) {
        return fizzBuzzInput();
    }
    return parseInt(input);
}

var continueUntil = fizzBuzzInput();

for (var i = 1; i <= continueUntil; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write("fizzbuzz");
        document.write("<br>");
    } else if (i % 3 == 0) {
        document.write("fizz");
        document.write("<br>");
    } else if (i % 5 == 0) {
        document.write("buzz");
        document.write("<br>");
    } else {
        document.write(i);
        document.write("<br>");
    }
}
