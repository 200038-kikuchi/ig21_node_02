const chalk = require("chalk");
const cities = require("chalk");

console.log(chalk.bgRed('Hello YSE!!!!!'))
console.log(chalk.bgGreen('Hello YSE!!!!!'))

let lat = process.argv[2]
let lng = process.argv[3]

if(lat && lng){
    let city = cities.gps_lookup(lat,lng)
    console.log(city)
}