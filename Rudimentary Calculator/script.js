document.getElementById("arvuta").addEventListener("click", function(event) {
    event.preventDefault();

    const esimeneNumber = parseFloat(document.getElementById("esimeneNumber").value);
    const teineNumber = parseFloat(document.getElementById("teineNumber").value);
    const operatsioon = document.getElementById("operatsioon").value;

    let vastus = document.getElementById("tulemus");

    if(isNaN(esimeneNumber) || isNaN(teineNumber)) {
        vastus.innerHTML = "Palun sisesta korrektsed arvud!";
        return;
    }

    switch (operatsioon) {
        case "+":
            vastus.innerHTML = `${esimeneNumber} + ${teineNumber} = ${esimeneNumber + teineNumber}`;
            break;
        case "-":
            vastus.innerHTML = `${esimeneNumber} - ${teineNumber} = ${esimeneNumber - teineNumber}`;
            break;
        case "*":
            vastus.innerHTML = `${esimeneNumber} * ${teineNumber} = ${esimeneNumber * teineNumber}`;
            break;
        case "/":
            if (teineNumber === 0) {
                vastus.innerHTML = "Jagamisel ei saa jagaja olla null!";
            } else {
                vastus.innerHTML = `${esimeneNumber} / ${teineNumber} = ${esimeneNumber / teineNumber}`;
            }
            break;
        case "%":
            if (teineNumber === 0) {
                vastus.innerHTML = "Jagamisel ei saa jagaja olla null!";
            } else {
                vastus.innerHTML = `${esimeneNumber} % ${teineNumber} = ${esimeneNumber % teineNumber}`;
            };
            break;
        case "^":
            vastus.innerHTML = `${esimeneNumber} ^ ${teineNumber} = ${esimeneNumber ** teineNumber}`;
            break;
        default:
            vastus.innerHTML = "Antud operatsiooni pole!";
    }
})