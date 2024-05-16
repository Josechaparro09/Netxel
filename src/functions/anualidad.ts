export function calcularMonto(renta:number,plazoAnualidad:number,tInteres:number,valor:number){
    let tasa = (tInteres/100)
    let a = (1+tasa)**(plazoAnualidad*valor)
    let b = (a-1)/tasa
    return Number((renta*b).toFixed(2))
}
export function calcularVPresente(renta:number,plazoAnualidad:number,tInteres:number,valor:number){
    let tasa = (tInteres/100)
    let a = (1+tasa)**(plazoAnualidad*valor)
    let b = (1-a)/tasa
    return Number((renta*b).toFixed(2))
}
export function calcularRenta(vPresente:number,plazoAnualidad:number,tInteres:number,valor:number){
    let tasa = (tInteres/100)/valor
    let a = ((1+tasa)**(-plazoAnualidad*valor))
    let b = tasa/(1-a)
    return Number((vPresente*b).toFixed(2))}
export function calcularCapital(renta:number,plazoAnualidad:number,tInteres:number,enganche:number){
    return Number((renta*((1-((1+(tInteres/100))**-plazoAnualidad))/((tInteres/100)/plazoAnualidad))).toFixed(2))
}