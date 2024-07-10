import { log } from "console";

let prompt = require('prompt-sync')();


let n:number=parseInt(prompt(`please enter number of rows`));
let a:string="";
for(let i:number=1; i<=n; i++){
   
    
    for(let j:number=1; j<=i; j++){
    a+="*";
    }
a +="\n";

}
console.log(a);
 export{}