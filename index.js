  var unencoded = ""

  var TCalc = (unencoded) =>{
    var pad = (n, width, z) => {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    //var binary = unencoded.split("").map((each)=>pad(each.charCodeAt(0).toString(2),8)).join("");
    var binary = "0001100101000110010100011000010001100001000111000100010100010000010001000001000100000100010000010000000001000000000100000000011000000000100000000010000000001000000000100001000010000100001000010000100001000011000100001100010000110001000011000100001100010000110001000011000100001100010000111001000011100100001110010000111001000011100101001110010100111001010011100101001111010100110101010011010101001101010100110101010011010100001101010000110101000011011100001100110000111011000011101100001110110001111011000111101"
    var count0 = 0, count1 = 0, chunkLength=0, startOfChunk = "";
    var chunkCount = {}, t4ChunkCount ={};
    for(let chunk of binary.match(/.{1,2}/g)){
      chunkCount[chunk] = (chunkCount[chunk] || 0) + 1
    }
    for(let chunk of binary.slice(1,binary.length-1).match(/.{1,2}/g)){
      chunkCount[chunk] = (chunkCount[chunk] || 0) + 1
    }
    for(let i = 0; i<binary.length;i++){
      if(binary[i]==startOfChunk){chunkLength++;}
      else{
        if(chunkLength > 0)t4ChunkCount[startOfChunk+chunkLength] = (t4ChunkCount[startOfChunk+chunkLength] || 0) + 1
        
        chunkLength=1;
        startOfChunk=binary[i]
        }
      if(binary[i]=="1")count1++;
      else count0++;
    } 
    
    t4ChunkCount[startOfChunk+chunkLength] = (t4ChunkCount[startOfChunk+chunkLength] || 0) + 1
    var t1 = Math.pow(count1-count0,2)/binary.length

    var t21 = (4/(binary.length-1))
    var t22 = (Object.values(chunkCount).reduce((squareSum, value)=>{ return squareSum+Math.pow(value,2) },0))
    var t23 = (2/binary.length)
    var t24 = (Math.pow(count0,2)+Math.pow(count1, 2))

    var t2 =  (t21 * t22) - (t23 * t24) +1

    let len = binary.length;
    var t4 = 0,ei = (len-1+3)/Math.pow(2,1+2);
    for(let i = 1; ei>=5;){
      let t41 = Math.pow((t4ChunkCount["1"+i] || 0)-ei,2)/ei
      let t40 = Math.pow((t4ChunkCount["0"+i] || 0)-ei,2)/ei
      t4 += (t41 + t40);
      i++;
      ei = (len-i+3)/Math.pow(2,i+2)
    }
    let Xd = (d) => {
      var result = 0;
      for (let i = 0; i <= len - d + 1; i++)
      {
        if (binary[i] != binary[i + d - 1])
          result++;
      }
      return result;
    }

    let t5 = (d) =>{
	    return ((2*Xd(d) - len + d)/Math.sqrt(len-d));

    }


    console.log("t1:"+t1)
    console.log("t2:"+t2)
    console.log("t4:"+t4)
    console.log("t5:"+t5(200))
    }




 TCalc(unencoded)   

