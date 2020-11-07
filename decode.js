var encoded = "0001101100011110000110110001101100011010010100110011001000000000000110000001110100011001000011110001101000111010"
console.log("asdf")
var vernamDecode = (encoded) =>{
  var pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
  var splitEncoded = encoded.match(/.{1,8}/g).map((binary)=>parseInt(binary, 2))
  //console.log(splitEncoded)
  var secret = "01001001011001110110111101110010011010010111001101100010011001010110110001101111011101100110000101110011"
  var splitSecret = secret.match(/.{1,8}/g).map((binary)=>parseInt(binary, 2))
  var decoded = [];
  let i = 0;
  for(let i = 0; i<splitEncoded.length;){
    for(let j = 0; j<splitSecret.length && i< splitEncoded.length; j++){
      decoded.push(pad((splitEncoded[i]^splitSecret[j]).toString(2),8))
      i++;
  } 
  }
  console.log(decoded.join(" "))
}
vernamDecode(encoded)