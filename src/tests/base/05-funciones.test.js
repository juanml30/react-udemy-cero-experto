import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getuser debe de retornar un objeto", () => {
    const userTest = { uid: "ABC123", username: "El_Papi1502" };
    const user = getUser();

    expect(user).toStrictEqual(userTest);
  });
  test("getusuarioactivo debe de retornar un objeto", () => {
    const nombre = "Juan"
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre)
    expect(user).toStrictEqual(userTest)
  });
});
