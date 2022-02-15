const sayHi = function (name) {
  return `Hi, ${name}`;
};

const sayHi2 = (name) => {
  return `Hi, 2, my name is ${name}`;
};

const sayHi3 = (name) => `Hi, function 3, my name is ${name}`;

const sayHi4 = (name) => `Hi`;

console.log(sayHi("juan"));
console.log(sayHi2("juan"));
console.log(sayHi3("juan"));
console.log(sayHi4());

const getUser = () => ({
  uid: "ABC123",
  username: "ASd",
});

console.log(getUser());

const getUserActive = (nombre) => ({
    uid: "ABC567",
    username: nombre,
})

const userActive = getUserActive("Fernando");
console.log(userActive);
