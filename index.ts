 import { log } from "console";

var prompt = require('prompt-sync')();
let n1=parseInt(prompt("please enter your first value:"))
let n2=parseInt(prompt("please enter your second value:"))
let Operator=prompt("please enter your Operator(+,-,*,/):")
if(Operator=="+"){
    console.log(`The Answer of${n1} ${Operator} ${n2}=${n1+n2}`);
    
}
 else if(Operator=="-"){
    console.log(`The Answer of${n1} ${Operator} ${n2}=${n1-n2}`);
    
}
 else if(Operator=="*"){
    console.log(`The Answer of${n1} ${Operator} ${n2}=${n1*n2}`);
    
}
 else if(Operator=="/"){
    console.log(`The Answer of${n1} ${Operator} ${n2}=${n1/n2}`);
    
}
else{
    console.log("You put incorrect Value");
    
}
    

export {};