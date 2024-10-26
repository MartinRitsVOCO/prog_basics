const tempUnitRadios = document.querySelectorAll('input[name="tempUnit"]');
const sourceTemp = document.getElementById('sourceTemp');
const resultC = document.getElementById('resultC');
const resultF = document.getElementById('resultF');
const resultK = document.getElementById('resultK');
let tempUnit = Array.from(tempUnitRadios).find(radio => radio.checked).value;

function calculateCelsius() {
    if (tempUnit === 'C') {
        return sourceTemp.value;
    } else if (tempUnit === 'F') {
        return (sourceTemp.value - 32) * 5 / 9;
    } else if (tempUnit === 'K') {
        return sourceTemp.value - 273.15;
    }
}
function calculateFahrenheit() {
    if (tempUnit === 'C') {
        return (sourceTemp.value * 9 / 5) + 32;
    } else if (tempUnit === 'F') {
        return sourceTemp.value;
    } else if (tempUnit === 'K') {
        return (sourceTemp.value - 273.15) * 9 / 5 + 32;
    }
}
function calculateKelvin() {
    if (tempUnit === 'C') {
        return sourceTemp.value + 273.15;
    } else if (tempUnit === 'F') {
        return (sourceTemp.value - 32) * 5 / 9 + 273.15;
    } else if (tempUnit === 'K') {
        return sourceTemp.value;
    }
}

function calculateTemperatures() {
    tempUnit = Array.from(tempUnitRadios).find(radio => radio.checked).value;
    console.log(tempUnit);
    resultC.value = calculateCelsius();
    resultF.value = calculateFahrenheit();
    resultK.value = calculateKelvin();
}