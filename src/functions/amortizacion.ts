export function calcularArmotizacion(valor:number,periodos:number):number[]{
    let numeros:number[] = []
    let armor=valor/periodos
    for(let i=0;i<periodos;i++){
        numeros.push(valor)
        valor-=armor
    }
    return numeros
}