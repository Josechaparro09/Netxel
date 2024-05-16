export function calcularCapital(renta:number,plazoAnualidad:number,tInteres:number,enganche:number){
    let tasa = (tInteres/100)
    let a = (1+tasa)**(plazoAnualidad*enganche)
    let b = (a-1)/tasa
    return Number((renta*b).toFixed(2))
}