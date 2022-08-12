var totalScore = 50;
if (90 <= totalScore) {
    console.log('grade A+');
}
else if (80 <= totalScore && 90 > totalScore) {
    console.log('grade A');
}
else if (70 <= totalScore && 80 > totalScore) {
    console.log('grade B');
}
else if (60 <= totalScore && 70 > totalScore) {
    console.log('grade C');
}
else if (50 <= totalScore && 60 > totalScore) {
    console.log('grade D');
}
else if (50 > totalScore) {
    console.log('F grade');
}