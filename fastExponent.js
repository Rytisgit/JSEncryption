  var studentNumber = 1712175
  var prime = 43
  var number = 14

  var fastPow = (number, pow) =>{
    if(pow == 0)return 1;
    if(pow == 1)return number
    var num = powaa(number, Math.floor(pow/2));
    if(pow % 2 == 0) return num*num;
    else return num*num*number
  }


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

console.log(studentNumber + "^" +prime + " mod " + prime+ "-"+ number +" = " + powMod(studentNumber,prime,prime-number))
console.log(studentNumber+"^"+studentNumber+" last digit in base "+number+" is: "+powMod(studentNumber,studentNumber,14))

