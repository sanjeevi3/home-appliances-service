 const objectToArray=(input)=>{
     let output=[];
     for (const key in input) {
         if (input.hasOwnProperty(key)) {
             key.replace("_"," ")
             output.push({
                 key:key,
                 value:input[key]
             });
             
         }
     }
     return output;
 }

 export default objectToArray;