var nthprimeStudentnumber = 167

function get8bitPrimes() {
    var min = 256, max = 512
    var primes = [];
    for(var i = 2; i < max; i++) {
        primes[i] = true;
    }
    for(var i = 2; i < max; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < max; j += i) {
                primes[j] = false;
            }
        }
    }
    var selected = []
    for(var i = min; i < max; i++) {
        if(primes[i] === true) {
            selected.push(i);
        }
    }
    return selected;
}

var primelist = get8bitPrimes();

var moduloMin = 65536,moduloMax = 131072

  var coprime = (base, modulo) =>{
    var temp;
    while(base>1){
      temp = modulo, modulo = base % modulo, base = temp;
    }
    return base == 1;
  }

var p, q, modulo;

for(let i = 0; i<primelist.length; i++){
  for(let j = i+1; j<primelist.length; j++){
    var mod = primelist[i]*primelist[j];
      if(mod > moduloMin && mod < moduloMax && coprime(mod, nthprimeStudentnumber)){
        p = primelist[i];
        q = primelist[j];
        modulo = mod;
      }
  }
}

console.log("p:"+p)
console.log("q:"+q)
console.log("e:"+nthprimeStudentnumber)
console.log("n:"+modulo)

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

var d = InverseModulo(nthprimeStudentnumber, (p-1)*(q-1))

var name = "Rytis Petronis"

var powMod = (number, pow, mod) =>{
  var result = 1;
	if (1 & pow)
		result = number;
	while (pow) {
		pow >>= 1;
		number = (number * number) % mod;
		if (pow & 1)
			result = (result * number) % mod;
	}
	return result;
}

var pad = (n, width, z) => {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
var Encode = (string, blocksize, e, n) => {
  var vals = chunkString([...name].map(char => pad(char.charCodeAt(),3)).join(""),blocksize);
  console.log(vals)
  var encoded = ""
  for(let chunk of vals){
    encoded += pad(powMod(parseInt(chunk),e,n),blocksize)
  }
  return encoded
}

var Decode = (encoded, blocksize, d, n) => {
  var vals = chunkString(encoded,blocksize);
  console.log(vals)
  var decoded = ""
  for(let chunk of vals){
    decoded += pad(powMod(parseInt(chunk),d,n),blocksize)
  }
  var string = String.fromCharCode( ...chunkString(decoded,3).map(char => parseInt(char)))
  return string
}

console.log(name)
var encoded = Encode(name, 6, nthprimeStudentnumber, modulo)
console.log("encoded: "+encoded)
console.log("encoded: "+Decode(encoded, 6, d, modulo))
