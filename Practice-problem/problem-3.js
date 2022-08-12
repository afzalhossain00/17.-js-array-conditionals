// 1. find largest number
var num1 = 113;
var num2 = 79;
var num3 = 415;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('num1 is largest');
    }
    else {
        console.log('num3 is largest');
    }
}
else if (num2 > num3) {
    console.log('num2 is largest');
}
else {
    console.log('num3 is largest');
}


// 2. triangle is isocels.
var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if (firstSide == secondSide || secondSide == thirdSide || firstSide == thirdSide) {
    console.log('Isosceles');
}

else {
    console.log('Not Isoceles');
}