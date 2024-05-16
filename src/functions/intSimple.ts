export function calcularIntSimple(cInicial:number,tInteres:number,tiempo:number, valor:number){
  return Number((cInicial*(tiempo*valor)*(tInteres/100)).toFixed(2))
}

export function calcularTiempo(cInicial:number, cFinal:number,tInteres:number,intereses:number){
  if(cInicial!=0&&cFinal!=0){
    intereses=cFinal-cInicial
  }
  return Number(((intereses)/(cInicial*(tInteres/100))).toFixed(2))
}

export function calcularCfinal(tiempo:number,tInteres:number,intereses:number,cInicial:number,cFinal:number,valor:number){
  if(cInicial==0&&cFinal==0){
    intereses=cFinal-cInicial
  }
  if(intereses!=0 && tInteres!=0 && tiempo!=0){
    return Number(((intereses)/(tInteres*(tiempo*valor))).toFixed(2))
  }else {
    console.log(cInicial,tiempo*valor,tInteres/100,"int: ",calcularIntSimple(cInicial,tiempo,valor,tInteres),cInicial);
    
    return Number(cInicial)+calcularIntSimple(cInicial,tiempo,valor,tInteres)
  }
    
}

export function calcularTInteres(cInicial:number,cFinal:number,intereses:number,tiempo:number,valor:number){
  if(cInicial!=0&&cFinal!=0){
    intereses=cFinal-cInicial
  }
  return Number(((intereses*(tiempo*valor)/cInicial)*100).toFixed(2))
}

export function calcularCInicial(cFinal:number,cInicial:number, tInteres:number,tiempo:number,intereses:number,valor:number){
  if(cInicial!=0&&cFinal!=0){
    intereses=cFinal-cInicial
  }
  return Number(((intereses)/((tInteres/100)*(tiempo*valor))).toFixed(2))
}

export function calcularIntereses(cInicial:number,tInteres:number,tiempo:number,cFinal:number,valor:number){
 
  if(cInicial!=0 && tInteres!=0 && tiempo!=0) {
    return Number((cInicial*(tInteres/100)*(tiempo*valor)).toFixed(2))
  }else{
    return Number((cFinal-cInicial).toFixed(2))
  }
}
