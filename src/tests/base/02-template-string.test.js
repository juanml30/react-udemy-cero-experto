import { getSaludo } from "../../base/02-template-string";


describe("Pruebas en 02-template-string", () => {
  test("getSaludo debe retornar Hola Juan", () => {
      const nombre = "Juan"
      const saludo = getSaludo(nombre);
      expect(saludo).toBe( "Hola "+ nombre + "!")
  });

  test("GetSaludo si no tiene argumento debe retornar Hola Carlos", () =>{
      const saludo = getSaludo()
      expect(saludo).toBe("Hola Carlos!")
  })

});
