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

// const ageField = document.getElementById('ageField');
// const ageButton = document.getElementById('ageButton');

// ageButton.onclick = function() {
//     const age = ageField.value;
//     if (!isNaN(age)) {
//         if (age <= 16 && age >= 7) {
//             alert('Sa lähed sööma kell 10');
//         }
//         else if (age < 7) {
//             alert('Sa oled liiga noor, et koolis õppida!');
//         }
//         else if (age < 20) {
//             alert('Sa lähed sööma kell 11');
//         }
//         else {
//             alert('Sa lähed sööma kell 12:30');
//         }
//     } else {
//         alert('Sisesta vanus numbrina!');
//     }
// }

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 0.1 : 0;
// console.log(`Your total is ${purchaseAmount * (1 - discount)}€`);
// Ternary operaator kasutatakse lühitalt tinglause kirjutamiseks

// let day = 246;

// switch (day) {
//     case 1:
//         console.log('Esmaspäev');
//         break;
//     case 2:
//         console.log('Teisipäev');
//         break;
//     case 3:
//         console.log('Kolmapäev');
//         break;
//     case 4:
//         console.log('Neljapäev');
//         break;
//     case 5:
//         console.log('Reede');
//         break;
//     case 6:
//         console.log('Laupapäev');
//         break;
//     case 7:
//         console.log('Pühapäev');
//         break;
//     default:
//         console.log(`${day} on vigane päeva väärtus`);
// }

// let userName = "Martin";
// userName.charAt(0) //.charAt annab sümboli sõne n-dalt kohalt. Sõne sümbolite loendamist alustatakse 0st
// userName.indexOf('a'); //.indexOf otsib mis kohal sõnas on teatud sümbol. Leiab esimese vaste
// userName.lastIndexOf('a'); //.lastIndexOf leiab viimase vaste
// userName.length; //.length annab sõne pikkuse. () ei ole!
// userName.trim(); //.trim eemaldab tühikud
// userName.toUpperCase(); //.toUpperCase muudab sõne tähed suurteks
// userName.toLowerCase(); //.toLowerCase muudab sõne tähed väikesteks
// userName.repeat(3); //.repeat kordab sõne n korda
// userName.startsWith('M'); //.startsWith testib kas sõne algab mingi väärtusega. Tulemuseks on true või false väärtus, mis on hea tinglausete moodustamiseks
// userName.endsWith('n'); //.endsWith testib kas sõne lõppeb mingi väärtusega
// userName.includes('t'); //.includes testib kas sõne sisaldab mingi väärtust
// userName.replaceAll('a', 'b'); //.replaceAll asendab kõik esimese parameetri väärtused teise parameetri väärtustega. Hea kasutada täpitähtetega möllates
// userName.padStart(20, "AEO") //.padStart lisab sõne algusesse teise parameetri väärtuse kuni sõne on esimese parameetri pikkune
// userName.padEnd(20, "AEO") //.padEnd lisab sõne lõppu teise parameetri väärtuse kuni sõne on esimese parameetri pikkune

// let fullName = "Martin Ritsberg";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

//.slice lõikab sõnest välja osa. Esimene parameeter näitab kust alustada, teine parameeter kus lõpetada. Teise parameetri võib välja jätta, siis lõigatakse sõne lõpuni.

// const email = "martin.ritsberg@voco.ee";

// let userName = email.slice(0, email.indexOf("@"));
// let domain = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(domain);

// username = "  maRTin  ";

// console.log(username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase());
//Meetodide chain-des saab kirjutada mitu koodi rida ühele reale. Siin tuleb jälgida meetodite järjekorda ja mõelda mis vahetulemused on.