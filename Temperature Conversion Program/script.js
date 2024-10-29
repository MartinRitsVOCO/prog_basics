const tempUnitRadios = document.querySelectorAll('input[name="tempUnit"]');
const sourceTemp = document.getElementById('sourceTemp');
let sourceTempValue = parseFloat(sourceTemp.value);
const resultC = document.getElementById('resultC');
const resultF = document.getElementById('resultF');
const resultK = document.getElementById('resultK');
let tempUnit = Array.from(tempUnitRadios).find(radio => radio.checked).value;

sourceTemp.addEventListener('input', calculateTemperatures);

for (const radio of tempUnitRadios) {
    radio.addEventListener('change', calculateTemperatures);
}

function calculateCelsius() {
    if (tempUnit === 'C') {
        return sourceTempValue;
    } else if (tempUnit === 'F') {
        return (sourceTempValue - 32) * 5 / 9;
    } else if (tempUnit === 'K') {
        return sourceTempValue - 273.15;
    }
}
function calculateFahrenheit() {
    if (tempUnit === 'C') {
        return (sourceTempValue * 9 / 5) + 32;
    } else if (tempUnit === 'F') {
        return sourceTempValue;
    } else if (tempUnit === 'K') {
        return (sourceTempValue - 273.15) * 9 / 5 + 32;
    }
}
function calculateKelvin() {
    if (tempUnit === 'C') {
        return sourceTempValue + 273.15;
    } else if (tempUnit === 'F') {
        return (sourceTempValue - 32) * 5 / 9 + 273.15;
    } else if (tempUnit === 'K') {
        return sourceTempValue;
    }
}

function calculateTemperatures() {
    tempUnit = Array.from(tempUnitRadios).find(radio => radio.checked).value;
    sourceTempValue = parseFloat(sourceTemp.value);
    resultC.value = Math.round(calculateCelsius() * 10)/10;
    resultF.value = Math.round(calculateFahrenheit() * 10)/10;
    resultK.value = Math.round(calculateKelvin() * 10)/10;
}