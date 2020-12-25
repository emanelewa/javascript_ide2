let dayNumber = Number(prompt("Enter Number Between 1 , 7"));
const caseNumber =
    dayNumber === 1 ? document.write('Saturday'):
    dayNumber === 2 ? document.write('Sunday'):
    dayNumber === 3 ? document.write('Monday'):
    dayNumber === 4 ? document.write("Tuesday"):
    dayNumber === 5 ? document.write("Wednesday"):
    dayNumber === 6 ? document.write("Thursday"):
    dayNumber === 7 ? document.write('Friday'):
    document.write('Invalid Number :^');
