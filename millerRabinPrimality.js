var repeatCount = 10 //1/(4^-10) = 1,048,576
var candidate = 123698777

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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var millerTest = (d, n) =>  
{ 

    var a = 2 + getRndInteger(1, n-4) 

    var x = powMod(a, d, n); 

    if (x == 1 || x == n - 1) 
        return true; 
    
    while (d != n - 1)  
    { 
        x = (x * x) % n; 
        d *= 2; 

        if (x == 1) 
            return false; 
        if (x == n - 1) 
            return true; 
    } 

    return false; 
} 

var isPrime = (candidate, iterations) =>  
{ 
      
    if (candidate <= 1 || candidate == 4) 
        return false; 
    if (candidate <= 3) 
        return true; 
  
    var d = candidate - 1; 
      
    while (d % 2 == 0) {
      d = Math.floor(d / 2); }
        
    for (var i = 0; i < iterations; i++) { 

        if (!millerTest(d, candidate)) 
            return false; 
      }
   
    return true; 
}  

console.log("candidate "+ candidate + " is prime: "+isPrime(candidate, repeatCount))
console.log("candidate "+ 113 + " is prime: "+isPrime(113, repeatCount))