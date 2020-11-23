  var mod = 3367

  var phi = (n) =>{
    var count = 1;
    for(let i = 2; i<n;i++){
    if(coprime(i,mod)==true)
    count++
    }
    return count;
  }

  var coprime = (base, modulo) =>{
    var temp;
    while(base>1){
      temp = modulo, modulo = base % modulo, base = temp;
    }
    return base == 1;
  }

var phiValue = phi(mod)
var list =[]
for(let i = 2; i<phiValue;i++){
  if(coprime(i,phiValue)==true)list.push(i)
}

console.dir("phi = " + phiValue)
console.log("Count = " + list.length)  
console.dir(list, {'maxArrayLength': null})