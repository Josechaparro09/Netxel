export function calcularIntCompuesto(cInicial:number,tInteres:number,tiempo:number, valor1:number,valor2:number){
    
    return Number((cInicial*(1+((tInteres/100)/valor2))**(tiempo*valor1)).toFixed(2))

}
export function calcularIntCompuestoSimple(cInicial:number,tInteres:number,tiempo:number, valor1:number,valor2:number){
    let total = Number((cInicial*(1+(tiempo*((tInteres/100)/valor2)))).toFixed(2))
    console.log(cInicial,tiempo,tInteres/100,valor2);
    
    return total
}