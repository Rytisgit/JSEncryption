  var unencoded = "Rytis Petronis"

  var vernam = (unencoded) =>{
      var pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    var binary = unencoded.split("").map((each)=>each.charCodeAt(0).toString(10));
    var secret = "01001001011001110110111101110010011010010111001101100010011001010110110001101111011101100110000101110011"
    var splitSecret = secret.match(/.{1,8}/g).map((binary)=>parseInt(binary, 2))
    var encoded = [];
    let i = 0;
    for(let i = 0; i<binary.length;){
      for(let j = 0; j<splitSecret.length && i< binary.length; j++){
        encoded.push(pad((binary[i]^splitSecret[j]).toString(2),8))
        i++;
    } 
    }
    console.log(encoded.join(""))
}