"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require('prompt-sync')();
let n = parseInt(prompt(`please enter number of rows`));
let a = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        a += "*";
    }
    a += "\n";
}
console.log(a);
