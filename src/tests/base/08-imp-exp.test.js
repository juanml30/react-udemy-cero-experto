import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe("Probando importancion y exportacion", () => {
  test("Debe devolver un Heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("Debe devolver un undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("Debe devolver los heroes de DC", () => {
    const own = "DC";
    const dcTest = heroes.filter((h) => h.owner === own);
    const dc = getHeroesByOwner(own)
    expect(dc).toStrictEqual(dcTest)
  });

  test("Debe devolver cantidad de heores de marvel", () => {
    const own = "Marvel";
    const dcTest = (heroes.filter((h) => h.owner === own)).length;
    const dc = getHeroesByOwner(own).length
    expect(dc).toBe(dcTest)
  });



});
