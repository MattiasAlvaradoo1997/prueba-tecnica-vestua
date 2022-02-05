/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */
const fs = require('fs')

function Escaleras(n){
    if(n < 3){
        return n;
    }
    else{
        var aux1 = 1;
        var aux2 = 2;
        for (let i = 2; i < n; i++){
            var actual = aux1 + aux2;
            aux1 = aux2;
            aux2 = actual;
        }
        return actual;
    }
}
const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);

const content = Escaleras(`${args}`);
 
fs.writeFile(`${__dirname}`+'/output.txt', content, err => {
  if (err) {
    console.error(err)
    return;
  }
})
