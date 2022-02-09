const  persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    drieccion: {
        ciudad: "Olavarria",
        zip: 7400,
        lat: 45.165,
        long: 12.123
    }
}

console.log(
    {
        persona
    }
);

const persona2 = {...persona};
persona2.nombre = "YOOOOOOO"

console.log(persona);
console.log(persona2 );