  var TCalc = (unencoded) =>{
    var pad = (n, width, z) => {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    function toBinary (value) {
      var maybeTwosComplement = (value < 0) ? ~value+1: value//if negative give twosComplement
    return pad(maybeTwosComplement.toString(2),9);
  }
    //var binary = unencoded.split("").map((each)=>pad(each.charCodeAt(0).toString(2),8)).join("");
  let lfsr1 = () =>
    {
    var start_state = 100;  /* Any nonzero start state will work. */
    var repeatLen = 511;
    var lfsr = start_state;
    var bit;                   
    var period = 0;
    string = ""
    do
    {   /* taps: 9 5;*/
        bit = ((lfsr >> 0) ^ (lfsr >> 4 ));
        bit = bit & 1;
        lfsr = (lfsr >>> 1) | (bit << 8);
        string+=toBinary(lfsr);
        ++period
    }
    //while(false)
    while (string.length<=repeatLen);

    return string.substring(0,repeatLen);
    }
  console.log(lfsr1());
  }
 TCalc()   
