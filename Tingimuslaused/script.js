document.getElementById("saada").addEventListener("click", function(event) {
    event.preventDefault();

    let vanuseRühm;
    const vanus = document.getElementById("vanus").value;
    if (vanus < 10) {
        vanuseRühm = "laps";
    } else if (vanus >= 10 && vanus < 18) {
        vanuseRühm = "teismeline";
    } else {
        vanuseRühm = "täiskasvanu";
    }

    const lemmikVili = document.getElementById("puuvili").value.toLowerCase();
    let lemmikViliTulem;
    switch (lemmikVili) {
        case "õun":
            lemmikViliTulem = "Mulle meeldivad ka õunad.";
            break;
        case "pirn":
            lemmikViliTulem = "Suured ja mahlased pirnid on kõige paremad.";
            break;
        case "banaan":
            lemmikViliTulem = "Lõunamaal on banaanid eriti magusad.";
            break;
        case "ploom":
            lemmikViliTulem = "Ploomimahl on väga mõnus pannkoogi kõrval limpsida.";
            break;
        case "apelsin":
            lemmikViliTulem = "Aga apelsinid on ju nii hapud!"
            break;
        case "mandariin":
            lemmikViliTulem = "Mandariinid on jõululaua lahutamatu osa.";
            break;
        default:
            lemmikViliTulem = `${lemmikVili} on väga huvitav puuvili, aga mina seda ei tunne.`;
    }

    let pilet;
    if (vanuseRühm === "täiskasvanu") {
        pilet = "Täiskasvanu pilet on 20€.";
    } else {
        pilet = "Sooduspilet on 5€.";
    }

    document.getElementById("tulemus").innerHTML = `Te olete ${vanuseRühm}. <br> ${lemmikViliTulem} <br> ${pilet}`;
})