let users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Jane", age: 35 },
    { name: "Tom", age: 40 },
    { name: "Sara", age: 29 }
];

function isOlderThan25(user) {
    return user.age > 25;
}

function addIsAdultField(user) {
    user.isAdult = user.age > 18;
    return user;
}

function logUser(user) {
    console.log(user.name + " is " + (user.isAdult ? "an adult" : "not an adult"));
}

const usersOld = users.filter(isOlderThan25);

users = users.map(user => {
    addIsAdultField(user);
    return user = {
        name: user.name,
        age: user.age,
        isAdult: user.isAdult
    };
});

users.forEach(logUser);
console.log(users.reduce((sum, user) => sum + user.age, 0) / users.length);