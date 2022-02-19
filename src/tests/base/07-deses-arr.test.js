import { retornaArreglo } from "../../base/07-deses-arr"

describe("Pruebas en desestructuracion", ()=>{
    test("Debe de retornar un string y un numero",()=>{
        const [letras, numero] = retornaArreglo()
        //expect(arr).toEqual(['ABC', 123])
        expect(typeof letras).toBe("string")
        expect(letras).toBe("ABC")
        expect(typeof numero).toBe("number")
        expect(numero).toBe(123)
    })
})