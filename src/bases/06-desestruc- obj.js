const persona = {
  name: "tony",
  age: 31,
  keyName: "Ironman",
};

/* const { age, name, keyName } = persona;

console.log(age, name, keyName); */

const doContext = ({ keyName, age, name }) => {
  return {
    nombre: keyName,
    anios: age,
    latLng: {
      lat: 14.1232,
      long: -145.101,
    },
  };
};

const avenger = doContext(persona);

const {
  nombre,
  anios,
  latLng: { lat, long },
} = avenger;

console.log(nombre, anios, lat, long);
