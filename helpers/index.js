const wetonan = require('./weton');
const datenum = require('./datenum');

// yyyy-mm-dd

let vargin = process.argv.splice(2);
if (vargin.length < 1) {
  throw new Error('arguments required');
}
if (vargin.length > 3) {
  throw new Error('too many arguments');
}

const [ year, month, day ] = vargin;

console.log(year, month, day);
const jday = datenum(Number(year), Number(month), Number(day) );

console.log(wetonan(jday));