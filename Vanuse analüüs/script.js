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
        else if (age <= 20) {
            alert('Sa lähed sööma kell 11');
        }
        else {
            alert('Sa lähed sööma kell 12');
        }
    } else {
        alert('Sisesta vanus numbrina!');
    }
}