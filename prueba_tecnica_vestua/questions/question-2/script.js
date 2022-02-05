/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */
const fs = require('fs');

var output=[['productId','clicks','impressions','ctr']];

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`);
var data = fs.readFileSync(`${__dirname}`+'/'+`${args}`, "utf8")
if (data) {
    data = data.split("\r\n");
    data.shift()
    for (let i in data) { 
        
        data[i] = data[i].split(",");
        let existe = output.find(element => element[0] == data[i][1]);

        if(existe == undefined){
            let clicks = data.filter(elemento => (elemento[1] == data[i][1] && elemento[3] == 'click'));
            let impresiones = data.filter(elemento => (elemento[1] == data[i][1] && elemento[3] == 'impression'));
            let ctr = clicks.length / impresiones.length;
            if(ctr == Infinity){
                ctr = 1;
            }
            output.push([data[i][1], clicks.length,impresiones.length,ctr]);
        }


    }
}
output.pop();
let csvContent = "" 
    + output.map(e => e.join(",")).join("\n");

fs.writeFileSync("output.csv", csvContent)