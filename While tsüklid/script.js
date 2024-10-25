let userName = window.prompt("Sisesta oma nimi");

while (typeof userName !== "string" || userName.length < 3) {
    userName = window.prompt("Sisesta oma nimi");
}

userName = userName.split("");

do {
    console.log(userName.shift())
} while (userName.length > 0);