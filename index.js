// Comment
// console.log('Hello World');

// let name = 'Martin';
// console.log(name);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// const myButton = document.getElementById('myButton');
// const myLabel = document.getElementById('myLabel');
// const min = 1;
// const max = 6;

// myButton.onclick = function() {
//     const RNG = Math.floor(Math.random() * max) + min;
//     myLabel.innerHTML = RNG;
// };

// let age = 25;

// if (age >= 18) {
//     console.log('You are old enough to enter this site');
// }
// else if (age < 0) {
//     console.log('You haven\'t been born yet');
// }
// else {
//     console.log('You must be 18+ to enter this site');
// }

const ageField = document.getElementById('ageField');
const ageButton = document.getElementById('ageButton');

ageButton.onclick = function() {
    const age = ageField.value;
    if (!isNaN(age)) {
        if (age <= 16 && age >= 7) {
            alert('Sa lähed sööma kell 10');
        }
        else if (age < 7) {
            alert('Sa oled liiga noor, et koolis õppida!');
        }
        else if (age < 20) {
            alert('Sa lähed sööma kell 11');
        }
        else {
            alert('Sa lähed sööma kell 12:30');
        }
    } else {
        alert('Sisesta vanus numbrina!');
    }
}