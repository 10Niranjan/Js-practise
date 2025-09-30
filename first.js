let num = prompt("Enter the score:");
 if (80 <= num && num <= 100) {
    console.log("A");
 } else if (70 <= num && num <= 89) {
    console.log("B");
 } else if (60 <= num && num <= 69) {
    console.log("C");
 }else if (50 <= num && num <= 59) {
    console.log("D");
 }else if (0 <= num && num <= 49) {
    console.log("F");
 }else {
    console.log(" Score should be between 0 and 100");
 }