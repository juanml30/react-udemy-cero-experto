import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("getHeroeByIdAsync debe retorner un heroe async", () => {
  test("Debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((h) => {
      expect(h).toBe(heroes[0]);
      done();
    });
  });

  test("Debe retornar un error si el heroe no existe", (done) => {
    const id = 10;
    const msj = "No se pudo encontrar el héroe"
    getHeroeByIdAsync(id).catch( (e) => {
      expect(e).toBe(msj);
      done();
    });
  });
});
