const books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];

const temperatures = [18, 21, 19, 22, 20, 17, 16];

console.log("Raamatuid on " + books.length + " tükki.");
console.log("Lühima pealkirjaga raamat on " + books.reduce((a, b) => a.length < b.length ? a : b) + ".");
console.log("Raamatute pealkirjad tähestikulises järjekorras: " + books.sort() + ".");
console.log(books.includes("The Great Gatsby") ? "Raamatukogus on raamat The Great Gatsby." : "Raamatukogus ei ole raamat The Great Gatsby.");
console.log("Viimase nädala temperatuurid, mis olid üle 20 kraadi: " + temperatures.filter(temperature => temperature > 20) + ".");
console.log("Keskmine temperatuur viimase nädala jooksul oli " + temperatures.reduce((a, b) => a + b) / temperatures.length + " kraadi.");

const temperaturesF = temperatures.map(temperature => Math.round((temperature * (9 / 5) + 32)*10)/10);
console.log("Temperatuurid fahrenheitides: " + temperaturesF + ".");

console.log("Temperatuurid kahanevas järjekorras: " + temperatures.sort((a, b) => b - a) + ".");