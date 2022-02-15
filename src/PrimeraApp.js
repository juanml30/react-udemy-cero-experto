//Functional Components

const PrimeraApp = () => {
  const saludo1 = "Hola mundo";

  const saludo2 = {
    nombre: "Juan",
    edad: 31,
  };

  return (
    <>
      <h1>{saludo1}</h1>
      <pre> {JSON.stringify(saludo2)}</pre>
      <p>Mi primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
