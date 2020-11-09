  var studentNumber = 1712175
  var base = 43

  var InverseModulo = (base, modulo) =>{
    var temp,quotient,mod = modulo;
    var x0 =0, x1 = 1;
    while(base>1){
      quotient = Math.floor(base/modulo)
      temp = modulo, modulo = base % modulo, base = temp;
      temp = x0, x0 = x1 - quotient * x0, x1 = temp;
    }
    if(base != 1){console.log("not coprime"); return 0}
    else return x1 < 0 ? mod + x1 : x1;
  }
console.log(InverseModulo(2,4))
console.log(InverseModulo(37,190210129))  
console.log(InverseModulo(base,studentNumber))

